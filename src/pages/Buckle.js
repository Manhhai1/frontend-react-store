import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import thatlung from '../component_global/images/thatlung_parent.webp'
import thatlung1 from '../component_global/images/thatlung_children.webp'
function Buckle(props) {
    let listParent = [thatlung, thatlung, thatlung, thatlung, thatlung, thatlung]
    let listChildren = [thatlung1,thatlung1,thatlung1,thatlung1,thatlung1,thatlung1]
    return (
        <div className='buckle-adam'>
            <Header></Header>
            <ContentHeader name={'THẮT LƯNG NAM'}></ContentHeader>
            <Products headerName={'THẮT LƯNG NAM'} listParent={listParent} listChildren={listChildren}></Products>
            <Footer></Footer>
        </div>
    );
}

export default Buckle;