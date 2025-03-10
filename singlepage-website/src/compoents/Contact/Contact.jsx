import React from "react";
import LogoGtel from "../../assets/images/logo-gtel.svg";
import QrSample from "../../assets/images/qr-sample.svg";
import {
    ContactContainer,
    TitleContainer,
    TitleText,
    RedCircle,
    ContactInfoContainer,
    ContactInfoContainer1,
    ContactInfoSection1,
    ContactInfoSection2,
    TitleText1,
    ContactLogo,
    ExtraRect,
    QrCode
} from "./Contact.element";

import PhoneNumber from "../PhoneNumber/PhoneNumber";

const contact1 = {
  name: "Bộ phận mua POS, bảo hành, bảo trì POS:",
  number: "0862 567 385"
}

const contact2 = {
  name: "Bộ phận chăm sóc dịch vụ ASM:",
  number: "1900.0251"
}

function Contact() {
  return (
    <ContactContainer>
        <ExtraRect />
        
        <ContactInfoContainer>
        <TitleContainer>
          <RedCircle />
          <TitleText>Thông tin liên hệ</TitleText>
        </TitleContainer>
            <ContactInfoContainer1>
              <ContactInfoSection1>
                <TitleText1>Nếu có bất kì thắc mắc gì hãy liên hệ với chúng tôi qua các số điện thoại sau:</TitleText1>
                <PhoneNumber {...contact1}/>
                <PhoneNumber {...contact2}/>
              </ContactInfoSection1>
              <ContactInfoSection2>
                <TitleText1>Quét mã QR để xem hướng dẫn:</TitleText1>
                <QrCode src= {QrSample} />
              </ContactInfoSection2>
            </ContactInfoContainer1>

            <ContactLogo src={LogoGtel} />


        </ContactInfoContainer>
    </ContactContainer>


  );
}
export default Contact;
