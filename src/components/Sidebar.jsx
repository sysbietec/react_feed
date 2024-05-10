import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import capa from '../assets/capa.svg';
import { Avatar} from './Avatar';

export function Sidebar() {
    return (

        <aside className={styles.sidebar}>
            <img src={capa} className={styles.cover} />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/aleixo2022"/>
                <strong className={styles.user}>Alexsandro t. Nascimento</strong>
                <span className={styles.office}>Software Engineer</span>
            </div>

            <footer className={styles.footer}>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Perfil</a>
            </footer>
        </aside>
      )
}