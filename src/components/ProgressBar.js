import React from 'react'
import '../styles/ProgressBar.sass'

export default function ProgressBar({type}) {
  return (
    <div className={'ProgressBar ' + type}/>
  )
}
