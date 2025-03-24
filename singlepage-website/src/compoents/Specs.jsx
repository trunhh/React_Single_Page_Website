const SpecDetail = (product) => {
  return (
      <div className="d-flex mx-auto w-5 gap-3 px-3 align-items-stretch">
        <img src={product.img} className="rounded object-fit-cover w-3 align-self-stretch mh-100"/>
        
        <div className="flex-shrink-0 flex-growth-1 w-4">
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
        </div>
      </div>
  );
};

const Specs = ({products}) => {
  return (
    <div className="d-flex flex-column text-light bg-primary bg-gradient">
      <h2 className="d-flex align-items-center mx-auto text-uppercase fw-bold text-center h-2">
        Thông số kỹ thuật
      </h2>
      <div className="d-flex align-items-center p-3 overflow-auto h-100 gap-5" style={{overflowX: "auto"}}>
        {products.map((product, index) => (
          <SpecDetail key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
export default Specs;
