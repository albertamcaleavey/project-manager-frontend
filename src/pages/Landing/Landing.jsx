import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title} >Organize your projects with TaskFlow</h1>
      <Link className={styles.signup} to={'/signup'}>
      <button className={styles.button}>Get Started</button>
      </Link>
      <img height={285} src="landing-graphic(1).png" alt="" />
    </main>
  )
}

export default Landing
