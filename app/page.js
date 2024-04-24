import styles from "./page.module.css";
import Image from "next/image";
import mfw from "@/public/mfw.png";
export default function Home() {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.titleCont}>
            <div className={styles.animationCont}>
              <p className={styles.hello} >Hey, I'm Noman.</p>
            </div>
            <p className={`${styles.text} ${styles.soft} ${styles.blur}`}>
              Software Engineer
            </p>
            <p className={`${styles.smalltext} ${styles.soft} ${styles.blur}`}>
              TypeScript/JavaScript, React.js, Node.js, Next.js
            </p>

            <div className={styles.aboutCont}>
              <div className={styles.vertLine}></div>
              <p className={styles.about}>
                Growing up I was always exposed to technology and was fascinated with
                all the technology and software around us and how it came together. Now, I create
                my own projects and software using the skills I learned from my professional 
                experience and other projects, and am always learning more about both
                programming and how our vast networks are held together. 
                Always passionate about software engineering, networking, and all the
                little details of any piece of technology.
              </p>
            </div>
          </div>

          <Image
            className={styles.profilePic}
            src={mfw.src}
            alt="profilepic"
            width={350}
            height={350}
            style={{
              filter: "grayscale(20%)",
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "5px",
            }}
          />
        </div>
      </div>
    </>
  );
}
