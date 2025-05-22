import styles from './SearchInput.module.scss'
interface SearchInputInterface{
    handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function SearchInput(props: SearchInputInterface) {

    

    return (
        <input className={styles.input} onChange={(event) => props.handleInputChange(event)} placeholder='Search route'/>
    );
}

export default SearchInput;