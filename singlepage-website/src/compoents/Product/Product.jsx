import React from "react";

import Asmpos from "../../assets/images/asmpos.jpg";

import {
    ProductContainer,
    ProductContentContainer,
    ProductInfoContainer,
    ProductTitle,
    ProductImage,
    ProductDesc
} from "./Product.element";


function Product() {
  return (
    <ProductContainer>
      <ProductTitle>Sản phẩm</ProductTitle>
      <ProductContentContainer>
        <ProductInfoContainer src={Asmpos}>
          <ProductImage src={Asmpos}/>
          <ProductDesc>Khai báo thông tin lưu trú và thông báo lưu trú 
            <br/>nhanh chóng 
            <br/>đúng quy định</ProductDesc>
        </ProductInfoContainer>


      </ProductContentContainer>
    </ProductContainer>
    

  );
}
export default Product;
