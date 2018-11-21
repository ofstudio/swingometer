import React from 'react'
import CameraBox from '../components/CameraBox'
import CameraBoxIcon from '../components/CameraBoxIcon'
import MessageBox from '../components/MessageBox'
import DeviceTracker from '../components/DeviceTracker'
import BigButton from '../components/BigButton'
import Camera from '../components/Camera'
import ProgressBar from '../components/ProgressBar'

export default function sceneStart({dispatch}) {
  return (
    <>
      <CameraBox>
        <CameraBoxIcon type='camera'/>
        <ProgressBar type="start"/>
        <Camera dispatch={dispatch}/>
      </CameraBox>
      <BigButton type="start" nextScene="analyze" dispatch={dispatch}/>
      <MessageBox
        type="start"
        title="Померить свинг-контент"
        message="Наведите камеру на танцоров"
      />
      <DeviceTracker dispatch={dispatch}/>
    </>
  )
}
