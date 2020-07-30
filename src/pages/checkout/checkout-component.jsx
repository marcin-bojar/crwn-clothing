import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartTotal,
  selectCartItems,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = ({ cartItems, total }) => (
  <div className="checkout">
    <header className="checkout__header">
      <div className="checkout__block">
        <span>Product</span>
      </div>
      <div className="checkout__block">
        <span>Description</span>
      </div>
      <div className="checkout__block">
        <span>Quantity</span>
      </div>
      <div className="checkout__block">
        <span>Price</span>
      </div>
      <div className="checkout__block">
        <span>Remove</span>
      </div>
    </header>
    <div className="checkout__items">
      {cartItems.length
        ? cartItems.map(el => <CheckoutItem key={el.id} item={el} />)
        : null}
    </div>

    <div className="checkout__total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);
