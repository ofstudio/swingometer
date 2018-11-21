import {useEffect} from 'react'

const avgMs = Number(process.env.REACT_APP_TIMING_CALCULATE_AVG) || 2000
const devMs = Number(process.env.REACT_APP_TIMING_CALCULATE_DEV) || 1000

const timings = {
  calculateTimeout: () => (1 - Math.random()) * devMs + avgMs
}

export default function Calculate({dispatch}) {
  useEffect(
    () => {
      const timeoutHandler = window.setTimeout(
        () => dispatch({type: 'switch-scene', scene: 'result'}),
        timings.calculateTimeout())
      return () => window.clearTimeout(timeoutHandler)
    }, [])

  // noinspection JSConstructorReturnsPrimitive
  return null
}
