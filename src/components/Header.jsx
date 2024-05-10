import styles from './Header.module.css';
import logo from '../assets/logo.png';

export function Header(){
    return (
       <header className={styles.header}>
         {/* <strong>Sysbietec Feed</strong> */}
         <img src={logo} alt="logo do site" />
       </header>
    )
}