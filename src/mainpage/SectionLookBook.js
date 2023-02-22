import Slider from "react-slick";
import React, { Component } from "react";
import image from './images/dream-of-venice.webp'
import './LookbookSection.scss'  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function LookbookSection(props) {
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
        <div className="lookbook-section">
            <h4>LOOKBOOK</h4>
            <Slider {...settings}>
                
                {listImage.map((item, index) => {
                    return (<div className="lookbook" >
                        <div className="lookbook-avatar" style={{ 'background': `url(${image})` }} ></div>
                         <p>DREAM OF VENICE</p>
                    </div>)
                })}
            </Slider>
        </div>
    );
}

export default LookbookSection;