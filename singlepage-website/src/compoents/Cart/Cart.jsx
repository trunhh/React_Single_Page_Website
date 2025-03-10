import React, {useState} from 'react'
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { formatVND } from '../../Utillities/CurrencyFormater';

import {
  ProductImage,
  CartTable,
  CartCell



} from "./Cart.element";



const CartItem = ({ img, name, price, quantity, onQuantityChange}) => {

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(99, Number(e.target.value)));
    onQuantityChange(value);
  };

  return (
    <tr>
    <CartCell>
        <ProductImage src={img} alt={name} />
        <span>{name}</span>
    </CartCell>
    <CartCell>{formatVND(price)}</CartCell>
    <CartCell>
      <Form.Control
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={handleQuantityChange}
      />
    </CartCell>
    <CartCell>{formatVND(price * quantity)}</CartCell> {/* ✅ Format total */}
  </tr>
  );
};



const Cart = ({
  cartItems,
  setCartItems
}) => {
  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
  };

  return (
    <CartTable className="table table-striped">
      <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
        </tr>
        
      </thead>
      <tbody className="table-group-divider">
        {cartItems.map((item, index) => (
          <CartItem 
            key={index} 
            index={index} 
            {...item} 
            onQuantityChange={(quantity) => handleQuantityChange(index, quantity)}
          />
        ))}
      </tbody>
    </CartTable>
    
    
    
  );
};

export default Cart