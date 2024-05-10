import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/aleixo2022"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alexsandro t.</strong>

                            <time
                                title='08 de maio as 1:19'
                                dateTime='2024-05-08 1:19:00'>
                                Publica há 1 hora
                            </time>
                        </div>

                        <button title='deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito Alex, Parabéns!!!</p>
                </div>

                <footer>
                    <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}