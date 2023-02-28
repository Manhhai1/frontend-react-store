import React from 'react';
import ContentHeader from '../account/ContentHeader';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import img from '../assets/images/1_9a46432b4a1847dc9305720a01713c8b_grande.webp'
import './Basket.scss'
import { useState } from 'react';
import { GlobalState } from '../GlobalState';
function Basket(props) {
    return (
        <div className='basket'>
            <Header ></Header>
            <ContentHeader name={'GIỎ HÀNG CỦA BẠN'}></ContentHeader>
            <div className="content">
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th></th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Đơn giá</th>
                        <th scope='col'>Size</th>
                        <th scope="col">Số lượng</th>
                        <th scope='col'>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <GlobalState>
                        {
                            ({ cartItems }) => cartItems.map((item, index) => {
                                   
                                if (item.count != 0 && item.product) return (<tr>
                                    {
                                        console.log()
                                    }
                                    <th scope="row"></th>
                                    <td><div className='image' style={{ 'background': `url(${item.product.images[0].url})` }}></div></td>
                                    <td>{item.product.title}</td>
                                    <td>{item.product.price}₫</td>
                                    <td>{item.size}</td>
                                    <td>{item.count}</td>
                                    <td>{item.product.price*item.count}đ</td>
                                </tr>)
                            })
                        }
                    </GlobalState>
                </tbody>
            </table>
            <button type="button" class="btn btn-dark btn-thanhtoan">Tiến hành thanh toán</button>
            <Footer></Footer>
        </div>
    );
}

export default Basket;