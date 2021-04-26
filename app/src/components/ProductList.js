import Product from './Product';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
    const productList = products.map((p) => (
        <Product product={p} key={p.id}></Product>
    ));

    return <ul className='product-list'>{productList}</ul>;
};

export default ProductList;
