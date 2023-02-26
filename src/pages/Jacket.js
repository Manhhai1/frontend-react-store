import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import Products_Admin from '../component_global/Products_Admin';
import img from '../component_global/images/jacket.webp'
function Jacket(props) {
    let arrItems = [img, img, img, img, img, img]
    let role = window.localStorage.getItem('role')
    return (
        <div className='bst-jacket'>
            <Header></Header>
            <ContentHeader name={'ÁO KHOÁC NAM'}></ContentHeader>
            <Products headerName={'ÁO KHOÁC NAM'}  listParent={arrItems}></Products>
            <Footer></Footer>
        </div>
    );
}

export default Jacket;