import React from 'react'
import CameraBox from '../components/CameraBox'
import CameraBoxIcon from '../components/CameraBoxIcon'
import MessageBox from '../components/MessageBox'
import DeviceTracker from '../components/DeviceTracker'
import BigButton from '../components/BigButton'
import Camera from '../components/Camera'
import MotionTracker from '../components/MotionTracker'
import AuthCheck from '../components/AuthCheck'
import Analyze from '../components/Analyze'
import ProgressBar from '../components/ProgressBar'
import ScoreBar from '../components/ScoreBar'

export default function SceneAnalyze({dispatch, isAuth, adjust, score, adjustId}) {
  return (
    <>
      <CameraBox>
        <CameraBoxIcon type='camera'/>
        <ProgressBar type="analyze"/>
        <Camera dispatch={dispatch}/>
        <MotionTracker/>
      </CameraBox>
      <BigButton type="analyze" nextScene="start" dispatch={dispatch}/>
      <MessageBox type="analyze" title="Анализируем"/>
      <DeviceTracker dispatch={dispatch}/>
      <AuthCheck dispatch={dispatch} isAuth={isAuth}/>
      <Analyze dispatch={dispatch} adjust={adjust} score={score} adjustId={adjustId}/>
      <ScoreBar score={score}/>
    </>
  )
}
