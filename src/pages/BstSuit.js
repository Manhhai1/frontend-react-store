import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import img from '../component_global/images/suit_parent.webp'
import img1 from '../component_global/images/suit_children.webp'
function BstSuit(props) {
    let arrItems = [img, img, img, img ,img ,img]
    let arrItemChildren =[img1,img1,img1,img1, img1, img1]
    return (
        <div className='bst-suit'>
            <Header></Header>
            <ContentHeader name={'BỘ SƯU TẬP SUIT ADAM 2023'}></ContentHeader>
            <Products headerName={'BỘ SƯU TẬP SUIT ADAM 2023'}  listParent={arrItems} listChildren={arrItemChildren}></Products>
            <Footer></Footer>
        </div>
    );
}

export default BstSuit;