import { React, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ContentHeader from './ContentHeader';
import { useNavigate } from "react-router-dom";
import './Signup.scss'
import { toast } from 'react-toastify';
import axios from 'axios';
function Signup(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstname: '', lastname: '', email: '', password: ''
    })
    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSingUp = async () => {
        try {
            let url = 'http://localhost:5000/user/register'
            await axios.post(url, user)
            localStorage.setItem('firstLogin', true)
            localStorage.setItem('role', 0);
            window.location.href = "/";
        } catch (error) {
            toast.error(error.message)
        }

    }
    return (
        <div className='sign-up'>
            <Header></Header>
            <ContentHeader name={'Tạo tài khoản'}></ContentHeader>
            <div className="content">
                <h4>TẠO TÀI KHOẢN</h4>
                <input className='firstname form-control item' type="text" placeholder='Tên' name='firstname' value={user.firstname} onChange={(e) => onChangeInput(e)} />
                <input className='lastname form-control item' type="text" placeholder='Họ' name='lastname' value={user.lastname} onChange={(e) => onChangeInput(e)} />
                <input className='username form-control item' type="text" placeholder='Email' name='email' value={user.email} onChange={(e) => onChangeInput(e)} />
                <input className='password form-control item' type="password" placeholder='Mật khẩu' name='password' value={user.password} onChange={(e) => onChangeInput(e)} />
                <button className='item btn-register' onClick={() => { handleSingUp() }}>Đăng kí</button>
                <p onClick={() => navigate('/home')}>Trở về</p>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Signup;