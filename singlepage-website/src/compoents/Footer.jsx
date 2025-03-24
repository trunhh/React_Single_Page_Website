import asmLogo from "../assets/images/logo-asm.svg";
import saomaiLogo from "../assets/images/logo-saomai.png";
const Footer = () => {
  return (
    <footer className="d-flex bg-white p-4">
      <div className="col d-flex flex-row align-items-start justify-content-end h-100">
      <img src={saomaiLogo} alt="Sao mai Logo" className="h-50" />
      </div>

      <div className="col text-center d-flex flex-column align-items-center justify-content-center h-100">
        <div className="h-100">
          <img src={asmLogo} alt="ASM Logo" className="w-auto h-100" />
        </div>
        <div className="text-uppercase fw-bold text-secondary">
          Dịch vụ đăng ký lưu trú ASM <br />
          Bộ công an
        </div>
      </div>

      <div className="col" />
    </footer>
  );
};

export default Footer;
