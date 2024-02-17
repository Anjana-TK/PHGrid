import React, { useEffect, useRef, useState } from 'react'

function PPMViewer() {
  const canvasRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState('')

  const showError = (msg) => {
    setErrorMessage(`Error: ${msg}`)
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  const processPPM = (fileContents) => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    fileContents = fileContents.replace(/^\s+/, '').replace(/\s+$/, '')
    var data = fileContents.split(/\s+/)

    if (fileContents.substr(0, 2) !== 'P3' || data[0] !== 'P3') {
      showError('File is not a PPM')
      return
    }

    var width = data[1]
    var height = data[2]
    var maxColors = data[3]

    if (data[3] !== '255') {
      showError('MaxColors is not 255')
      return
    }

    if (data.length !== 3 * width * height + 4) {
      showError(
        `Not enough pixel data. Found: ${data.length - 4}, Expecting: ${
          3 * width * height
        }, Based on width = ${width} and height = ${height}`
      )
      return
    }

    setErrorMessage('')

    canvasRef.current.width = width
    canvasRef.current.height = height

    var img = ctx.getImageData(0, 0, width, height)
    var pixels = img.data

    var imageIndex = 0
    for (var i = 4; i < data.length; i += 3) {
      pixels[imageIndex++] = data[i] // r
      pixels[imageIndex++] = data[i + 1] // g
      pixels[imageIndex++] = data[i + 2] // b
      pixels[imageIndex++] = 255 // a
    }
    ctx.putImageData(img, 0, 0)
  }

  useEffect(() => {
    fetch('/image.ppm')
      .then((response) => response.text())
      .then((data) => {
        processPPM(data)
      })
  }, [])

  return (
    <div>
      <div id="name">PPM Viewer</div>
      <div id="errorDiv">{errorMessage}</div>
      <div>
        <canvas
          id="imageCanvas"
          width="100"
          height="100"
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  )
}

export default PPMViewer
