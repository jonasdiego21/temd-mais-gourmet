import React from 'react'
import './index.css'

export default function Link({ children, type, onClick, buttonStyle, buttonSize }) {
  return <button className="link" onClick={onClick}>{children}</button>
}