import styled from "styled-components";

export const ManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(to right, #cc915c, #fff6b6);
`;

export const PreviewTitle = styled.div`
  color: black;
  height: 20%;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  text-align: center;
  align-items: center;
`;


export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 800px;
  background-color: white;
  margin-bottom: -196px;
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
  text-shadow: 2px 2px #a68577;
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

export const ProductImage = styled.img`
    width: 15%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
`;

