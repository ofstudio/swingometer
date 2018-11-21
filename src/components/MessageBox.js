import React from 'react'
import '../styles/MessageBox.sass'

export default function MessageBox({type, title, message}) {
  return (
    <div className={'MessageBox ' + type}>
      <span className="title">{title}</span>
      <span className="message">{message}</span>
    </div>
  )
}
