import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/News1/PageHeader';
import NewsCardContent from '../components/News1/NewsCardContent';
import Footer from '../components/Layout/Footer';

class News1 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader />

                <NewsCardContent />
                
                <Footer />
            </>
        );
    }
}

export default News1;