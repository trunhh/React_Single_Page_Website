import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee1cf;
`;

export const ExtraRect = styled.div`
  background-image: linear-gradient( #ff9831, #ff5a73);
  height: 480px;
  width: 256px;
  margin-right: -32px;
  margin-top: -64px;
`


  export const ContactInfoContainer = styled.div`
    height: 480px;
    width: 640px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    margin-left: -32px;
    padding: 24px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `;

  export const ContactInfoContainer1 = styled.div`
    display: flex;
    height: 256px;
    background-color: white;
    gap: 80px;
  `;

export const ContactInfoSection1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 8px;
`;

export const ContactInfoSection2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 8px;
`;



export const DownloadContainer = styled.div`
  clip-path: polygon(0 0, 50% 0, 60% 25%, 75% 25%, 85% 0, 100% 0, 100% 100%, 90% 100%, 75% 70%, 60% 70%, 45% 100%, 0 100%);
  background-image: linear-gradient(to right, #fe6202, #ffd553);
  display: flex;
  height: 400px;
  overflow: visible;
`;

export const DownloadSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  padding-left: 240px;
`;

export const DownloadTitle = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 192px;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
`;

export const DownloadLogo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export const WhiteButton = styled.button`
  margin-top: 32px;
  width: 192px;
  height: 48px;
  background-color: white;
  color: black;
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  text-align: right;

  padding-left: 8px;

  &:hover {
    background-color: #f7f7f7;
  }

  &:active {
    background-color: #eee;
  }
`;

export const ButtonTextContainer = styled.div`
  flex: 1;
  text-align: center;
`;

export const ContactLogo = styled.img`
    width: auto;
    margin: 16px;
    height: 128px;
    object-fit: contain;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
`

export const RedCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ff5a73;
`

export const TitleText = styled.div`
  color: black;
  background-color: white;
  height: 32px;
  margin-left: -16px;
  margin-top: 16px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;

`

export const TitleText1 = styled.div`
  color: #ff7386;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 32px;
`

export const QrCode = styled.img`
  height: 128px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`

