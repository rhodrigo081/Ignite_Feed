import styles from "./Post.module.css";
import { CommentArea } from "./CommentArea.jsx";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src="https://github.com/rhodrigo081.png" />
          <div className={styles.authorinfo}>
            <strong>Rhodrigo Rodrigues</strong>
            <span>Studant Development</span>
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
          👉 <a href="#">jane.design/doctorcare</a>{' '}
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <CommentArea />
        <CommentArea />
        <CommentArea />
      </div>
    </article>
  );
}
