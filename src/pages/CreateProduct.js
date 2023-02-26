import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './CreateProduct.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ContentHeader from '../account/ContentHeader';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            imgs: []
        }
    }


    componentDidMount() {

    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,

        })
    }
    handleOnChangeImg = (event) => {
        let copyImg = this.state.imgs
        copyImg.push(event.target.files[0])
        copyImg.forEach((item, index) => {
            let output = document.getElementById(`image${index + 1}`);
            console.log(output)
            output.src = URL.createObjectURL(item);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // free memory
            }
        })
        this.setState({
            imgs: copyImg
        })
    }
    render() {
        console.log(this.state.imgs)
        return (

            <div>
                <Header></Header>
                <ContentHeader name={'TẠO SẢN PHẨM MỚI'}></ContentHeader>
                <div className='create-product'>
                    <h4>Tạo sản phẩm mới</h4>
                    <input type="text" className='form-control margin-ctm' placeholder='Tên sản phẩm' />
                    <input type="text" className='form-control margin-ctm' placeholder='Giá tiền' />
                    <input type="file" id='image' style={{ display: 'none' }} onChange={(e) => this.handleOnChangeImg(e)} />
                    <label for="image" className='label-img margin-ctm'>Tải ảnh lên</label>
                    <div className="list-img margin-ctm">
                        <img src="" id='image1' style={{ width: '200px', height: '300px' }} className='margin-ctm' alt="" />
                        <img src="" id='image2' style={{ width: '200px', height: '300px' }} className='margin-ctm' alt="" />
                        <img src="" id='image3' style={{ width: '200px', height: '300px' }} className='margin-ctm' alt="" />
                        <img src="" id='image4' style={{ width: '200px', height: '300px' }} className='margin-ctm' alt="" />
                    </div>
                    <div className="content margin-ctm">
                        <MdEditor style={{ height: '500px', width: '100%' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.contentMarkdown}
                        />
                    </div>
                    <div className="save">
                        <button type="button" class="btn btn-primary">Lưu những thay đổi</button>
                    </div>
                </div>
                <Footer>

                </Footer>
            </div>
        );
    }
}

CreateProduct.propTypes = {

};

export default CreateProduct;