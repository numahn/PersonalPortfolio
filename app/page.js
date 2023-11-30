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
              Software Engineer &<br></br>Network Engineer
            </p>

            <div className={styles.aboutCont}>
              <div className={styles.test}></div>
              <p className={styles.about}>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                A software engineer/network engineer with experience in JavaScript, 
                React, Node.js, Next.js, Python, and more.
                <br></br><br></br>
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
