import { useRef, useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FaMapMarker, FaShoppingCart } from "react-icons/fa";
import BuyerInfo from "../compoents/BuyerInfo";
import Cart from "../compoents/Cart";
import PrinterImg from "../assets/images/printer-img.png";
import { useAlert } from "../compoents/Alert";
import { formatVND } from '../Utillities/CurrencyFormater';
import { Table } from "react-bootstrap";
import Header from "../compoents/Header";
import { orderProducts } from "../redux/actions/productActions";
const CheckOutSection = ({
  icon,
  label,
  children
}) => {
  return (
    <div className="overflow-hidden">
      <h5 className="d-flex align-items-center border-bottom fw-bold text-uppercase px-5 py-3 gap-1">
        {icon}
        {label}
        </h5>
      <div className="d-flex  justify-content-center m-5">{children}</div>
    </div>
  )
}

const SummaryRow = ({
  label,
  value
}) => {
  return (
    <tr>
      <td className="bg-transparent">{label}</td>
      <td className="bg-transparent text-end w-0">{formatVND(value)}</td>
    </tr>
  )
}

const CheckOut = () => {
  const showAlert = useAlert();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {message} = useSelector((state) => state.product);
  useEffect(() => {
    if (message?.text) {
      showAlert(message.text, message.type);
    }
  }, [message?.id]);
  
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    company: "",
    tax: "",
    address: "",
    invoice: false,
  });


  const buyerInfoRef = useRef(null);

  const handleCheckout = async (event) => {
    event.preventDefault();

    if (buyerInfoRef.current && !buyerInfoRef.current.validate()) {
      showAlert("Vui lòng điền đầy đủ thông tin trước khi thanh toán!","danger");
      return;
    }
    
    

    const orderData = {
        ...formData,
        invoice: formData.invoice ? 1 : 0,
        tax: formData.tax,
        total_price: cart.totalPrice * 1.1,
        products: cart.items
    };

    dispatch(orderProducts(orderData));
  };


  return (
    <>
      <Header/>

      <div className="d-flex align-items-center bg-plain-st p-1">
        <img src={PrinterImg} className="h-2"/>
        <h2 className="d-flex align-items-center text-secondary my-4 p-3 fw-bold text-capitalize border-start border-secondary">
          thanh toán
        </h2>
      </div>
      <CheckOutSection label="Địa chỉ nhận hàng" icon={<FaMapMarker className="text-secondary"/>}>
        <BuyerInfo formData={formData} setFormData={setFormData} ref={buyerInfoRef}/>
      </CheckOutSection>

      <CheckOutSection label="Giỏ hàng" icon={<FaShoppingCart/>}>
        <Cart/>
      </CheckOutSection>

      <div className="bg-plain-st px-5 py-3">
      <Table className="table-borderless ms-auto bg-transparent w-3">
          <tbody>
            <SummaryRow label="Tổng số tiền hàng" value={cart.totalPrice}/>
            <SummaryRow label="VAT" value={cart.totalPrice * .1}/>
            <SummaryRow label="Phí vận chuyển" value={0}/>
          </tbody>
          <tfoot className="border-top border-dark">
            <tr className="fw-bold fs-5">
              <td className="bg-transparent">Tổng thanh toán</td>
              <td className="bg-transparent text-end text-secondary w-0">{formatVND(cart.totalPrice * 1.1)}</td>
            </tr>
          </tfoot>
        </Table>

      </div>

      <button 
        className="d-flex text-white fw-bold rounded-pill border-0 bg-secondary fs-5 mt-3 mb-5 ms-auto me-5 px-5 py-2 " 
        onClick={handleCheckout}
      >
        Đặt hàng
      </button>
      
      
    </>
  );
}

export default CheckOut