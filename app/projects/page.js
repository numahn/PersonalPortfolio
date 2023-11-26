import styles from "./page.module.css";
export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.projTable}>
          <div className={`${styles.project} ${styles.pr1}`}>Project 1</div>
          <div className={`${styles.pr2} ${styles.project}`}>Project 2</div>
          <div className={`${styles.project} ${styles.pr1}`}>Project 2</div>
          {/* <div className={styles.project2}>Project 2</div> */}
          {/* <div className={styles.project}>Project 2</div>
          <div className={styles.project}>Project 2</div> */}
          {/* <div className={styles.project}>Project 2</div>
          <div className={styles.project}>Project 2</div> */}
        </div>
      </div>
    </>
  );
}
