import { useState, React, useEffect } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ContentHeader from './ContentHeader';
import { URL_BACKEND } from '../constance';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './User.scss'
function User(props) {
    const  navigate = useNavigate()
    if (!window.localStorage.firstLogin) navigate('/login')
    const [histories, setHistories] = useState([])
    const [user, setUser] = useState({ firstname: '', lastname: '' })
    let token = window.localStorage.getItem('token')

    return (
        <div className='user'>
            <Header name={'TÀI KHOẢN'} ></Header>
           <ContentHeader name={'TÀI KHOẢN'}></ContentHeader>
            <div className="content-user">
                <h4>TÀI KHOẢN CỦA BẠN</h4>

                <div className="content">
                    <div className="histories">
                        <h6><b>Lịch sử giao dịch</b></h6>
                        {histories && histories.length === 0 ? <p>Bạn chưa có đơn hàng nào</p> : <p>{histories}</p>}
                    </div>
                    <div className="information">
                        <h6><b>Thông tin tài khoản</b></h6>
                        <p><b>{`${user.lastname} ${user.firstname}`}</b></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default User;