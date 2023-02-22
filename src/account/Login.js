import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Login.scss'
import ContentHeader from './ContentHeader';
import { useNavigate } from 'react-router-dom'
function Login(props) {
    const navigate = useNavigate()
    return (
        <div className='login'>
            <Header></Header>
            <ContentHeader name={'Tài khoản'}></ContentHeader>
            <div className="content">
                <h4>ĐĂNG NHẬP</h4>
                <input className='username form-control item' type="text" placeholder='Email'/>
                <input className='password form-control item' type="password" placeholder='Mật khẩu'/>
                <button className='item btn-login'>Đăng nhập</button>
                <p onClick={()=>navigate('/home')}>Trở về</p>
                <p onClick={()=>navigate('/signup')}>Đăng kí</p>
                <p>Quên mật khẩu?</p>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;