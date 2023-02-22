import React from 'react';
import './Footer.scss'
import logo from '../header/icons/logo.webp'
import phone from '../footer/icons/phone.svg'
import mail from '../footer/icons/mail.svg'
import bocongthuong from '../footer/icons/bo_cong_thuong.webp'
import fb from '../footer/icons/facebook.svg'
import ins from '../footer/icons/instagram.svg'
import yt from '../footer/icons/youtube.svg'
function Footer(props) {
    return (
        <div>
            <div className='footer-page'>
                <div className="company item">
                    <img src={logo} alt="" />
                    <div className='phone'><img src={phone} alt="" style={{ width: '20px' }} /><p><span>0938 888 835</span></p></div>
                    <div className="mail"><img src={mail} alt="" style={{ width: '20px' }} /><p> <span>info@adamgroup.vn</span></p></div>
                    <img src={bocongthuong} alt="" />
                </div>
                <div className="introduce item">
                    <h5>GIỚI THIỆU</h5>
                    <p><span>Công Ty TNHH THỜI TRANG ADAM</span></p>
                    <p><span>Hệ thống cửa hàng</span></p>
                    <p><span>Tuyển dụng</span></p>
                    <p><span>Sản phẩm</span></p>
                </div>
                <div className="program item">
                    <h5>CHƯƠNG TRÌNH & CHÍNH SÁCH</h5>
                    <p><span>Chương trình ưu đãi</span></p>
                    <p><span>Chính sách bảo hành</span></p>
                    <p><span>Chính sách đổi trả</span></p>
                    <p><span>Chính sách bảo mật</span></p>
                    <p><span>Quy định thanh toán</span></p>
                </div>
                <div className="news item">
                    <h5>TIN TỨC</h5>
                    <p><span>Adam và Báo chí</span></p>
                    <p><span>Sao Việt và Khách hàng</span></p>
                    <p><span>Adam's Videos</span></p>
                </div>
                <div className="folow item">
                    <h5>THEO DÕI ADAM TRÊN MẠNG XÃ HỘI</h5>
                    <div className="icons">
                        <img className='icon' src={fb} alt="" style={{ width: '18px' }} />
                        <img className='icon' src={ins} alt="" style={{ width: '28px' }} />
                        <img className='icon' src={yt} alt="" style={{ width: '35px' }} />
                    </div>
                    <h5>ĐĂNG KÝ NHẬN THÔNG TIN MỚI TỪ ADAMSTORE</h5>
                    <div className='register'>
                        <input type="text" className='form-control' placeholder='Nhập email của bạn' />
                        <button type="button" class="btn btn-secondary">Đăng kí</button>
                    </div>
                </div>
            </div>
            <div className="ft">Copyrights © 2018 by <span>Adamstore</span>.</div>
        </div>

    );
}

export default Footer;