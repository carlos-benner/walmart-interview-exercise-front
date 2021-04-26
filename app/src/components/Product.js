import NumberFormat from 'react-number-format';

const Product = ({ product }) => {
    return (
        <li className='product'>
            {product.discount && (
                <div className='discount'>
                    <span>-%{product.discount}</span>
                </div>
            )}
            <img
                alt={`${product.brand} - ${product.description}`}
                src={
                    product.image.startsWith('http')
                        ? product.image
                        : `https://${product.image}`
                }
            ></img>
            <div className='body'>
                <div>
                    <div className='reference'>(Ref: {product.id})</div>
                    <div className='brand'>{product.brand}</div>
                    <div className='description'>{product.description}</div>
                </div>
                <div>
                    <div className='current-price'>
                        <NumberFormat
                            value={product.price}
                            displayType={'text'}
                            thousandSeparator={'.'}
                            decimalSeparator={','}
                            prefix={'$'}
                        ></NumberFormat>
                    </div>
                    {product.discount && (
                        <div className='original-price'>
                            <div>
                                Normal:
                                <NumberFormat
                                    value={product.original_price}
                                    displayType={'text'}
                                    thousandSeparator={'.'}
                                    decimalSeparator={','}
                                    prefix={'$'}
                                ></NumberFormat>
                            </div>

                            <div>
                                Ahorro:
                                <NumberFormat
                                    value={
                                        product.original_price - product.price
                                    }
                                    displayType={'text'}
                                    thousandSeparator={'.'}
                                    decimalSeparator={','}
                                    prefix={'$'}
                                ></NumberFormat>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <button className='btn-add-to-cart'>
                        <i className='fas fa-shopping-cart'></i>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default Product;
