import React from 'react'
import Title from '../Title'
import Card from '../Card'
import Link from '../Link'
import setaVoltar from '../../assets/seta-voltar.svg'

import './index.css'

export default function Main() {
  function handleVoltar() {
    console.log('Voltar')
  }

  return (
    <div className="container-boards">
      <Title>Destaques</Title>

      <div className="container-cards">
        <Link onClick={handleVoltar}>
          <img src={setaVoltar} alt="Voltar" />
        </Link>

        <Card image="" title="Image 1" />
        <Card image="" title="Image 2" />
        <Card image="" title="Image 3" />
        <Card image="" title="Image 4" />
      </div>
    </div>
  )
}