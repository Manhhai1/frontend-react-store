import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import sip from '../component_global/images/sip.webp'
function Sip(props) {
    let listParent = [sip, sip, sip, sip, sip, sip]
    return (
        <div className='sip-adam'>
            <Header></Header>
            <ContentHeader name={'QUẦN SỊP NAM'}></ContentHeader>
            <Products headerName={'QUẦN SỊP NAM'} listParent={listParent}></Products>
            <Footer></Footer>
        </div>
    );
}

export default Sip;