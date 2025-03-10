import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavbarContainer,


  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,

  CartButton,
  CartIcon
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Sản phẩm</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Thông số kỹ thuật</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Chi tiết sản phẩm</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Liên hệ</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Đối tác</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Dịch vụ quản lý lưu trú ASM</NavLinks>
              </NavItem>
              <CartButton onClick={() => navigate("/check-out")}>
                <CartIcon/>
              </CartButton>
              {/* <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
