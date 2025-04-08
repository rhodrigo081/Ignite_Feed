import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./CommentArea.module.css";
import { Avatar } from "./Avatar.jsx";
import { useState } from "react";

export function CommentArea({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){ 
    event.preventDefault();
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.commentArea}>
      <Avatar hasBorder={false} src="https://github.com/rhodrigo081.png" />
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

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
