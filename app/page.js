import styles from './page.module.css'
import Image from 'next/image'
import mfw from "@/public/mfw.png"
export default function Home() {
  return (
   <>
      <div className={styles.container}>
        <div className={styles.titleCont}>
          <div className={styles.animationCont}>
            <p className={styles.hello}>Hey, I'm Noman.</p>
          </div>
          <Image className={styles.profilePic} src={mfw.src} alt="profilepic" width={300} height={300}></Image>
        </div>
        
      </div>
   </>
  )
}
