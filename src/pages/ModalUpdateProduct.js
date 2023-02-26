import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import './ModalUpdateProduct.scss'
class ModalUpdateProduct extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    toggle = () => {
        this.props.openModal()
    }
    render() {
        console.log(this.props.item)
        return (
            <div className='modal-create-product'>
                <Modal isOpen={this.props.setOpenModal} toggle={()=>this.toggle()} >
                    <ModalHeader>
                        <h5 >Cập nhật sảm phẩm</h5>
                    </ModalHeader>
                    <ModalBody>
                        Modal body text goes here.
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

ModalUpdateProduct.propTypes = {

};

export default ModalUpdateProduct;