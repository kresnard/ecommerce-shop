import React from "react"
import Category from "./categories"
import Header from "./header"
import Product from "./products"

const Index = () => {
    console.log("INI HOMEPAGE")
    return (
        <React.Fragment>
        <Header />
        <Category />
        <Product />
        </React.Fragment>
    )
};

export default Index;