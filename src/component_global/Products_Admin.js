import React, { Component } from 'react';
import item from './images/suit_parent.webp'
import item2 from './images/suit_children.webp'
import banner from './images/banner.webp'
import './Products_Admin.scss'
import icon from '../header/icons/down.svg'
import close from '../header/icons/close.svg'
import plus from '../component_global/images/plus.svg'
import axios from 'axios';
import { URL_BACKEND } from '../constance';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import ModalCreateProduct from '../pages/ModalUpdateProduct';

class Products_Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openSideBar: false,
            data: [],
            openModal: false,
            itemUpdate: {},
            sort: '',
            price: '',
            type: ''
        }
    }

    async componentDidMount() {
        let data = await axios.get(`${URL_BACKEND}/api/products?page=1&limit=20&type[regex]=${this.props.type}`);
        console.log(data)
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
    setOpenModal = (e) => {
        this.setState({
            openModal: !this.state.openModal,
            itemUpdate: e
        })
    }
    handleDeleteItem = async(id) => {
        await axios.delete(`${URL_BACKEND}/api/products/${id}`, {
            headers: { Authorization: localStorage.getItem('token') }
        });
        let arr = this.state.data
        arr = arr.filter(item => item._id !== id)
        this.setState({
            data: arr
        })
    }
    render() {

        return (

            <div className="container-products-admin">

                <div className='products'>
                    <div className="tieu-de"> <h5>{this.props.headerName}</h5></div>
                    <div className="header-product">
                        <p onClick={() => this.handleClickSideBar()}>B??? l???c<img src={icon} style={{ width: '10px', marginLeft: '5px' }} alt="" /></p>
                        <div className="sort">
                            <p className='tieu-de-sap-xep'>S???p x???p</p>
                            <select className="form-select" aria-label="Default select example">
                                <option selected >T??y ch???n</option>
                                <option value="1">S???n ph???m b??n ch???y</option>
                                <option value="2">Theo b???ng ch??? c??i t??? A-Z</option>
                                <option value="3">Theo b???ng ch??? c??i t??? Z-A</option>
                                <option value="4">Gi?? t??? th???p t???i cao</option>
                                <option value="5">Gi?? t??? cao t???i th???p</option>
                                <option value="6">M???i nh???t</option>
                                <option value="7">C?? nh???t</option>
                            </select>
                        </div>
                    </div>
                    <div className="content">
                        {
                            this.state.openSideBar && <div className="sidebar">

                                <div className="header-sidebar"><p>L???c theo</p><img className='close-sidebar' src={close} alt="" onClick={() => this.handleCloseSidebar()} /></div>
                                <div className="content-sidebar">
                                    <h5>KHO???NG GI??</h5>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckDefault" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            T???t c???
                                        </label>


                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Nh??? h??n 500,000???
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            T??? 500,000??? - 1,000,000???
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            T??? 1,000,000??? - 2,000,000???
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            T??? 2,000,000??? - 2,500,000???
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            T??? 2,500,000??? - 4,000,000???
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="flexCheckChecked" name='sort-by' />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            L???n h??n 4,000,000???
                                        </label>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="content-products">
                            <div className="item">
                                <div className="plus-item">
                                    <Link to='/product/create-product'><img src={plus} alt="" /></Link>

                                </div>
                            </div>
                            {this.state.data && this.state.data.length && this.state.data.map((item, index) => {
                                if (!item.images[1]) item.images[1] = item.images[0]
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
                                        <b>{item.price}???</b>
                                        <div className="btn-product">
                                            <button type="button" class="btn btn-secondary" onClick={() => this.setOpenModal(item)}>Update</button>
                                            <button type="button" class="btn btn-danger" onClick={() => this.handleDeleteItem(item._id)}>Delete</button>
                                        </div>
                                    </div>
                                )
                            })}
        
                        </div>
                    </div>


                </div>


                <div className="banner" style={{ 'background': `url(${banner})` }}>
                    <h4>ADAM STORE - TH????NG HI???U VESTON MAY S???N</h4>
                </div>

            </div >
        );
    }
}
export default Products_Admin;