import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './CreateProduct.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ContentHeader from '../account/ContentHeader';
import { URL_BACKEND } from '../constance';
import axios from 'axios';
const mdParser = new MarkdownIt(/* Markdown-it options */);

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionMarkdown: '',
            descriptionHTML: '',
            imgs: [],
            title: '',
            price: '',
            images: [],
            type: '',
            token: window.localStorage.getItem('token')
        }
    }


    componentDidMount() {

    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionMarkdown: text,
            descriptionHTML: html,

        })
    }
    handleOnChangeImg = (event) => {
        let copyImg = this.state.imgs
        copyImg.push(event.target.files[0])
        copyImg.forEach((item, index) => {
            let output = document.getElementById(`image${index + 1}`);
            output.src = URL.createObjectURL(item);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // free memory
            }
        })
        this.setState({
            imgs: copyImg
        })
    }
    UploadImg = () => {
        this.state.imgs.forEach(async (file, index) => {
            if (!file) return alert("File not exist.")

            if (file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/webp') // 1mb
                return alert("File format is incorrect.")
            let formData = new FormData()
            formData.append('file', file)
            const res = await axios.post(`${URL_BACKEND}/api/upload`, formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: this.state.token }
            })
            let copyimages = this.state.images
            copyimages.push(res.data)
            this.setState({
                images: copyimages
            })
        })
    }
    handleSave = async () => {
        try {
            await this.UploadImg()
            let images = this.state.images
            if (images.length > 0) {
                let title = this.state.title
                let price = this.state.price
                let descriptionMarkdown = this.state.descriptionMarkdown
                let descriptionHTML = this.state.descriptionHTML
                console.log(images)
                let type = this.state.type
                await axios.post(`${URL_BACKEND}/api/products`, { title, price, descriptionHTML, descriptionMarkdown, type, images }, {
                    headers: { Authorization: this.state.token }
                })
                alert('T???o s???n ph???m th??nh c??ng')
                this.setState({
                    images: []
                })
            }
        } catch (error) {

        }


    }
    handleOnChangeItem = (e, type) => {
        let item = this.state
        item[type] = e.target.value
        this.setState({
            ...item
        })
    }

    render() {
        return (

            <div>
                <Header></Header>
                <ContentHeader name={'T???O S???N PH???M M???I'}></ContentHeader>
                <div className='create-product'>
                    <h4>T???o s???n ph???m m???i</h4>
                    <input type="text" className='form-control margin-ctm' placeholder='T??n s???n ph???m' value={this.state.productName} onChange={(e) => this.handleOnChangeItem(e, 'title')} />
                    <input type="text" className='form-control margin-ctm' placeholder='Gi?? ti???n' value={this.state.price} onChange={(e) => this.handleOnChangeItem(e, 'price')} />
                    <select class="form-control margin-ctm" aria-label="Default select example" onChange={(e) => this.handleOnChangeItem(e, 'type')}>
                        <option selected>Lo???i s???n ph???m</option>
                        <option value="bstsa2023">BST SUIT ADAM 2023</option>
                        <option value="bstst2023">BST SUIT TUXEDO 2023</option>
                        <option value="bstqaa">QU???N ??U ADAM</option>
                        <option value="gdn">GI??Y DA NAM</option>
                        <option value="asmn">??O S?? MI NAM</option>
                        <option value="asmntn">??O S?? MI NG???N TAY NAM</option>
                        <option value="akn">??O KHO??C NAM</option>
                        <option value="aln">??O LEN NAM</option>
                        <option value="apln">??O POLO NAM</option>
                        <option value="apn">??O PH??NG NAM</option>
                        <option value="tln">TH???T L??NG NAM</option>
                        <option value="qsn">QU???N S???P NAM</option>
                    </select>
                    <input type="file" id='image' style={{ display: 'none' }} onChange={(e) => this.handleOnChangeImg(e)} />
                    <label for="image" className='label-img margin-ctm'>T???i ???nh l??n</label>
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
                            value={this.state.descriptionMarkdown}
                        />
                    </div>
                    <div className="save">
                        <button type="button" class="btn btn-primary" onClick={() => this.handleSave()}>L??u nh???ng thay ?????i</button>
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