import Header from './components/Header';
import axios from 'axios';
import './App.css';

import { useState } from 'react';

const productsArray = [
    {
        id: 1,
        brand: 'Samsung',
        description: 'Plasma tv',
        image: './lider-logo.svg',
        price: 1000,
        original_price: 2000,
        discount: 50,
    },
];

function App() {
    const [productList, setProductList] = useState([]);

    function onSearchSubmit(ev, query) {
        ev.preventDefault();
        setProductList(productsArray);
        console.log(productList);
        //axios(`/api/product/${query}`)
        //   .then((result) => {
        //       setProductList(result);
        //       console.log(productList);
        //   })
        //   .catch((err) => {
        //       console.log(err);
        //   });
    }
    return (
        <div className='App'>
            <Header searchFunction={onSearchSubmit}></Header>
        </div>
    );
}

export default App;
