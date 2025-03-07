import styles from './Header.module.css'
import igniteLogo from '../assets/Ignite_logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
        <h1><img src={igniteLogo} alt="Logo" /></h1>
        <strong>Ignite Feed</strong>
        </header>
    )
}