import React, {useEffect} from 'react'
import '../styles/Camera.sass'

export default function Camera({dispatch}) {

  const connectCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'},
      audio: false
    })
      .then(stream => {
        const camera = document.getElementById('camera')
        if (camera) camera.srcObject = stream
      })
      .catch((e) => {
        console.log(e.message)
        dispatch({
          type: 'error',
          title: 'Нет доступа к камере',
          message: 'Разрешите приложению использовать камеру'
        })
      })
  }

  useEffect(connectCamera, [])

  return (
    <div className="Camera">
      <video id="camera" autoPlay playsInline/>
    </div>
  )
}
