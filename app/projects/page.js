import styles from "./page.module.css";
export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <p style={{ fontSize: "36px" }}>Projects</p>
        <div className={styles.projTable}>
          <div className={styles.project}>Project 1</div>
          <div className={styles.project}>Project 2</div>
          <div className={styles.project}>Project 2</div>
          <div className={styles.project}>Project 2</div>
          <div className={styles.project}>Project 2</div>
          <div className={styles.project}>Project 2</div>
          {/* <div className={styles.project}>Project 2</div>
          <div className={styles.project}>Project 2</div> */}
        </div>
      </div>
    </>
  );
}
