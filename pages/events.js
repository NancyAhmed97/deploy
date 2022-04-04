import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Events/PageHeader';
import EventContent from '../components/Events/EventContent';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layout/Footer';

class Events extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader />

                <EventContent />
                
                <div className="section-bg-white">
                    <Partner />
                </div>
                
                <Footer />
            </>
        );
    }
}

export default Events;