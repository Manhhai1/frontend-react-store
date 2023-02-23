import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import somingantay from '../component_global/images/somi-ngantay.webp'
function Short_sleevedShirt(props) {
    let listParent =[somingantay, somingantay, somingantay, somingantay, somingantay, somingantay]
    return (
        <div className='short-sleeved-shirt'>
            <Header></Header>
            <ContentHeader name={'ÁO SƠ MI NGẮN TAY NAM'}></ContentHeader>
            <Products headerName={'ÁO SƠ MI NGẮN TAY NAM'} listParent={listParent}></Products>
            <Footer></Footer>
        </div>
    );
}

export default Short_sleevedShirt;