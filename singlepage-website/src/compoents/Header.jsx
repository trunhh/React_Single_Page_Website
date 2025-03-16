import React from "react";
import asmLogo from "../assets/images/logo-asm.svg";
import bcaLogo from "../assets/images/logo-bca.svg";
import c06Logo from "../assets/images/logo-c06.png";
import gtelLogo from "../assets/images/logo-gtel.svg";


const Header = () => {
  return (
    <header className="d-flex bg-white p-4">

        <div className="col d-none d-sm-flex flex-row align-items-end justify-content-start">
          <img src={bcaLogo} alt="BCA Logo" className="img-fluid  " style={{ width: "4em" }} />
          <img src={c06Logo} alt="C06 Logo" className="img-fluid" style={{ width: "4em" }} />
          <img src={gtelLogo} alt="GTEL Logo" className="img-fluid" style={{ width: "4em" }} />
        </div>

        <div className="col text-center d-flex flex-column align-items-center justify-content-center">
          <img src={asmLogo} alt="ASM Logo" className="img-fluid" style={{ width: "8rem" }} />
          <a href="https://asmbca.vn">
            https://asmbca.vn
          </a>
        </div>

        <div className="col d-none d-sm-flex" />
    </header>
  );
};

export default Header;
