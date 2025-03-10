import React from "react";
import asmLogo from "../../assets/images/logo-asm.svg";
import bcaLogo from "../../assets/images/logo-bca.svg";
import c06Logo from "../../assets/images/logo-c06.png";
import gtelLogo from "../../assets/images/logo-gtel.svg";
import {
    HeaderContainer,
    HeaderLogo,
    ExtraLogo,
    SideContainer,
    ExtraLogoContainer,
    CenterContainer,
    ExternalLink

} from "./Header.elements";

const Header = () => {
  return (
    <HeaderContainer>
        <SideContainer>
            <ExtraLogoContainer>
                <ExtraLogo src={bcaLogo}/>
                <ExtraLogo src={c06Logo}/>
                <ExtraLogo src={gtelLogo}/>
                
            </ExtraLogoContainer>
            


        </SideContainer>
        <CenterContainer>
            <HeaderLogo src={asmLogo}></HeaderLogo>
            <ExternalLink href="https://asmbca.vn">
                https://asmbca.vn
            </ExternalLink>

        </CenterContainer>
        <SideContainer></SideContainer>
        
        
    </HeaderContainer>
  );
};

export default Header;
