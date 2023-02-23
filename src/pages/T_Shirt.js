import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import tshirt from '../component_global/images/tshirt.webp'
function T_Shirt(props) {
    let listParent =[tshirt, tshirt, tshirt, tshirt, tshirt, tshirt]
    return (
        <div className='T_Shirt-adam'>
            <Header></Header>
            <ContentHeader name={'ÁO PHÔNG MONGTOGHI NAM'}></ContentHeader>
            <Products headerName={'ÁO PHÔNG MONGTOGHI NAM'} listParent={listParent}></Products>
            <Footer></Footer>
        </div>
    );
}

export default T_Shirt;