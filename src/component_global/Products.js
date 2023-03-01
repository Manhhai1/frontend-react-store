import React, { Component } from 'react';
import item from './images/suit_parent.webp'
import item2 from './images/suit_children.webp'
import banner from './images/banner.webp'
import './Products.scss'
import icon from '../header/icons/down.svg'
import close from '../header/icons/close.svg'
import axios from 'axios';
import { URL_BACKEND } from '../constance';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openSideBar: false,
            data: [],
            sort: '',
            price: '',
            type: ''
        }
    }

    async componentDidMount() {
        let data = await axios.get(`${URL_BACKEND}/api/products?page=1&limit=20&type[regex]=${this.props.type}`);
        this.setState({
            data: data.data
        })
    }
    handleOnMouseOver = (e, item2) => {
        e.target.style.background = `url(${item2})`
        console.log(item2)
    }
    handleOnMouseMove = (e, item) => {
        e.target.style.background = `url(${item})`
    }
    handleClickSideBar = () => {
        this.setState({
            openSideBar: true
        })
    }
    handleCloseSidebar = () => {
        this.setState({
            openSideBar: false
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div className="container-products">
                <div className='products'>
                    <div className="tieu-de"> <h5>{this.props.headerName}</h5></div>
                    <div className="header-product">
                        <p onClick={() => this.handleClickSideBar()}>Bộ lọc<img src={icon} style={{ width: '10px', marginLeft: '5px' }} alt="" /></p>
                        <div className="sort">
                            <p className='tieu-de-sap-xep'>Sắp xếp</p>
                            <select className="form-select" aria-label="Default select example">
                                <option selected >Tùy chọn</option>
                                <option value="1">Sản phẩm bán chạy</option>
                                <option value="2">Theo bảng chữ cái từ A-Z</option>
                                <option value="3">Theo bảng chữ cái từ Z-A</option>
                                <option value="4">Giá từ thấp tới cao</option>
                                <option value="5">Giá từ cao tới thấp</option>
                                <option value="6">Mới nhất</option>
                                <option value="7">Cũ nhất</option>
                            </select>
                        </div>
                    </div>
                    <div className="content">
                        {
                            this.state.openSideBar && <div className="sidebar">

                                <div className="header-sidebar"><p>Lọc theo</p><img className='close-sidebar' src={close} alt="" onClick={() => this.handleCloseSidebar()} /></div>
                                <div className="content-sidebar">
                                    <h5>KHOẢNG GIÁ</h5>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckDefault" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Tất cả
                                        </label>


                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Nhỏ hơn 500,000₫
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Từ 500,000₫ - 1,000,000₫
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Từ 1,000,000₫ - 2,000,000₫
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Từ 2,000,000₫ - 2,500,000₫
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Từ 2,500,000₫ - 4,000,000₫
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Lớn hơn 4,000,000₫
                                        </label>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="content-products">
                            {this.state.data.length > 0 && this.state.data.map((item, index) => {
                                return (

                                    <div className="item" key={index} >
                                        {
                                            item.images[0] && <Link to={`/product/${item._id}`}>
                                                <div className="boder-image" style={{ 'background': `url(${item.images[0].url})` }}
                                                    onMouseOut={(e) => this.handleOnMouseMove(e, item.images[0].url)}
                                                    onMouseOver={(e) => this.handleOnMouseOver(e, item.images[1].url)}
                                                >
                                                    <div className="item-image" ></div>
                                                </div>
                                            </Link>
                                        }
                                        <p><span>{item.title}</span></p>
                                        <b>{item.price}₫</b>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>


                <div className="banner" style={{ 'background': `url(${banner})` }}>
                    <h4>ADAM STORE - THƯƠNG HIỆU VESTON MAY SẴN</h4>
                </div>
            </div >
        )
    }
}
export default Products;