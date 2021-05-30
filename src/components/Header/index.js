import React from 'react'
import Button from '../Button'
import Link from '../Link'

import logo from '../../assets/logo.svg'

import './index.css'

export default function Header() {
  function handlerEntrar() {
    console.log('Entrar')
  }

  function handlerCadastrar() {
    console.log('Cadastrar-se')
  }

  return (
    <header>
      <img className="logo" src={logo} alt="Temd+ Gourmet" />

      <div className="container">
        <Link onClick={handlerCadastrar}>Cadastre-se</Link>
        <Button onClick={handlerEntrar}>Entrar</Button>
      </div>
    </header>
  )
}