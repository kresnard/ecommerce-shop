import React from 'react'

import Hero from '../component/hero'
import Category from 'component/categories';
import Product from 'component/product';



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