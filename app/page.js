import styles from './page.module.css'
export default function Home() {
  return (
   <>
      <div className={styles.container}>
        <div className={styles.titleCont}>
          <p className={styles.hello}>Hey, I'm Noman.</p>
        </div>
      </div>
   </>
  )
}
