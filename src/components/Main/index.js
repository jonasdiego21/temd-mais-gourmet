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

        <Card image="https://conteudo.imguol.com.br/c/entretenimento/ee/2017/12/15/prato-saudavel-arroz-feijao-salada-frango-1513356794627_v2_450x450.jpg" title="Image 1" />
        <Card image="https://conteudo.imguol.com.br/c/entretenimento/ee/2017/12/15/prato-saudavel-arroz-feijao-salada-frango-1513356794627_v2_450x450.jpg" title="Image 2" />
        <Card image="https://conteudo.imguol.com.br/c/entretenimento/ee/2017/12/15/prato-saudavel-arroz-feijao-salada-frango-1513356794627_v2_450x450.jpg" title="Image 3" />
        <Card image="https://conteudo.imguol.com.br/c/entretenimento/ee/2017/12/15/prato-saudavel-arroz-feijao-salada-frango-1513356794627_v2_450x450.jpg" title="Image 4" />
      </div>
    </div>
  )
}