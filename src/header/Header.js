import React, { useContext, useState } from 'react';
import './Header.scss'
import { GlobalState } from '../GlobalState';
import logo from './icons/logo.webp'
import search from './icons/seach.svg'
import bag from './icons/bag.svg'
import down from './icons/down.svg'
import user from './icons/user.svg'
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
    const value = useContext(GlobalState)
    return (
        <div className='header-container-ctmz'>
            <div className="menu-ctmz">
                <div className="logo" onClick={()=>navigate('/home')}><img className='img-logo' src={logo} style={{ width: '218px', height: '36px' }} alt="" /></div>
                <ul className='list-menu-ctmz'>
                    <li className='item-menu-ctmz introduce'>GIỚI THIỆU <img src={down} style={{ width: '10px' }} alt="" />
                        <div className='list-introduce'>
                            <li><span>GIỚI THIỆU</span></li>
                            <li><span>HỆ THỐNG CỬA HÀNG</span></li>
                            <li><span>TUYỂN DỤNG</span></li>
                        </div>
                    </li>
                    <li className='item-menu-ctmz introduce'>SẢN PHẨM<img src={down} style={{ width: '10px' }} alt="" />
                        <div className="list-products list-introduce">
                            <li><span>BST SUIT ADAM 2023</span></li>
                            <li><span>QUẦN ÂU ADAM</span></li>
                            <li><span>GIÀY DA NAM</span></li>
                            <li><span>ÁO SƠ MI NAM</span></li>
                            <li><span>ÁO SƠ MI NGẮN TAY NAM</span></li>
                            <li><span>ÁO KHOÁC NAM</span></li>
                            <li><span>ÁO LEN NAM</span></li>
                            <li><span>ÁO POLO NAM</span></li>
                            <li><span>ÁO PHÔNG NAM</span></li>
                            <li><span>THẮT LƯNG NAM</span></li>
                            <li><span>QUẦN SỊP NAM</span></li>
                        </div>
                    </li>
                    <li className='item-menu-ctmz' style={{ background: '#ed1414' }} >GIÁ ƯU ĐÃI<img src={down} style={{ width: '10px' }} alt="" /></li>
                    <li className='item-menu-ctmz'>LOOKOOK</li>
                    <li className='item-menu-ctmz introduce'>ADAMSTORE 360<img src={down} style={{ width: '10px' }} alt="" />
                        <div className="list-adamstore  list-introduce">
                            <li><span> NEWS</span></li>
                            <li><span>  KHUYẾN MÃI</span></li>
                            <li><span>ƯU ĐÃI ĐỐI TÁC ADAM</span></li>
                            <li><span> ADAM & BÁO CHÍ</span></li>
                            <li><span>SAO VIỆT & KHÁCH HÀNG</span></li>
                            <li><span> ADAM'S VIDEOS</span></li>
                        </div>
                    </li>
                    <li className='item-menu-ctmz'>GÓC ADAM</li>
                </ul>
                <div className="left-header">
                    <div className="contact mg">Liên hệ</div>
                    <div className="search mg">Tìm kiếm<img src={search} alt="" style={{ width: '20px', marginLeft: '3px' }} /></div>
                    <div className="user mg"><img src={user} alt="" style={{ width: '20px' }} onClick={()=>navigate('/login')} /></div>
                    <div className="cart mg"><img src={bag} alt="" style={{ width: '20px' }} /></div>
                </div>
            </div>
        </div>
    );
}

export default Header;