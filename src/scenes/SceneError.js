import React from 'react'
import CameraBox from '../components/CameraBox'
import CameraBoxIcon from '../components/CameraBoxIcon'
import MessageBox from '../components/MessageBox'
import BigButton from '../components/BigButton'

export default function SceneError({title, message}) {
  return (
    <>
      <CameraBox>
        <CameraBoxIcon type="error"/>
      </CameraBox>
      <BigButton type="error" handleClick={() => null}/>
      <MessageBox type="error" title={title} message={message}/>
    </>
  )
}
