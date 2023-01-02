import React from 'react';
import Navbar from "@/components/_App/Navbar";

import OurServices from '@/components/DigitalMarketing/OurServices';
import MainBanner from './../components/DigitalMarketing/MainBanner';
import Footer from "@/components/_App/Footer";

const IOT = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <OurServices />
            <Footer />
        </>
    )
}

export default IOT;