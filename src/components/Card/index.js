import React from 'react'

import './index.css'

export default function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
    </div>
  )
}