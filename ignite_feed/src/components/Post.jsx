import styles from "./Post.module.css";
import janeCooper from '../assets/Jane_Cooper.svg'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={janeCooper}
          />
          <div className={styles.authorinfo}>
            <strong>Jane Cooper</strong>
            <span>Front-End Developer</span>
          </div>
        </div>
        <time title="02 de Fevereiro às 12:35" datetime="2025-02-28 12:35:15">
          Publicado há 2 dias
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{' '}<a href="#">jane.design/doctorcare</a>{" "}
        </p>
        <a href="#">#novoprojeto</a>{' '}
        <a href="#">#nlw</a>{' '}
        <a href="#">#rocketseat</a>
      </div>
    </article>
  );
}
