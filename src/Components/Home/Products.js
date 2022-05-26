import React from 'react';
import UseProducts from '../Hook/UseProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = UseProducts();
    console.log(setProducts);
    const productsSlice = products.slice(-6);
    const productss = productsSlice.reverse()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
            {
                productss.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>

                )
            }
        </div>
    );
};

export default Products;