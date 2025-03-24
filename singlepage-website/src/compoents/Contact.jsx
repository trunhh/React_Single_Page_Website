import LogoGtel from "../assets/images/logo-gtel.svg";
import QrSample from "../assets/images/qr-sample.svg";
import { FaPhoneSquare } from "react-icons/fa";

import '../styling/shape.css';
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
      <div className="d-flex rounded-circle bg-primary text-white p-2">
        <FaPhoneSquare/>
      </div>

      <div className="d-flex flex-column">
        <div className="fw-bold">{name}</div>
        <div>{number}</div>
      </div>
    </div>
  );
};


const Contact = () => {
  return (
    <div className="bg-plain-st d-flex  align-items-center">
      <div className="h-5 w-100 d-flex justify-content-center align-items-center">
        <div className="position-relative h-75 w-5 flex-shrink-0 mb-3">
          <div className="position-absolute h-100 w-25 bg-primary bg-gradient-reverse">
            <div className="position-absolute w-2  m-2 dot-square h-1"/>
            <div className="position-absolute start-100 translate-middle-y ms-4 bg-primary bg-gradient-horizontal p-3 rounded-circle m-auto m-3"/>
          </div>
          <div className="position-absolute top-100 start-100 mt-4 bg-primary bg-gradient-horizontal p-5 rounded-circle translate-middle"/>
          <div className="position-absolute start-50 top-100 mt-5 bg-primary bg-gradient-horizontal p-3 rounded-circle "/>


          <div className="position-absolute end-0 h-100 w-75 d-flex flex-column justify-content-around bg-white shadow-lg ps-5 pe-4 mt-4" style={{boxSizing: "content-box"}}>
            <div className="row mt-4 overflow-hidden">
              <div className="rounded-circle bg-primary p-3 w-auto"/>
              <h2 className="text-uppercase fw-bold bg-white ps-1 ms-3 translate-middle-y">
                Thông tin liên hệ
              </h2>
            </div>
            <div className="row text-primary fw-bold fs-5  ">
              <div className="col-7">
                Nếu có bất kì thắc mắc gì hãy liên hệ với chúng tôi qua các số điện thoại sau:
              </div>
              <div className="col-5 d-flex justify-content-center">
                Quét QR để xem hướng dẫn:
              </div>
            </div>
            <div className="row">
              <div className="col-7 d-flex flex-column justify-content-center">
                <PhoneNumber {...contact1} />
                <PhoneNumber {...contact2} />
              </div>
              <div className="col-5 d-flex justify-content-center">
                <img src={QrSample} alt="QR Code" className="w-auto h-2"/>
              </div>
            </div>
            <img src={LogoGtel} alt="Logo" className="d-flex m-auto h-2"/>
          </div>


          <div className="position-absolute dot-square w-2 h-2 end-0 translate-middle-y me-5"/>
          <div className="position-absolute top-100 ms-4 dot-square w-2 h-2"/>
        </div>

        </div>
      
    </div>
  );
}

export default Contact;
