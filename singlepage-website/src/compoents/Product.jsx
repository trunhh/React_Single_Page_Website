import Asmpos from "../assets/images/asmpos.jpg";

const Product = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="d-flex align-items-center text-secondary text-uppercase fw-bold text-center h-2">
        Sản phẩm
      </h2>

      <div className="d-flex flex-column bg-white p-4 position-relative shadow-lg m-auto h-4 w-5">
        <img
          src={Asmpos}
          alt="Product"
          className="object-fit-contain w-100 h-100"
        />
        <div className="position-absolute text-uppercase fw-bold w-50 fs-5 text-secondary">
          Khai báo thông tin lưu trú và thông báo lưu trú nhanh chóng đúng quy định
        </div>
      </div>
    </div>
  );
}

export default Product;
