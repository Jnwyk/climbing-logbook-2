import styles from './Header.module.scss'
import Logo from '../Logo/Logo';
import NavigationTab from '../NavigationTab/NavigationTab';

function Header() {
    return (
        <header className={styles.header}>
            <Logo/>
            <NavigationTab/>
        </header>
    );
}

export default Header;