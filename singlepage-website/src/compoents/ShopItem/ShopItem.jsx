import React from 'react'

import {
  ShopItemButton,
  ShopItemContainer,
  ShopItemContainer1,
  ShopItemContainer2,
  RedSquareBox,
  ShopItemName,
  ShopDescription,
  ShopItemImage,
  ShopItemPrice,
  AddToCartButton,
  AddToCartIcon

} from "./ShopItem.element";

import { formatVND } from '../../Utillities/CurrencyFormater';
import { useNavigate } from "react-router-dom";
const ShopItem = ({
  name,
  desc,
  img,
  price
}) => {
  const navigate = useNavigate();
  return (
    <ShopItemButton>
      <ShopItemContainer>
        <ShopItemContainer1>
          <div>
            <RedSquareBox />
            <ShopItemName>{name}</ShopItemName>

          </div>
          
          <ShopDescription>{desc}</ShopDescription>
          <AddToCartButton onClick={() => navigate("/check-out")}>
            <AddToCartIcon/>
            thêm vào giỏ hàng
          </AddToCartButton>

        </ShopItemContainer1>
        <ShopItemContainer2>
          <ShopItemImage src={img} />
          <ShopItemPrice>{formatVND(price)}<br/>(Chưa VAT)</ShopItemPrice>

        </ShopItemContainer2>
      </ShopItemContainer>
    </ShopItemButton>
    
    
  );
};

export default ShopItem