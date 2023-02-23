import React from 'react';
import background from './icons/background_1.webp'
import house from '../account/icons/house.svg'
import './ContentHeader.scss'
import {useNavigate} from 'react-router-dom'
function ContentHeader(props) {
    let navigate = useNavigate()
    return (
        <div className='content-header'>
            <div className="back-home" onClick={()=>navigate('/home')}>
                <img src={house} alt="" style={{ width: '20px' }} /><p>Trang chủ</p>/<b>{props.name}</b>
            </div>
            <div className="background-content" style={{ 'background': `url(${background})` }}></div>
            <h4 className='name-content'>{props.name}</h4>
        </div>
    );
}

export default ContentHeader;