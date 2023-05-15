import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import Vector from '../../public/coffee-vector.svg'

export default function Header() {
  return (
    <footer className={styles.wrapper}>
      <Image src={Vector} alt="Footer vector"/>
      <div></div>
    </footer>
  )
}