import styles from "./page.module.css";
export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.projTable}>
          <div className={styles.projHolder}>
            <div
              className={`${styles.project} ${styles.pr1} ${styles.first}`}
            ></div>
            <p className={styles.desc} disabled>
              asdf
            </p>
          </div>
          <div className={styles.projHolder}>
            <div
              className={`${styles.project} ${styles.pr2} ${styles.second}`}
            ></div>
            <p className={styles.desc2} disabled>
              asdf
            </p>
          </div>
          <div className={styles.projHolder}>
            <div
              className={`${styles.project} ${styles.pr1} ${styles.first}`}
            ></div>
            <p className={styles.desc} disabled>
              asdf
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
