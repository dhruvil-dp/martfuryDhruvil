import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { removeOccasionItem } from '../../../store/occasion/action';
import Link from 'next/link';
import { Rate } from 'antd';
import ProductCart from '../../elements/products/ProductCart';
//import Form from 'antd/lib/form/Form';
import { Form, Input } from 'antd';
class Occasion extends Component {
    constructor(props) {
        super(props);
    }

    handleAddItemToCart = (e, product) => {
        this.props.dispatch(addItem(product));
    };

    handleRemoveOccasionItem = (e, product) => {
        e.preventDefault();
        this.props.dispatch(removeOccasionItem(product));
    };

    render() {
        const { occasionItems } = this.props;
        return (
            <div className="ps-section--shopping ps-whishlist">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Occasion</h1>
                    </div>
                    <div className="ps-section__content">
                        {occasionItems && occasionItems.length === 0 ? (
                            <div className="alert alert-danger" role="alert">
                                Occasion is empty!
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table ps-table--whishlist">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Product name</th>
                                            <th>Unit Price</th>
                                            <th>Vendor</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {occasionItems.map(product => (
                                            <tr key={product.id}>
                                                <td>
                                                    <a
                                                        href="#"
                                                        onClick={e =>
                                                            this.handleRemoveOccasionItem(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                        <i className="icon-cross"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <ProductCart
                                                        product={product}
                                                    />
                                                </td>
                                                <td className="price" align="center">
                                                    ${product.price}
                                                </td>
                                                <td>{product.vendor}</td>
                                                
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td align="right">
                                        <Form className="ps-form--occasion">
                                                        <div className="ps-form__content">
                                                            
                                                            <div className="form-group">
                                                                <Form.Item
                                                                    name="occaionName"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message:
                                                                                'Please input your occasion!',
                                                                        },
                                                                    ]}>
                                                                    <Input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Occasion Name"
                                                                    />
                                                                </Form.Item>
                                                            </div>
                                                            
                                                            
                                                            
                                                            
                                                            
                                                        </div>
                                                    </Form>
                                                    </td>
                                                    <td align="right">
                                        <Form >{/*className="ps-form--account"*/}
                                                        <div className="ps-form__content">
                                                            
                                                            
                                                            
                                                            
                                                            <div className="form-group">
                                                                <Form.Item
                                                                    name="occaionDate"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message:
                                                                                'Please input occasion date!',
                                                                        },
                                                                    ]}>
                                                                    <Input
                                                                        className="form-control"
                                                                        type="date"
                                                                        placeholder="Occasion Date"
                                                                    />
                                                                </Form.Item>
                                                            </div>
                                                            
                                                            
                                                        </div>
                                                    </Form>
                                                    </td>
                                                    <td align="center">
                                                    <a
                                                        className="ps-btn"
                                                        href=""
                                                        align="center"
                                                        onClick={e =>
                                                            this.handleAddItemToCart(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                        Share
                                                    </a>
                                                    </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.occasion;
};
export default connect(mapStateToProps)(Occasion);
