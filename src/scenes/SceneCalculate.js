import React from 'react'
import CameraBox from '../components/CameraBox'
import CameraBoxIcon from '../components/CameraBoxIcon'
import MessageBox from '../components/MessageBox'
import BigButton from '../components/BigButton'
import Camera from '../components/Camera'
import Calculate from '../components/Calculate'
import ProgressBar from '../components/ProgressBar'
import ScoreBar from '../components/ScoreBar'
import CameraCapture from '../components/CameraCapture'

export default function SceneAnalyze({dispatch, score}) {
  return (
    <>
      <CameraBox>
        <CameraBoxIcon type='camera'/>
        <ProgressBar type="calculate"/>
        <Camera dispatch={dispatch}/>
      </CameraBox>
      <BigButton type="analyze" nextScene="start" dispatch={dispatch}/>
      <MessageBox type="calculate" title="Вычисляем"/>
      <Calculate dispatch={dispatch}/>
      <ScoreBar score={score}/>
      <CameraCapture dispatch={dispatch}/>
    </>
  )
}
