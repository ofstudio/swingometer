import React, {useReducer} from 'react'
import './styles/App.sass'
import LockScreen from './components/LockScreen'
import reducer from './reducer'
import SceneError from './scenes/SceneError'
import SceneStart from './scenes/SceneStart'
import SceneAnalyze from './scenes/SceneAnalyze'
import SceneCalculate from './scenes/SceneCalculate'
import TopBar from './components/TopBar'
import SceneResult from './scenes/SceneResult'

const scenes = {
  error: SceneError,
  start: SceneStart,
  analyze: SceneAnalyze,
  calculate: SceneCalculate,
  result: SceneResult
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    isLocked: process.env.REACT_APP_STARTUP_LOCK !== 'false',
    lockMessage: 'Введите пин-код',
    scene: 'start',
    adjust: 0,
    score: 0
  })

  return (
    <div className="Swingometer">
      {state.isLocked && (
        <LockScreen lockMessage={state.lockMessage} dispatch={dispatch}/>
      )}
      <TopBar/>
      {scenes[state.scene]({dispatch, ...state})}
    </div>
  )
}
