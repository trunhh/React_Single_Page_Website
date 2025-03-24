import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductManual from '../compoents/ProductManual';
import Contact from '../compoents/Contact';
import Specs from '../compoents/Specs';
import Product from '../compoents/Product';
import Shop from '../compoents/Shop';
import Header from '../compoents/Header';
import Footer from '../compoents/Footer';
import ScrollSnap from '../Utillities/ScrollSnap/ScrollSnap';


const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="scroll-container">
      <ScrollSnap />
      <Header />
      <div className="snap-sections">
        <Shop products={products}/>
        <Product />
        <Specs products={products}/>
        <ProductManual/>
        <Contact/>
      </div>
      <Footer />
    </div>
  );
}

export default Home