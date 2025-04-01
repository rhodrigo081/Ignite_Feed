import styles from "./Post.module.css";
import { CommentArea } from "./CommentArea.jsx";
import { Avatar } from "./Avatar.jsx";
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ author, publishedAt,content }) {

  const [comments, setComments] = useState([
    1,
    2,
  ])

  const publishedDateFormate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function newComment(){
    event.preventDefault()

    setComments([...comments, comments.length + 1])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormate} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p>{line.content}</p>
          } else if(line.type === 'link'){
            return <p><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={newComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <CommentArea/>
        })}
      </div>
    </article>
  );
}
