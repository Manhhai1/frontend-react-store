import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import tuxedos from '../component_global/images/tuxedo.webp'
function BstSuitXutedo(props) {
    let listParent =[tuxedos]
    return (
        <div className='bst-suit-tuxedo'>
            <Header></Header>
            <ContentHeader name={'BỘ SƯU TẬP SUIT TUXEDO 2023'}></ContentHeader>
            <Products headerName={'BỘ SƯU TẬP SUIT TUXEDO 2023'} listParent={listParent}></Products>
            <Footer></Footer>
        </div>
    );
}

export default BstSuitXutedo;