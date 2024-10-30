import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import PrivaceSection from '../../components/PrivaceSection/PrivaceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo-2.svg'
import Phone from '../../images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
const PrivacePage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Privace'} pagesub={'Privace'} />
            <PrivaceSection />
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default PrivacePage;
