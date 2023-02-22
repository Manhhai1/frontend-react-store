import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ContentHeader from './ContentHeader';
import { useNavigate } from "react-router-dom";
import './Signup.scss'
function Signup(props) {
    const navigate = useNavigate();
   
    return (
        <div className='sign-up'>
            <Header></Header>
            <ContentHeader name={'Tạo tài khoản'}></ContentHeader>
            <div className="content">
                <h4>TẠO TÀI KHOẢN</h4>
                <input className='firstname form-control item' type="text" placeholder='Tên' />
                <input className='lastname form-control item' type="text" placeholder='Họ' />
                <input className='username form-control item' type="text" placeholder='Email' />
                <input className='password form-control item' type="password" placeholder='Mật khẩu' />
                <button className='item btn-register'>Đăng kí</button>
                <p onClick={()=>navigate('/home')}>Trở về</p>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Signup;