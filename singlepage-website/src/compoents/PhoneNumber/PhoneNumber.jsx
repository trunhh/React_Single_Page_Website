import React from 'react'
import {
  PhoneNumContainer,
  PhoneIconCircle,
  PhoneIcon,
  ContactTextContainer,
  ContactNameText,
  PhoneText
} from "./PhoneNumber.element";

const PhoneNumber = ({
  name,
  number
}) => {
  return (
    <PhoneNumContainer>
      <PhoneIconCircle>
        <PhoneIcon />

      </PhoneIconCircle>

      <ContactTextContainer>
        <ContactNameText>{name}</ContactNameText>
        <PhoneText>{number}</PhoneText>
      </ContactTextContainer>
    </PhoneNumContainer>
    
  );
};

export default PhoneNumber