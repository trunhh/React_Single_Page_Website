import PrinterImg from "../assets/images/printer-img.png";
import '../styling/shape.css';
import { FaArrowsAlt,FaDownload  } from "react-icons/fa";

const ProductManual = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <h2 className="d-flex align-items-center text-uppercase fw-bold text-center h-2">
        Công nghệ in nhiệt vượt trội
      </h2>

      <div className="d-flex h-4">
        <div className="d-flex justify-content-end w-4 py-5">
          <img src={PrinterImg} 
              className="rounded-circle h-100 border border-4 border-primary border-opacity-25"
                style={{"--bs-border-style": "dashed"}}
          />
        </div>
        
        <div className="w-4 d-flex flex-column justify-content-center py-3 gap-4 w-4">
          <div className="d-flex align-items-start gap-1">
            <div className="d-flex bg-secondary p-2 bubble">
              <FaArrowsAlt color="white"/>
            </div>
            <p>Tốc độ in <b>18 dòng/s</b>, đầu in bền bỉ</p>
          </div>

          <div className="d-flex align-items-start gap-1 ps-4">
            <div className="d-flex bg-primary p-2 bubble">
              <FaArrowsAlt color="white"/>
            </div>
            <p>Tuổi thọ sử dụng lên tới <b>10 năm</b></p>
          </div>

          <div className="d-flex align-items-start gap-1 ps-4">
            <div className="d-flex bg-primary p-2 bubble">
              <FaArrowsAlt color="white"/>
            </div>
            <p><b>Dễ thao tác</b> tháo, lắp cuộn giấy in</p>
          </div>

          <div className="d-flex align-items-start gap-1">
            <div className="d-flex bg-secondary p-2 bubble">
              <FaArrowsAlt color="white"/>
            </div>
            <p>Hỗ trợ cuộn giấy in có kích thước <b>58mm/40mm</b></p>
          </div>
        </div>
        
      </div>


      <div 
        className="position-relative w-100 h-3 bg-gradiennt" 
        style={{
          backgroundImage: "linear-gradient(to right, #cc915c, #fff6b6)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 50%",
          backgroundPosition: "bottom right",
        }}
      >
        <div
          className="d-flex align-items-center h-100 bg-secondary bg-gradient-horizontal"
          style={{clipPath: "polygon(0 0, 50% 0, 57.5% 25%, 67.5% 25%, 75% 0, 100% 0, 100% 100%, 80% 100%, 67.5% 70%, 57.5% 70%, 45% 100%, 0 100%)"}}
        >
          <div className="d-flex flex-column align-items-end w-50">
            <div
              className="text-white text-uppercase fw-bold fst-italic text-end fs-1"
              style={{textShadow: ".1rem .1rem #a68577"}}
            >
              Tài liệu hướng dẫn sử dụng
            </div>

            <button className="btn bg-white text-black fw-bold text-uppercase d-flex align-items-center mt-1 px-3 py-2 gap-1 rounded-pill">
              <FaDownload/>
              <div className="text-center">Download</div>
            </button>
          </div>

            
        </div>
        <img
            src={PrinterImg}
            alt="Product"
            className="position-absolute top-0 start-50 w-25 h-100 object-fit-contain"
          />
      </div>
    </div>
  );
}

export default ProductManual;
