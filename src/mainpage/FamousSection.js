import Slider from "react-slick";
import React, { Component } from "react";
import image from './images/jacket.webp'
import './FamousSection.scss'  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function FamousSection(props) {
    const listImage = [image, image, image, image, image, image, image]
    console.log(listImage)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };
    return (
        <div className="famous-section">
            <h4>NGƯỜI NỔI TIẾNG</h4>
            <Slider {...settings}>
                
                {listImage.map((item, index) => {
                    return (<div className="famous" >
                        <div className="famous-avatar" style={{ 'background': `url(${image})` }} ></div>
                         <p>ca si ngo kien huy</p>
                    </div>)
                })}
            </Slider>
        </div>
    );
}

export default FamousSection;