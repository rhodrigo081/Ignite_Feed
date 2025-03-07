import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./CommentArea.module.css";

export function CommentArea() {
  return (
    <div className={styles.commentArea}>
      <img src="https://github.com/rhodrigo081.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rhodrigo Rodrigues</strong>
              <time
                title="02 de Fevereiro às 12:35"
                dateTime="2025-02-28 12:35:15"
              >
                Cerca de 2 dias
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
