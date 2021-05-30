import React from 'react'
import './index.css'

export default function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  return <button className="button" onClick={onClick}>{children}</button>
}