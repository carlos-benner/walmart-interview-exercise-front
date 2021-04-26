import Header from './components/Header';
import SearchResultsContainer from './components/SearchResultsContainer';
import axios from 'axios';
import './App.css';

import { useState } from 'react';

function App() {
    const [productList, setProductList] = useState([]);
    const [errorMessage, setErrorMessage] = useState();

    function onSearchSubmit(ev, query) {
        ev.preventDefault();

        axios
            .get(`/api/product/${query}`)
            .then((result) => {
                setProductList([...result.data]);
            })
            .catch((err) => {
                if (err.response) {
                    setErrorMessage(null);
                    setErrorMessage(err.response.data.msg);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log(err.message);
                }
                setProductList(new Array(0));
            });
    }
    return (
        <div className='App'>
            <Header searchFunction={onSearchSubmit} msg={errorMessage}></Header>
            <SearchResultsContainer
                products={productList}
            ></SearchResultsContainer>
        </div>
    );
}

export default App;
