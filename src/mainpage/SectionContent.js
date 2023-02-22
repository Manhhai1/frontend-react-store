import React from 'react';

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import slide_1 from './images/slideshow_1_master.webp'
import slide_2 from './images/slideshow_2_master.webp'
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height:'454px'
}
const slideImages = [
    {
        url: slide_1,
        caption: 'Slide 1'
    },
    {
        url: slide_2,
        caption: 'Slide 2'
    },
   
];
function SectionContent(props) {
    return (
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    );
}

export default SectionContent;