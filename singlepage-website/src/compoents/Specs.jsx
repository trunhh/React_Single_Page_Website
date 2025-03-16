import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styling/coloring.css';

const SpecDetail = (product) => {
  return (
    <Col>
      <Row>
        <Col sm={12} md={5} xxl={2} className="d-inline-block">
          <img src={product.img} class="rounded object-fit-cover w-100 h-100"/>
        </Col>
        
        <Col sm={12} md={7} xxl={10}>
          <div><b>Hệ điều hành: </b>{product.os}</div>
          <div><b>CPU: </b>{product.cpu}</div>
          <div><b>Bộ nhớ: </b>{product.memory}</div>
          <div><b>Kết nối: </b>{product.connectivity}</div>
          <div><b>Màn hình hiển thị: </b>{product.display}</div>
          <div><b>Camera sau: </b>{product.camera}</div>
          <div><b>Định vị: </b>{product.positioning}</div>
          <div><b>Hỗ trợ đọc: </b>{product.reader}</div>
          <div><b>Máy in: </b>{product.printer}</div>
          <div><b>Pin: </b>{product.battery}</div>
          <div><b>Vật liệu cấu tạo: </b>{product.material}</div>
          <div><b>Điều kiện môi trường: </b>{product.humidity}</div>
          <div><b>Nhiệt độ: </b>{product.heat}</div>
          <div><b>Kích thước, trọng lượng: </b>{product.size}</div>
          <div><b>Chứng chỉ: </b>{product.certification}</div>
        </Col>
      </Row>
    </Col>
  );
};

const Specs = ({products}) => {
  return (
    <div className="text-light p-4 bg-gradient-top">
      <h2 className="fw-bold text-uppercase d-flex justify-content-center">
        Thông số kỹ thuật
      </h2>
      <Row className="justify-content-center p-3 gap-5">
        {products.map((product, index) => (
          <SpecDetail key={index} {...product} />
        ))}
      </Row>
    </div>
  );
}
export default Specs;
