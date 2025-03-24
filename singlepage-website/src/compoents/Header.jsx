import asmLogo from "../assets/images/logo-asm.svg";
import bcaLogo from "../assets/images/logo-bca.svg";
import c06Logo from "../assets/images/logo-c06.png";
import gtelLogo from "../assets/images/logo-gtel.svg";


const Header = () => {
  return (
    <header className="d-flex bg-white p-4">
      <div className="col d-flex flex-row align-items-end justify-content-start gap-2">
        <img src={bcaLogo} alt="BCA Logo" className="img-fluid  h-25" />
        <img src={c06Logo} alt="C06 Logo" className="img-fluid h-25" />
        <img src={gtelLogo} alt="GTEL Logo" className="img-fluid h-25" />
      </div>

      <div className="col text-center d-flex flex-column align-items-center justify-content-center h-100">
        <img src={asmLogo} alt="ASM Logo" className="h-100"/>
        <a href="https://asmbca.vn">https://asmbca.vn</a>
      </div>

      <div className="col" />
    </header>
  );
};

export default Header;
