import React from 'react';
import suit1 from './images/suit1.webp'
import suit3 from './images/suit2.webp'
import suit4 from './images/suit3.webp'
import suit2 from './images/suit4.webp'
import './SectionSuit.scss'
function SectionSuit(props) {
    return (
        <div className='section-suit'>
            <h4>BST SUIT MỚI</h4>
            <div className="list-suit">
                <div className="suit-item" style={{ 'background': `url(${suit1})` }}></div>
                <div className="suit-item" style={{ 'background': `url(${suit2})` }}></div>
                <div className="suit-item" style={{ 'background': `url(${suit3})` }}></div>
                <div className="suit-item" style={{ 'background': `url(${suit4})` }}></div>
            </div>
        </div>
    );
}

export default SectionSuit;