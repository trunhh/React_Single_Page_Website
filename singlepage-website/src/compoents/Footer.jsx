import React from "react";
import asmLogo from "../assets/images/logo-asm.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-center p-3">
      <img src={asmLogo} alt="ASM Logo" className="img-fluid" style={{ maxWidth: "80px" }} />
      <a href="https://asmbca.vn" className="d-block text-uppercase fw-bold text-orange text-decoration-none">
        Dịch vụ đăng ký lưu trú ASM <br />
        Bộ công an
      </a>
    </footer>
  );
};

export default Footer;
