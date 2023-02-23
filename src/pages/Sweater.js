import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import aolen from '../component_global/images/aolen.webp'
function Sweater(props) {
    let listParent =[aolen, aolen, aolen, aolen, aolen, aolen]
    return (
        <div className='sweater-adam'>
            <Header></Header>
            <ContentHeader name={'ÁO LEN NAM'}></ContentHeader>
            <Products headerName={'ÁO LEN NAM'} listParent={listParent}></Products>
            <Footer></Footer>
        </div>
    );
}

export default Sweater;