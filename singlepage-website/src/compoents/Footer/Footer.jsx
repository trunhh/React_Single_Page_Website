import React from "react";
import asmLogo from "../../assets/images/logo-asm.svg";
import bcaLogo from "../../assets/images/logo-bca.svg";
import c06Logo from "../../assets/images/logo-c06.png";
import gtelLogo from "../../assets/images/logo-gtel.svg";
import {
    FooterContainer,
    FooterLogo,
    SideContainer,
    CenterContainer,
    ExternalLink

} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
        <SideContainer>
            


        </SideContainer>
        <CenterContainer>
            <FooterLogo src={asmLogo}></FooterLogo>
            <ExternalLink href="https://asmbca.vn">
                Dịch vụ đăng ký lưu trú ASM <br/>
                Bộ công an
            </ExternalLink>

        </CenterContainer>
        <SideContainer></SideContainer>
        
        
    </FooterContainer>
  );
};

export default Footer;
