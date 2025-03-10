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

const ShopItem = ({
  name,
  desc,
  img,
  price
}) => {
  return (
    <ShopItemButton>
      <ShopItemContainer>
        <ShopItemContainer1>
          <div>
            <RedSquareBox />
            <ShopItemName>{name}</ShopItemName>

          </div>
          
          <ShopDescription>{desc}</ShopDescription>
          <AddToCartButton>
            <AddToCartIcon/>
            thêm vào giỏ hàng

            
          </AddToCartButton>

        </ShopItemContainer1>
        <ShopItemContainer2>
          <ShopItemImage src={img} />
          <ShopItemPrice>{price}<br/>(Chưa VAT)</ShopItemPrice>

        </ShopItemContainer2>
      </ShopItemContainer>
    </ShopItemButton>
    
    
  );
};

export default ShopItem