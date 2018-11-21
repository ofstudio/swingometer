import {useEffect, useState} from 'react'

const avgMs = Number(process.env.REACT_APP_TIMING_ANALYZE_AVG) || 2000
const devMs = Number(process.env.REACT_APP_TIMING_ANALYZE_DEV) || 1000

const timings = {
  analyzeTimeout: () => (1 - Math.random()) * devMs + avgMs
}

export default function Analyze({dispatch, adjust, adjustId}) {
  const setScore = useState(50)[1]

  useEffect(
    () => {
      const timeoutHandler = window.setTimeout(
        () => dispatch({type: 'switch-scene', scene: 'calculate'}),
        timings.analyzeTimeout())
      return () => window.clearTimeout(timeoutHandler)
    }, [])

  useEffect(() => {
    setScore(prevScore => {
      let score = (parseFloat(prevScore) + adjust).toFixed(2)
      if (Math.abs(score) > 100) score = 100 * (Math.abs(score) / score)
      if (score < 0) score = 0
      dispatch({type: 'score', value: score})
      return score
    })
  }, [adjustId])

  // noinspection JSConstructorReturnsPrimitive
  return null
}
