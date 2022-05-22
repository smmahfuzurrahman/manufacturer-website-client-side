import React from 'react';
import UseProducts from '../Hook/UseProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = UseProducts();
    console.log(setProducts);
    const productsSlice = products.slice(0, 6);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
            {
                productsSlice.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>

                )
            }
        </div>
    );
};

export default Products;