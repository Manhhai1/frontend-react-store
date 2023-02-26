import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import Products_Admin from '../component_global/Products_Admin';
import shirt from '../component_global/images/shirt.webp'
function Shirt(props) {
    let listParent = [shirt, shirt, shirt, shirt, shirt, shirt]
    let role = window.localStorage.getItem('role')
    return (
        <div className='shirt-adam'>
            <Header></Header>
            <ContentHeader name={'ÁO SƠ MI NAM'}></ContentHeader>
            <Products headerName={'ÁO SƠ MI NAM'} listParent={listParent}></Products>
            <Footer></Footer>
        </div>
    );
}

export default Shirt;