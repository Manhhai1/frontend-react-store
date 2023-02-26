import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import tuxedos from '../component_global/images/tuxedo.webp'
import Products_Admin from '../component_global/Products_Admin';
function BstSuitXutedo(props) {
    let listParent = [tuxedos]
    let role = window.localStorage.getItem('role')
    return (
        <div className='bst-suit-tuxedo'>
            <Header></Header>
            <ContentHeader name={'BỘ SƯU TẬP SUIT TUXEDO 2023'}></ContentHeader>
            {
                role == 1 ? <Products_Admin listParent={listParent}
                    headerName={'BỘ SƯU TẬP SUIT TUXEDO 2023'}
                ></Products_Admin>
                    : <Products listParent={listParent}
                        headerName={'BỘ SƯU TẬP SUIT TUXEDO 2023'}
                        ></Products>
            }
            <Footer></Footer>
        </div>
    );
}

export default BstSuitXutedo;