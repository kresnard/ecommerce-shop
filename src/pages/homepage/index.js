import React from 'react'; 
import { Container } from './homepage-style';

import Hero from '../../component/hero/index';
import Category from 'component/categories/index';
import Product from 'component/products/index';



const Home = () => {
    return (
        <React.Fragment>
            <Container>
                <Hero />
                <Category />
                <Product />
            </Container>
        </React.Fragment>
        
    )
};

export default Home;