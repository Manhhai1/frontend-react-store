
import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Login.scss'
import ContentHeader from './ContentHeader';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { URL_BACKEND } from '../constance';
import { toast } from 'react-toastify';

function Login(props) {
    const navigate = useNavigate()
    const [err, setErr] = useState('')
    let handleClickLogin = async () => {
        let res
        try {
            let url = `${URL_BACKEND}/user/login`
            let email = document.getElementById('email').value
            let password = document.getElementById('password').value

            res = await axios.post(url, { email, password })
            //  console.log(res.data)
            localStorage.setItem('firstLogin', true)
            localStorage.setItem('token', res.data.accessToken);
            localStorage.setItem('role', res.data.user.role);
            if (res.data.user.role == 1) {
                navigate('/admin')
            }
            else {
                navigate('/account')
            }
        } catch (error) {

        }
    }
    return (
        <div className='login'>
            <Header></Header>
            <ContentHeader name={'Tài khoản'}></ContentHeader>
            <div className="content">
                <h4>ĐĂNG NHẬP</h4>
                <input className='username form-control item' type="text" placeholder='Email' id='email' />
                <input className='password form-control item' type="password" placeholder='Mật khẩu' id='password' />
                <button className='item btn-login' onClick={() => handleClickLogin()}>Đăng nhập</button>
                <p>{ }</p>
                <p onClick={() => navigate('/home')}>Trở về</p>
                <p onClick={() => navigate('/signup')}>Đăng kí</p>
                <p>Quên mật khẩu?</p>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Login;