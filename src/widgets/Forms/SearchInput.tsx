import {useState, ChangeEvent} from "react";
import styles from './SearchInput.module.scss'

const SearchInput = () => {
    const { searchForm, searchInput } = styles;

    const [searchInputValue, setSearchInputValue] = useState('')

    const handleSearchInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(event.target.value)
    }

    const handleSubmitForm = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(searchInputValue.trim());
        setSearchInputValue('')
    }

    return (
        <form className={searchForm} onSubmit={handleSubmitForm} data-testid='search-form'>
            <input className={searchInput}
            type='text'
            onChange={(event) => handleSearchInputValue(event)} 
            value={searchInputValue}
            data-testid='search-input'></input>
        </form>
    )
}

export default SearchInput;