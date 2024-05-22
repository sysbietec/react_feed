import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({ author, content, id, publishedAt, role }) {
   function formatDate(date){
    return new Date(date).toLocaleDateString('pt-BR', {
        day:'2-digit',
        month:'long',
        year:'numeric',
        weekday:'long',
        hour:'2-digit',
        minute:'2-digit',
        // second:'2-digit',
        timeZone:'America/Sao_Paulo',
        hour12:false
    })
   }
    return (

        <article className={styles.post}>
        
            <header>

                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.info}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title='08 de maio as 1:19'
                    dateTime={publishedAt}>
                    {formatDate(publishedAt)}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph.content}</p>
                ))}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>

    )
}