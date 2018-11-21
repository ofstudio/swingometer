import React, {useEffect} from 'react'
import '../styles/CameraCapture.sass'

export default function CameraCapture({dispatch}) {

  useEffect(() => {
    try {
      const camera = document.getElementById('camera')
      const capture = document.getElementById('capture')
      capture.width = camera.videoWidth
      capture.height = camera.videoHeight
      // noinspection JSCheckFunctionSignatures
      capture.getContext("2d").drawImage(camera, 0, 0)
      dispatch({type: 'capture', value: capture.toDataURL("image/webp")})
    } catch (e) {
      dispatch({
        type: 'error',
        title: 'Ошибка',
        message: 'Что-то пошло не так'
      })
    }
  }, [])

  return (
    <div className="CameraCapture">
      <canvas id="capture"/>
    </div>
  )
}
