import React from 'react';
import PagesNavbar from './PagesNavbar'
import Footer from './Footer';

const SecondLayout = ({ children }) => {
    return (
        <div>
            <PagesNavbar />
            {children}
            <Footer />
        </div>
    )
}

export default SecondLayout