import {React, useEffect} from 'react';
import item from './images/suit_parent.webp'
import item2 from './images/suit_children.webp'
import banner from './images/banner.webp'
import './Products.scss'
function Products(props) {
    let handleOnMouseOver = (e, item2) => {
        e.target.style.background = `url(${item2})`
        console.log(item2)
    }
    let handleOnMouseMove = (e, item) => {
        e.target.style.background = `url(${item})`
    }
  
    return (
        <div className="container-products">
            <div className='products'>
                <div className="header-product"><h5>{props.headerName}</h5></div>
                <div className="content-products">
                    {props.listParent.map((item, index) => {
                        return (

                            <div className="item" key={index}>
                                <div className="boder-image" style={{ 'background': `url(${item})` }}
                                    onMouseOut={(e) => handleOnMouseMove(e, item)}
                                    onMouseOver={(e) => handleOnMouseOver(e, props.listChildren[index])}
                                >
                                    <div className="item-image" ></div>
                                </div>
                                <p><span>ÁO VEST ADAM BEIGE SỮA - AV308</span></p>
                                <b>2,750,000₫</b>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className="banner" style={{ 'background': `url(${banner})` }}>
                <h4>ADAM STORE - THƯƠNG HIỆU VESTON MAY SẴN</h4>
            </div>
        </div >

    );
}

export default Products;