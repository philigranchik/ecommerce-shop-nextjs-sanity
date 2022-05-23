import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'


import { useStateContext } from '../context/StateContex'
import { runFireworks} from '../lib/utils'


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
    }, [])


  return (
<div className="success-wrapper">
    <div className="success">
        <p className='icon'>
            <BsBagCheckFill />
        </p>
        <h2>Спасибо за покупку!</h2>
        <p className='email-msg'>Проверьте вашу почту для подтвержения</p>
        <p className='description'>
            Если у вас возникли вопросы, напишите на нашу почту:
            <a className='email' href="mailto:poslak98@gmail.com">poslak98@gmail.com</a>
        </p>
        <Link href='/'>
            <button type='button' width='300px' className='btn'>Продолжить покупки</button>
        </Link>
    </div>
</div>
  )
}

export default Success