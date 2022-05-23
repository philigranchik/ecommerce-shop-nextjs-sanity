import React from 'react'
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 PHILIGRAN STORE Все права защищены©</p>
      <p>React, Next.js, Sanity, Confetti </p>
      <p className="icons">
        <a href="https://github.com/philigranchik">
        <GoMarkGithub />
      </a>
      </p>
    </div>
  )
}

export default Footer