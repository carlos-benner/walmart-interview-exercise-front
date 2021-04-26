import Product from './Product';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
    const productList = products.map((p, i) => (
        <Product product={p} key={i}></Product>
    ));
    return <ul className='product-list'>{productList}</ul>;
};

export default ProductList;
