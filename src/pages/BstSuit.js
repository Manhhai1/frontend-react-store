import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContentHeader from '../account/ContentHeader';
import Products from '../component_global/Products';
import img from '../component_global/images/suit_parent.webp'
import Products_Admin from '../component_global/Products_Admin';
import img1 from '../component_global/images/suit_children.webp'
function BstSuit(props) {
    let arrItems = [img, img, img, img, img, img]
    let arrItemChildren = [img1, img1, img1, img1, img1, img1]
    let role = window.localStorage.getItem('role')
    let login = window.localStorage.getItem('firstLogin')
    console.log(role)
    let setDisplay = () => {
        if (role == 1 && login == 'true') return true
        else return false
    }
    let check = setDisplay()
    console.log(check)
    return (
        <div className='bst-suit'>
            <Header></Header>
            <ContentHeader name={'BỘ SƯU TẬP SUIT ADAM 2023'}></ContentHeader>
            {
                check == true ? <Products_Admin
                    type={'bstsa2023'}
                    headerName={'BỘ SƯU TẬP SUIT ADAM 2023'}
                ></Products_Admin>
                    : <Products
                        type={'bstsa2023'}
                        headerName={'BỘ SƯU TẬP SUIT ADAM 2023'}
                    ></Products>
            }
            <Footer></Footer>
        </div>
    );
}

export default BstSuit;