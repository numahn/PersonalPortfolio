import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import githubicon from "@/public/githubicon.png";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.projTable}>
          <div className={styles.projHolder}>
            <Link href="https://github.com/numahn/NBAGatchaFrontend">
              <div
                className={`${styles.project} ${styles.pr1} ${styles.first}`}
              ></div>
            </Link>
            <div className={styles.desc}>
              <p style={{ paddingBottom: ".5rem" }}>Goat Grade Collectables</p>
              <p className={styles.blurb} style={{ paddingBottom: ".5rem" }}>
                Create an account and start opening up cards of your favorite
                NBA players to showcase!
              </p>
              <p>Used PostgreSQL, React, Express.js, Node.js</p>
            </div>
          </div>
          <div className={styles.projHolder}>
            <Link href="https://github.com/numahn/TechNotesBackendJS">
              <div
                className={`${styles.project} ${styles.pr2} ${styles.second}`}
              ></div>
            </Link>
            <div className={styles.desc2}>
              <p style={{ paddingBottom: ".5rem" }}>TechNotes</p>
              <p style={{ paddingBottom: ".5rem" }}>Have your own personal cloud storage of note taking / photos at the
                tip of your fingers!
              </p>
              <p>Used React, Node.js, Express.js, MySQL</p>
            </div>
          </div>
          <div className={styles.projHolder}>
            <Link href="https://github.com/numahn/python-gpt">
              <div
                className={`${styles.project} ${styles.pr1} ${styles.first}`}
              ></div>
            </Link>
            <div className={styles.desc}>
              <p style={{ paddingBottom: ".5rem" }}>OpenAI Chatbot</p>
              <p style={{ paddingBottom: ".5rem" }}>
                Have your very own AI assistant awaiting and answering your every question!
              </p>
              <p>Used Python, Django, HTML, CSS, JavaScript, SQLite</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
