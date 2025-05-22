interface SearchInputInterface{
    handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function SearchInput(props: SearchInputInterface) {

    

    return (
        <input onChange={(event) => props.handleInputChange(event)}/>
    );
}

export default SearchInput;