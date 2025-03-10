import { useRef, useState } from "react";
import { FaMapMarker, FaShoppingCart } from "react-icons/fa";
import BuyerInfo from "../../compoents/BuyerInfo/BuyerInfo";
import Cart from "../../compoents/Cart/Cart";
import PrinterImg from "../../assets/images/printer-img.png";
import {
  Section,
  SectionTitle,
  CheckOutHeader,
  CheckOutTitle,
  CheckOutSummary,
  SummaryTable,
  SummaryCell,
  PriceCell,
  CheckOutButton

} from "./CheckOut.element";
import { formatVND } from '../../Utillities/CurrencyFormater';
import { sampleProd } from '../../compoents/Samples';
import axios from "axios";

const CheckOutSection = ({
  icon,
  label,
  children
}) => {
  return (
    <>
      <SectionTitle>
        {icon}
        {label}
        </SectionTitle>
      <Section>{children}</Section>
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
      <SummaryCell>{label}</SummaryCell>
      <PriceCell highlight={highlight}>{formatVND(value)}</PriceCell>
    </tr>
  )
}

const CheckOut = () => {
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

  const buyerInfoRef = useRef(null); // Ref to store form submit function

  const handleCheckout = async (event) => {
    event.preventDefault();

    if (buyerInfoRef.current && !buyerInfoRef.current.validate()) {
      alert("Vui lòng điền đầy đủ thông tin trước khi thanh toán!");
      return;
    }

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

        console.log("Order created successfully:", response.data);
        alert("Đơn hàng của bạn đã được tạo thành công!");
    } catch (error) {
        console.error("Order creation failed:", error.response?.data || error.message);
        alert("Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại!");
    }
  };


  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = subtotal * 0.1;
  const shippingFee= 0;
  const totalAmount = subtotal+vat+shippingFee;

  return (
    <>
      <CheckOutHeader>
        <img src={PrinterImg}/>
        <CheckOutTitle>Thanh toán</CheckOutTitle>
      </CheckOutHeader>
      <CheckOutSection label="Địa chỉ nhận hàng" icon={<FaMapMarker color="#ff6d18"/>}>
        <BuyerInfo formData={formData} setFormData={setFormData} ref={buyerInfoRef}/>
      </CheckOutSection>

      <CheckOutSection label="Giỏ hàng" icon={<FaShoppingCart/>}>
        <Cart cartItems={cartItems} setCartItems={setCartItems}/>
      </CheckOutSection>

      <CheckOutSummary>
      <SummaryTable className="table table-borderless">
          <tbody>
            <SummaryRow label="Tổng số tiền hàng" value={subtotal}/>
            <SummaryRow label="VAT" value={vat}/>
            <SummaryRow label="Phí vận chuyển" value={shippingFee}/>
          </tbody>
          <tfoot className="border-top border-dark">
            <SummaryRow label="Tổng thanh toán" value={totalAmount} highlight={true}/>
          </tfoot>
        </SummaryTable>

      </CheckOutSummary>

      <CheckOutButton onClick={handleCheckout}>Đặt hàng</CheckOutButton>
      
      
    </>
  );
}

export default CheckOut