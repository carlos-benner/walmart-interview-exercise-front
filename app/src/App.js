import Header from './components/Header';
import SearchResultsContainer from './components/SearchResultsContainer';
import axios from 'axios';
import './App.css';

import { useState } from 'react';

function App() {
    const [productList, setProductList] = useState([]);

    function onSearchSubmit(ev, query) {
        ev.preventDefault();
        axios
            .get(`/api/product/${query}`)
            .then((result) => {
                setProductList(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className='App'>
            <Header searchFunction={onSearchSubmit}></Header>
            <SearchResultsContainer
                products={productList}
            ></SearchResultsContainer>
        </div>
    );
}

export default App;
