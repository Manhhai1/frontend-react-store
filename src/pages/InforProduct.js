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
class InforProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                title: 'ÁO VEST BEIGE HỌA TIẾT HERRINGBONE - AV326',
                price: '2,950,000',
                description: '',
                size: [48, 50, 52, 56],
                type: 'VEST ADAM'
            },
            count: 0,
            size: []
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        let copyItem = this.state.item
        copyItem.title = 'ÁO VEST BEIGE HỌA TIẾT HERRINGBONE - AV326'
        this.setState({
            item: copyItem
        })
    }
    handleClickSize = (e) => {
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
    render() {
        console.log(this.state)
        return (
            <div className='product'>
                <Header></Header>
                <ContentHeader name={this.state.item.title}></ContentHeader>
                <div className="product-content">
                    <div className="img">
                        <div className='img-product' style={{ 'background': `url(${img1})` }}></div>
                        <div className='img-product' style={{ 'background': `url(${img2})` }}></div>
                    </div>
                    <div className="description">
                        <h5>{this.state.item.title}</h5>
                        <p>{this.state.item.price}₫</p>
                        <p>Loại: {this.state.item.type}</p>
                        <div className="mota">
                            <div dangerouslySetInnerHTML={{ __html: this.state.item.description }}>
                            </div>

                        </div>
                        <p className='size'><p style={{ marginRight: '30px;' }}>Kích thước:</p>
                            {
                                this.state.item.size.map((item, index) => {
                                    return (<button type="button" onClick={(e) => this.handleClickSize(e)} className="btn btn-light">{item}</button>)
                                })
                            }
                        </p>
                        <p className='quantity'><p>Số lượng: </p>
                            <img src={subtract} style={{ 'width': '14px' }} alt="" onClick={() => this.setState({ count: this.state.count - 1 })} />
                            <div className='count'>{this.state.count}</div>
                            <img src={plus} style={{ 'width': '14px' }} alt="" onClick={() => this.setState({ count: this.state.count + 1 })} /></p>
                        <div className="btn-click">
                            <div className="btn-basket">
                                <h5>THÊM VÀO GIỎ</h5>
                                <p>Giao hàng tận nơi toàn quốc</p>
                            </div>
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