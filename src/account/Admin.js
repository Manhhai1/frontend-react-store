import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ContentHeader from './ContentHeader';
import './Admin.scss'
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentWillMount() {

    }

    componentDidMount() {

    }


    render() {
        return (
            <div className='admin'>
                <Header name={"ADMIN"}></Header>
                <ContentHeader name={'XIN CHÀO ADMIN'}></ContentHeader>
                <div className="content-admin">
                    <h5>Lịch sử đơn hàng</h5>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

Admin.propTypes = {

};

export default Admin;