import styles from "./page.module.css";
import Image from "next/image";
import pfp from "@/public/pfp.png";
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
                Growing up I was always exposed to technology and was fascinated with the technology 
                and software around us and how it all came together. Now I create my own software, working on 
                projects that you can check out here!
                I have experience from interning at a startup (HData), to being a freelance developer and the many projects I build
                to get better at my craft. To learn more, check out the projects tab along with my resume and GitHub at the top right!
              </p>
            </div>
          </div>

          <Image
            className={styles.profilePic}
            src={pfp.src}
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