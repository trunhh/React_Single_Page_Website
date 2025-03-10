import React from "react";

import ShopItem from "../ShopItem/ShopItem";
import { sampleProd } from "../Samples";

import {
    ShopContainer,
} from "./Shop.element";


function Shop() {
  return (
    <ShopContainer>
        <ShopItem {...sampleProd} />
        <ShopItem {...sampleProd} />
    </ShopContainer>
    

  );
}
export default Shop;
