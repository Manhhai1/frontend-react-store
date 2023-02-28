import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ContentHeader from './ContentHeader';
function Admin(props) {
    let navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('firstLogin') == 'true') {
            if (localStorage.getItem('role') != 1) navigate('/account')
        }
        else navigate('/login')
    })
    return (
        <div className='admin'>
            <Header name={"ADMIN"}></Header>
            <ContentHeader name={'XIN CHÀO ADMIN'}></ContentHeader>
            <div className="content-admin">
                <h5>Lịch sử đơn hàng</h5>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Admin;