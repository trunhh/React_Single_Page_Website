import styled from "styled-components";
import { FaPhoneSquare } from "react-icons/fa";

export const PhoneNumContainer = styled.div`
    height: 32px;
    margin: 4px;
    display: flex;
    gap: 12px;
    align-items: center;
`

export const PhoneIconCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #ff5a73;
  padding: 8px;
  display: flex;
  align-items: center;
`


export const PhoneIcon = styled(FaPhoneSquare)`
    color: white;
`

export const ContactTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactNameText = styled.div`
    font-weight: bold;
    font-size: 12px;
    overflow: hidden;
`

export const PhoneText = styled.div`
    font-size: 12px;
    overflow: hidden;
`