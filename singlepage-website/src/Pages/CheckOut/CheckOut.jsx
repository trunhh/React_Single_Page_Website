import { useRef, useState } from "react";
import { FaMapMarker, FaShoppingCart } from "react-icons/fa";
import BuyerInfo from "../../compoents/BuyerInfo/BuyerInfo";
import Cart from "../../compoents/Cart/Cart";
import PrinterImg from "../../assets/images/printer-img.png";
import { useAlert } from "../../compoents/Alert/Alert";
import {
  CheckOutTitle,
  PriceCell,
  CheckOutButton

} from "./CheckOut.element";
import { formatVND } from '../../Utillities/CurrencyFormater';
import { sampleProd } from '../../compoents/Samples';
import axios from "axios";
import { Table } from "react-bootstrap";
import '../../styling/coloring.css';

const CheckOutSection = ({
  icon,
  label,
  children
}) => {
  return (
    <>
      <h5 className="d-flex align-items-center border-bottom border-dark fw-bold text-uppercase px-sm-5 py-3 gap-1">
        {icon}
        {label}
        </h5>
      <div className="d-flex justify-content-center mt-4">{children}</div>
    </>
  )
}

const SummaryRow = ({
  label,
  value,
  highlight = false
}) => {
  return (
    <tr>
      <td className="bg-transparent">{label}</td>
      <PriceCell highlight={highlight}>{formatVND(value)}</PriceCell>
    </tr>
  )
}

const CheckOut = () => {
  const showAlert = useAlert();
  const [cartItems, setCartItems] = useState([
    { ...sampleProd, quantity: 1 }, // Sample product with quantity
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    companyName: "",
    taxId: "",
    companyAddress: "",
    invoiceRequired: false,
  });

  const [loading, setLoading] = useState(false);

  const buyerInfoRef = useRef(null); // Ref to store form submit function

  const handleCheckout = async (event) => {
    event.preventDefault();

    if (buyerInfoRef.current && !buyerInfoRef.current.validate()) {
      showAlert("Vui lòng điền đầy đủ thông tin trước khi thanh toán!","danger");
      return;
    }

    setLoading(true);

    const orderData = {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.companyAddress,
        city: formData.provinceName,
        district: formData.districtName,
        commune: formData.wardName,
        invoice: formData.invoiceRequired ? 1 : 0,
        company: formData.companyName,
        tax: formData.taxId,
        location: formData.province,
        product_name: cartItems.length > 0 ? cartItems[0].name : "",
        product_number: cartItems.length > 0 ? cartItems[0].quantity : 1,
        product_price: cartItems.length > 0 ? cartItems[0].price : 0,
        total_price: totalAmount
    };

    try {
        const response = await axios.post("https://crm.gtelcts.vn/admin/asm/CreateOrder", orderData, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "3g2jwehg3j432hjg423hj",
            },
        });

        showAlert("Đơn hàng của bạn đã được tạo thành công!","success");
    } catch (error) {
        showAlert("Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại!", "danger");
    } finally {
      setLoading(false);
    }
  };


  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = subtotal * 0.1;
  const shippingFee= 0;
  const totalAmount = subtotal+vat+shippingFee;

  return (
    <>
      {loading && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
          <div className="text-center">
            <div className="spinner-border text-light" role="status" style={{ width: "4rem", height: "4rem" }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-light mt-3">Đang xử lý đơn hàng...</p>
          </div>
        </div>
      )}

      <div className="d-flex bg-plain-neutral p-1">
        <img src={PrinterImg} style={{height: "128px"}}/>
        <CheckOutTitle>Thanh toán</CheckOutTitle>
      </div>
      <CheckOutSection label="Địa chỉ nhận hàng" icon={<FaMapMarker color="#ff6d18"/>}>
        <BuyerInfo formData={formData} setFormData={setFormData} ref={buyerInfoRef}/>
      </CheckOutSection>

      <CheckOutSection label="Giỏ hàng" icon={<FaShoppingCart/>}>
        <Cart cartItems={cartItems} setCartItems={setCartItems}/>
      </CheckOutSection>

      <div className="bg-plain-neutral px-4 py-3">
      <Table className="table-borderless w-25 ms-auto bg-transparent">
          <tbody>
            <SummaryRow label="Tổng số tiền hàng" value={subtotal}/>
            <SummaryRow label="VAT" value={vat}/>
            <SummaryRow label="Phí vận chuyển" value={shippingFee}/>
          </tbody>
          <tfoot className="border-top border-dark">
            <SummaryRow label="Tổng thanh toán" value={totalAmount} highlight={true}/>
          </tfoot>
        </Table>

      </div>

      <CheckOutButton 
        className="d-flex text-white fw-bold rounded-pill border-0 bg-plain-primary-light fs-5 mt-3 mb-5 ms-auto me-4 px-5 py-2 " 
        onClick={handleCheckout}
      >
        Đặt hàng
      </CheckOutButton>
      
      
    </>
  );
}

export default CheckOut