import React from 'react'
import ProductManual from '../../compoents/ProductManual/ProductManual';
import Contact from '../../compoents/Contact/Contact';
import Specs from '../../compoents/Specs/Specs';
import Product from '../../compoents/Product/Product';
import Shop from '../../compoents/Shop/Shop';
const Home = () => {
  return (
    <>
      <Shop></Shop>
      <Product></Product>
      <Specs></Specs>
      <ProductManual></ProductManual>
      <Contact></Contact>
      
    </>
  );
}

export default Home