import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Log In</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
      <div>
        Don't have an account? <Link className={styles.signupLink} to={'/signup'}>Sign Up
      </Link>
      </div>
    </main>
  )
}

export default LoginPage
