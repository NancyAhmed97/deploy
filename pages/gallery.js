import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Gallery/PageHeader';
import GalleryContent from '../components/Gallery/GalleryContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Footer from '../components/Layout/Footer';

class Gallery extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader />

                <GalleryContent />

                <FeedbackSlider />
                
                <Footer />
            </>
        );
    }
}

export default Gallery;