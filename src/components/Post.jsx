import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post() {
    return (
         
            <article className={styles.post}>
                <header>

                    <div className={styles.author}>
                        <Avatar src="https://avatars.githubusercontent.com/aleixo2022"/>
                        <div className={styles.info}>
                            <strong>Alexsandro T. Nascimento</strong>
                            <span>Software engineer</span>
                        </div>
                    </div>
                    <time 
                    title='08 de maio as 1:19'
                    dateTime='2024-05-08 1:19:00'>
                        Publica há 1 hora
                    </time>
                </header>

                <div className={styles.content}>
                <p>A ciência de dados é uma disciplina interdisciplinar que utiliza técnicas estatísticas, algoritmos de aprendizado de máquina e sistemas de computação para extrair conhecimentos e insights de dados estruturados e não estruturados. Ela é crucial para tomar decisões baseadas em dados em diversas indústrias.</p>

<p>Com o aumento explosivo na geração de dados, a ciência de dados tornou-se essencial para entender padrões complexos, prever tendências futuras e melhorar a tomada de decisões empresariais. As ferramentas e técnicas utilizadas por cientistas de dados ajudam as organizações a otimizar suas operações e estratégias competitivas.</p>

<p>O processo de ciência de dados frequentemente envolve a preparação de dados, análise exploratória de dados, modelagem preditiva e implementação de soluções. A habilidade de transformar dados brutos em informações acionáveis é uma das competências mais valorizadas no mercado de trabalho atual.</p>

<p>Além disso, a ética na ciência de dados tornou-se um tema de debate importante, com crescentes preocupações sobre privacidade, consentimento e viés algorítmico. É fundamental que os profissionais da área se comprometam com práticas responsáveis e transparentes ao manipular dados.</p>
        <p><a href="#">Alex.teixeira/sysbietec</a></p>
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