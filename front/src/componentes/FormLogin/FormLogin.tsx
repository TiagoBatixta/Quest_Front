import React from 'react'
import styles from './Formlogin.module.scss'
import { AtSign, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FormLogin() {
  return (
    <>
        <div className={styles.formWrapper}>
            <h1>Bem-vindo</h1>
            <form>
                <label htmlFor="email">
                    <AtSign size={24} />
                    <input id='email' type="email" placeholder='email' />
                </label>
                
                <label htmlFor="password">
                    <LockKeyhole size={24} />
                    <input id="password" type="password" placeholder='password' />
                </label>

                <button className='btn' type="submit">
                    Entrar
                </button>
            </form>
        </div>
        <div className={styles.links}>
            <p>Não tem conta? <Link to="/login">
                Criar conta
            </Link></p>
            
            <Link to="/login">
                Redefinir minha senha.
            </Link>
        </div>
    </>
  )
}
