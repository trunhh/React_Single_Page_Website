import { FaCartPlus } from "react-icons/fa";
import { formatVND } from '../Utillities/CurrencyFormater';
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useAlert } from "../compoents/Alert";

const ShopItem = ({product}) => {
  const {
    name,
    desc,
    img,
    price
  } = product;

  const showAlert = useAlert();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart({ product }))
    dispatch(showAlert("Đã thêm sản phẩm vào giỏ hàng!", "success"))
  }

  return (
    <div className="h-5 w-5 py-5 ps-5 m-auto flex-shrink-0">
      <div className="position-relative d-flex bg-white w-75 h-100 shadow-lg">
        <div className="position-absolute d-flex flex-column justify-content-center pt-5 pb-3 ps-5 pe-3 align-items-center gap-3 h-100 w-75">
          <div className="row overflow-hidden">
            <div className="p-3 w-auto border border-5 border-primary border-opacity-25"/>
            <div className="fw-bold bg-white fs-2 ps-2 ms-4 mt-xs-4 translate-middle-y">{name}</div>
          </div>
          <div className="h-100 overflow-auto" style={{ whiteSpace: "pre-line" }}>{desc}</div>
          <button
            className="d-flex align-items-center justify-content-center text-uppercase fw-bold rounded-pill border-0 text-light shadow-lg px-3 py-2 gap-3 mb-3 bg-danger bg-gradient-reverse"
            onClick={() => handleClick()}
          >
            <FaCartPlus className="fs-4" />
            thêm vào giỏ hàng
          </button>
        </div>
        <div className="position-absolute d-flex flex-column align-items-center pt-5 h-100 w-3 top-0 start-100 translate-middle-x">
          <img src={img} alt={name} className="w-100 h-100 shadow-lg object-fit-cover"/>
          <div className="d-flex flex-column justify-content-center text-white text-center px-4 py-1 shadow-lg translate-middle-y bg-danger bg-gradient-reverse">
            <div className="fw-bold fs-5">{formatVND(price)}</div>
            <small>(Chưa VAT)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shop = ({products}) => {
  return (
    <div className="d-flex bg-plain-st" style={{overflowX: "auto"}}>
      {products.map((product, index) => (
        <ShopItem key={index} product={product}/>
      ))}
    </div>
  );
}
export default Shop;
