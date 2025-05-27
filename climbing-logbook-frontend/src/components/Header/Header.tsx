import styles from './Header.module.scss'
import Logo from '../Logo/Logo';
import NavigationTab from '../NavigationTab/NavigationTab';
import SearchInput from "../SearchInput/SearchInput"
import UserDropdown from '../UserPicker/UserDropdown';

interface SearchInputInterface{
    handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function Header(props: SearchInputInterface) {
    return (
        <header className={styles.header}>
            <Logo/>
            <NavigationTab/>
            <SearchInput handleInputChange={(event) => props.handleInputChange(event)}/>
            <UserDropdown/>
        </header>
    );
}

export default Header;