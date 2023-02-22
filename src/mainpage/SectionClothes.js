import React from 'react';
import './SectionClothes.scss'
import shoes from './images/shoes.webp'
import suit from './images/suit.webp'
import jacket from './images/jacket.webp'
import sweater from './images/sweater.webp'
function SectionClothes(props) {
    return (
        <div className='container-section-clothes'>
            <div className="suit" style={{ 'backgroundImage': `url(${suit})` }} >

            </div>
            <div className="clothes-parent">
                <div className="clothes">
                    <div className="jacket" style={{ 'backgroundImage': `url(${jacket})` }}>
                    </div>
                    <div className="sweater" style={{ 'backgroundImage': `url(${sweater})` }}>
                    </div>
                </div>
                <div className="shoes" style={{ 'backgroundImage': `url(${shoes})` }}>
                </div>
            </div>
        </div>
    );
}

export default SectionClothes;