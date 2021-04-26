import { useState } from 'react';
import '../styles/SearchBox.css';

const SearchBox = ({ searchFunction }) => {
    const [query, setQuery] = useState('');

    function handleChange(ev) {
        setQuery(ev.target.value);
    }

    return (
        <div className='search-box'>
            <form onSubmit={(ev) => searchFunction(ev, query)}>
                <input
                    onChange={handleChange}
                    className='form-control'
                    placeholder='¿Qué producto buscas hoy?'
                ></input>
                <button className='btn search-btn' type='submit'>
                    <i className='fas fa-fw fa-search'></i>
                </button>
            </form>
        </div>
    );
};

export default SearchBox;
