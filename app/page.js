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
                Welcome to my website! I am a software engineer specializing(and improving myself) in TS/JS, React, Node.js
                and Next.js. I also love to learn more about the vast internet and networks, cementing my knowledge
                with my CCNA. <br></br>
                Growing up I was always exposed to technology and was fascinated with
                the technology and software around us and how it all came together. Now I create my own software, working on 
                projects that you can check out here!
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
