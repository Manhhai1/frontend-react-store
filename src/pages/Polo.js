import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import Products_Admin from '../component_global/Products_Admin';
import polo from '../component_global/images/polo_parent.webp'
import polo1 from '../component_global/images/polo_children.webp'
function Polo(props) {
    let listParent = [polo, polo, polo, polo, polo, polo]
    let listChildren = [polo1, polo1, polo1, polo1, polo1, polo1]
    let role = window.localStorage.getItem('role')
    return (
        <div className='polo-adam'>
            <Header></Header>
            <ContentHeader name={'ÁO POLO NAM'}></ContentHeader>
            <Products headerName={'ÁO POLO NAM'} listParent={listParent} listChildren={listChildren}></Products>
            <Footer></Footer>
        </div>
    );
}

export default Polo;