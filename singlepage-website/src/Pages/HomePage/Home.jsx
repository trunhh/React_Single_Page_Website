import React from 'react'
import ProductManual from '../../compoents/ProductManual/ProductManual';
import Contact from '../../compoents/Contact';
import Specs from '../../compoents/Specs';
import Product from '../../compoents/Product/Product';
import Shop from '../../compoents/Shop/Shop';
import { SampleProducts } from '../../compoents/Samples';


const Home = () => {
  return (
    <>
      <Shop></Shop>
      <Product></Product>
      <Specs products={SampleProducts}/>
      <ProductManual></ProductManual>
      <Contact></Contact>
      
    </>
  );
}

export default Home