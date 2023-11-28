import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import githubicon from '@/public/githubicon.png'

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.projTable}>
          <div className={styles.projHolder}>
            <Link href="https://ggc-numahn.vercel.app">
              <div
                className={`${styles.project} ${styles.pr1} ${styles.first}`}
              ></div>
            </Link>
            <div className={styles.desc}>
              <p>Goat Grade Collectables</p>
              <p>Description</p>
              <Link href="https://github.com/numahn/NBAGatchaFrontend"><Image src={githubicon.src} alt="github" width={20} height={20}></Image></Link>
            </div>
          </div>
          <div className={styles.projHolder}>
            <div
              className={`${styles.project} ${styles.pr2} ${styles.second}`}
            ></div>
            <p className={styles.desc2}>
              asdf
            </p>
          </div>
          <div className={styles.projHolder}>
            <div
              className={`${styles.project} ${styles.pr1} ${styles.first}`}
            ></div>
            <p className={styles.desc}>
              asdf
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
