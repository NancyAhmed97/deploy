import React, { Component } from 'react';
import Navbar from '../../components/Layout/Navbar';
import PageHeader from '../../components/ThePlace/PageHeader';
import ProductsItem from '../../components/ThePlace/Products';
import OurPlace from '../../components/ThePlace/OurPlace';
import Partner from '../../components/Common/Partner';
import Footer from '../../components/Layout/Footer';
 
class ThePlace extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader />

                <ProductsItem />
                
                <Footer />
            </>
        );
    }
}

export default ThePlace;