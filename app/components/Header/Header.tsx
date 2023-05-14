import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapperPadding}>
        <div className={styles.wrapperBorder}>
          <div className={styles.content}>
            <div>Logo</div>
            <div>Menu</div>
          </div>
        </div>
      </div>
    </header>
  )
}