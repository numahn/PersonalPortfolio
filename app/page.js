import styles from './page.module.css'
import Image from 'next/image'
export default function Home() {
  return (
   <>
      <div className={styles.container}>
        <div className={styles.titleCont}>
          <p className={styles.hello}>Hey, I'm Noman.</p>
        </div>
        <Image className={styles.profilePic} src="/mfw.png" alt="profilepic" width={300} height={300}></Image>
        
      </div>
   </>
  )
}
