import React from "react";
import LogoGtel from "../assets/images/logo-gtel.svg";
import QrSample from "../assets/images/qr-sample.svg";
import { FaPhoneSquare } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import '../styling/coloring.css';
import "bootstrap/dist/css/bootstrap.min.css";
const contact1 = {
  name: "Bộ phận mua POS, bảo hành, bảo trì POS:",
  number: "0862 567 385",
};

const contact2 = {
  name: "Bộ phận chăm sóc dịch vụ ASM:",
  number: "1900.0251",
};



const PhoneNumber = ({ name, number }) => {
  return (
    <div className="d-flex align-items-center gap-2 my-1">
      <div className="d-flex rounded-circle bg-plain-primary text-white p-2">
        <FaPhoneSquare size={12}/>
      </div>

      <div className="d-flex flex-column">
        <div className="fw-bold">{name}</div>
        <div>{number}</div>
      </div>
    </div>
  );
};


function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-plain-neutral py-5">
      {/* Extra Rect */}
      <div className="bg-gradient-bottom align-self-stretch h-auto mb-4" style={{
        width: "256px",
        marginRight: "-4rem",
      }}/>
      
      {/* Contact Info Container */}
      <div className="d-flex flex-column bg-white shadow-lg p-4 mt-4" style={{
        width: "640px",
      }}>
        
        <Row className="overflow-hidden">
          <div className="rounded-circle bg-plain-primary p-3 w-auto"/>
          <h4 className="text-uppercase fw-bold bg-white ps-1 ms-3 translate-middle-y">
            Thông tin liên hệ
            </h4>
        </Row>

        <Row>
          <Col xs={12} md={7} className="order-1">
            <div className="txt-primary fw-bold d-flex align-items-center">
              Nếu có bất kì thắc mắc gì hãy liên hệ với chúng tôi qua các số điện thoại sau:
            </div>
          </Col>

          <Col xs={12} md={5} className="order-3 order-md-2">
            <div className="txt-primary fw-bold d-flex justify-content-md-center">
              Quét mã QR để xem hướng dẫn:
            </div>
          </Col>

          <Col xs={12} md={7} className="order-2 order-md-3 d-flex flex-column justify-content-center">
            <PhoneNumber {...contact1} />
            <PhoneNumber {...contact2} />
          </Col>

          <Col xs={12} md={5} className="order-4 d-flex justify-content-center">
            <img src={QrSample} alt="QR Code" className="w-50 h-100" />
          </Col>
        </Row>
        
        <Row className="mx-auto my-3">
          <img src={LogoGtel} alt="Logo" className="object-fit-cover w-auto h-100"  />
        </Row>
      </div>
    </div>
  );
}

export default Contact;
