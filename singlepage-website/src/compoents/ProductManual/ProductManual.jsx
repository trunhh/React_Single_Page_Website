import React from "react";
import DownloadIcon from "../../assets/images/download-icon.png";
import PrinterImg from "../../assets/images/printer-img.png";

import {
    ManualContainer,
    PreviewContainer,
    PreviewTitle,
    DownloadContainer,
    DownloadSubContainer,
    DownloadTitle,
    WhiteButton,
    DownloadLogo,
    ButtonTextContainer,
    ProductImage
} from "./ProductManual.element";

function ProductManual() {
  return (
    <ManualContainer>
        <PreviewContainer>
            <PreviewTitle>
                Công nghệ in nhiệt<br/>
                vượt trội
                
            </PreviewTitle>


        </PreviewContainer>
        <DownloadContainer>
            <DownloadSubContainer>
            <DownloadTitle>
                Tài liệu hướng dẫn sử dụng
            </DownloadTitle>
            <WhiteButton>
                <DownloadLogo src={DownloadIcon} />
                <ButtonTextContainer>Download</ButtonTextContainer>
                
            </WhiteButton>

            </DownloadSubContainer>
            <ProductImage src={PrinterImg} />
            

        </DownloadContainer>

    </ManualContainer>
    

  );
}
export default ProductManual;
