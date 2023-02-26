import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products_Admin from '../component_global/Products_Admin';
import Products from '../component_global/Products';
import shoes from '../component_global/images/shoes.webp'
import shoes1 from '../component_global/images/shoes_children.webp'
function ShoesAdam(props) {
    let listParent = [shoes, shoes, shoes, shoes, shoes, shoes]
    let listChildren = [shoes1, shoes1, shoes1, shoes1, shoes1, shoes1,]
    let role = window.localStorage.getItem('role')
    return (
        <div className='shoes-adam'>
            <Header></Header>
            <ContentHeader name={'GIÀY DA NAM'}></ContentHeader>
            <Products headerName={'GIÀY DA NAM'} listParent={listParent} listChildren={listChildren}></Products>
            <Footer></Footer>
        </div>
    );
}

export default ShoesAdam;