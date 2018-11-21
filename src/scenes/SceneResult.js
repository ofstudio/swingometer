import React from 'react'
import ResultCard from '../components/ResultCard'
import BigButton from '../components/BigButton'
import CameraBox from "../components/CameraBox";
import CameraBoxIcon from "../components/CameraBoxIcon";
import ProgressBar from "../components/ProgressBar";
import Camera from "../components/Camera";

export default function SceneResult({dispatch, score, capturedImage}) {
  return (
    <>
      <CameraBox>
        <CameraBoxIcon type='camera'/>
        <ProgressBar type="result"/>
        <Camera dispatch={dispatch}/>
      </CameraBox>
      <BigButton type="result" nextScene="start" dispatch={dispatch}/>
      <ResultCard score={score} capturedImage={capturedImage}/>
    </>
  )
}
