import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import Products_Admin from '../component_global/Products_Admin';
import trousers from '../component_global/images/trousers.webp'
function TrousersAdam(props) {
    let role = window.localStorage.getItem('role')
    let listParent =[trousers, trousers, trousers, trousers, trousers, trousers]
    return (
        <div className='trousers-adam'>
            <Header></Header>
            <ContentHeader name={'QUẦN ÂU ADAM'}></ContentHeader>
            <Products headerName={'QUẦN ÂU ADAM'} listParent={listParent}></Products>
            <Footer></Footer>
        </div>
    );
}

export default TrousersAdam;