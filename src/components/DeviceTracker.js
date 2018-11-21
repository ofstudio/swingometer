import {useEffect} from 'react'

const timings = {
  resetAuthTimeout: Number(process.env.REACT_APP_TIMING_AUTH_CHECK_KEEP) || 4000,
  updateScoreInterval: 250,
}

export default function DeviceTracker({dispatch}) {

  let isAuth = false
  let adjust = 0
  let resetAuthTimeoutHandler = null
  let updateScoreIntervalHandler = null
  let sensor = {
    alpha: 0,
    beta: 0,
    gamma: 0
  }

  const orientationHandler = (event) => {
    sensor = {
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma
    }
    updateAuth(sensor)
  }

  const updateAuth = () => {
    if (
      sensor.beta > -10
      && sensor.beta < 40
      && sensor.gamma < -30
      && isAuth === false
    ) {
      isAuth = true
      dispatch({type: 'authorize'})
      resetAuthTimeoutHandler = window.setTimeout(() => {
        isAuth = false
        dispatch({type: 'de-authorize'})
        resetAuthTimeoutHandler = null
      }, timings.resetAuthTimeout)
    }
  }

  const updateScore = () => {
    const bC = 90 - sensor.beta
    adjust = sensor.gamma * bC / 80 + 0.5
    if (Math.abs(adjust) > 4) adjust = 4 * (Math.abs(adjust) / adjust)
    dispatch({type: 'adjust', value: adjust})
  }

  useEffect(() => {
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', orientationHandler)
        updateScoreIntervalHandler = window.setInterval(
          updateScore,
          timings.updateScoreInterval
        )
      }
      else {
        console.log('Device not supported')
        dispatch({
          type: 'error',
          title: "Несовместимое устройство",
          message: "Приложение не поддерживается вашим устройством"
        })
      }
      return () => {
        window.removeEventListener('deviceorientation', orientationHandler)
        window.clearTimeout(resetAuthTimeoutHandler)
        window.clearInterval(updateScoreIntervalHandler)
      }
    },
    []
  )

  // noinspection JSConstructorReturnsPrimitive
  return null
}
