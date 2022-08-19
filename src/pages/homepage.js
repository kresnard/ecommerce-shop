import React from 'react'

import Hero from '../component/hero/index'
import Category from 'component/categories/categories';
import Product from 'component/products/product';



const Home = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Hero />
                <Category />
                <Product />
            </div>
        </React.Fragment>
        
    )
};

export default Home;