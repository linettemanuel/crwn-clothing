import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector.js';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="headers-block">
                <span className="">Product</span>
            </div>
            
            <div className="header-block">
                <span className="">Description</span>
            </div>

            <div className="header-block">
                <span className="">Quantity</span>
            </div>

            <div className="header-block">
                <span className="">Price</span>
            </div>

            <div className="header-block">
                <span className="">Remove</span>
            </div>
       </div>
       {
           //cartItems.map( cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
           cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
       }
       <div className="total">
        <span>TOTAL: ${total}</span>
       </div>
       <div className="test-warning">
       <p>* Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 with expiration date of any further date and CVC of 123
       </p>
       </div>
       <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)