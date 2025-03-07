import styles from "./Post.module.css";
import janeCooper from "../assets/Jane_Cooper.svg";
import { CommentArea } from "./CommentArea.jsx";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={janeCooper} />
          <div className={styles.authorinfo}>
            <strong>Jane Cooper</strong>
            <span>Front-End Developer</span>
          </div>
        </div>
        <time title="02 de Fevereiro às 12:35" dateTime="2025-02-28 12:35:15">
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
          👉 <a href="#">jane.design/doctorcare</a>{" "}
        </p>
        <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
        <a href="#">#rocketseat</a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <CommentArea/>
        <CommentArea/>
        <CommentArea/>
      </div>
    </article>
  );
}
