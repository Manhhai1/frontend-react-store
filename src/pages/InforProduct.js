import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import ContentHeader from '../account/ContentHeader';
import Footer from '../footer/Footer';
import './InforProduct.scss'
import img1 from '../component_global/images/suit_parent.webp'
import img2 from '../component_global/images/suit_children.webp'
import plus from '../component_global/images/plus-solid.svg'
import subtract from '../component_global/images/minus-.svg'
import { withRouter } from 'react-router'
import axios from 'axios';
import { GlobalState } from '../GlobalState';
import { URL_BACKEND } from '../constance';
class InforProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                title: '',
                price: '',
                descriptionMarkdown: '',
                size: [48, 50, 52, 56],
                type: '',
                images: []
            },
            count: 0,
            size: ''
        }
    }

    componentWillMount() {

    }

    async componentDidMount() {
        const id = window.location.href.split('/')[4]
        let data = await axios.get(`${URL_BACKEND}/api/products?_id=${id}`)
        let copyItem = this.state.item
        copyItem.title = data.data[0].title
        copyItem.price = data.data[0].price
        copyItem.descriptionMarkdown = data.data[0].descriptionMarkdown
        copyItem.images = data.data[0].images
        copyItem.type = data.data[0].type
        console.log(copyItem.images)
        this.setState({
            item: copyItem
        })
    }
    handleClickSize = (e) => {
        this.setState({
            size: e.target.value
        })
        let imposters = document.querySelectorAll(".btn-light");
        for (let i = 0; i < imposters.length; i++) {
            imposters[i].addEventListener("click", function () {
                var count = 0;
                while (count < imposters.length) {
                    imposters[count++].classList.remove('active-size');
                }
                this.classList.add("active-size");
            });
        }
    }
    handleAddBasket = () => {

    }
    render() {
        return (
            <div className='product'>
                <Header add={this.state.count}></Header>
                <ContentHeader name={this.state.item.title}></ContentHeader>
                <div className="product-content">
                    <div className="img">
                        {
                            this.state.item && this.state.item.images.length > 0 && this.state.item.images.map((item, index) => {
                                return (
                                    <div className='img-product' style={{ 'background': `url(${item.url})` }}></div>
                                )
                            })

                        }
                    </div>
                    <div className="description">
                        <h5>{this.state.item.title}</h5>
                        <p>{this.state.item.price}₫</p>
                        <p>Loại: {this.state.item.type}</p>
                        <div className="mota">
                            <div dangerouslySetInnerHTML={{ __html: this.state.item.descriptionMarkdown }}>
                            </div>

                        </div>
                        <p className='size'><p style={{ marginRight: '30px;' }}>Kích thước:</p>
                            {
                                this.state.item.size.map((item, index) => {
                                    return (<button type="button" value={item} onClick={(e) => this.handleClickSize(e)} className="btn btn-light">{item}</button>)
                                })
                            }
                        </p>
                        <p className='quantity'><p>Số lượng: </p>
                            <img src={subtract} style={{ 'width': '14px' }} alt="" onClick={() => this.setState({ count: this.state.count - 1 })} />
                            <div className='count'>{this.state.count}</div>
                            <img src={plus} style={{ 'width': '14px' }} alt="" onClick={() => this.setState({ count: this.state.count + 1 })} /></p>
                        <div className="btn-click">
                            <GlobalState>
                                {({ addToCart }) => <div className="btn-basket" onClick={() => addToCart(this.state.item, this.state.count, this.state.size)}>
                                    <h5>THÊM VÀO GIỎ</h5>
                                    <p>Giao hàng tận nơi toàn quốc</p>
                                </div>}

                            </GlobalState>

                            <div className="btn-buy">
                                <h5>MUA NGAY</h5>
                                <p>Thêm nhiều ưu đãi hấp dẫn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

InforProduct.propTypes = {

};

export default InforProduct;