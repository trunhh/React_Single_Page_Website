import styled from "styled-components";


export const ProductContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ProductContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
  align-items: center;
`;

export const ProductTitle = styled.div`
  color: #fe6202;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 32px;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const ProductInfoContainer = styled.div`
  height: 360px;
  width: 800px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ProductImage = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;

`

export const ProductDesc = styled.div`
position: absolute;
  width: 25%;
  color: #fe6202;
  display: flex;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

