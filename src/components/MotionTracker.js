import React, {useState, useEffect} from 'react'
import '../styles/MotionTracker.sass'

const timings = {
  updateTrackInterval: 150
}

const numberOfTracks = 3

const trackParams = {
  width: {avg: 100, dev: 50},
  height: {avg: 200, dev: 200},
  x: {avg: 70, dev: 100},
  y: {avg: 20, dev: 40}
}

export default function MotionTracker() {
  const [tracks, setTracks] = useState([])

  const updateTrack = () => {
    const track = Object.keys(trackParams)
      .reduce((sum, key) => {
        sum[key] = (trackParams[key].avg + (Math.random() - 0.5) * trackParams[key].dev).toFixed(0)
        return sum
      }, {})
    setTracks(tracks => {
      tracks.push(track)
      if (tracks.length > numberOfTracks)
        tracks.shift()
      return tracks
    })
  }

  useEffect(
    () => {
      const intervalHandler = window.setInterval(
        updateTrack,
        timings.updateTrackInterval
      )
      return () => window.clearTimeout(intervalHandler)
    },
    []
  )

  const rects = tracks.map((rect, index) => {
    const style = {
      left: `${rect.x}px`,
      top: `${rect.y}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      opacity: (index + 1) * (1 / numberOfTracks)
    }
    return <div className="rect" key={index} style={style}/>
  })

  return <div className="MotionTracker">{rects}</div>
}
