import React from 'react'

import {
  SpecDetailContainer,
  SpecsImage,
  SpecTextContainer,
  SpecText

} from "./SpecDetail.element";

const SpecDetail = ({
  img,
  os,
  cpu,
  memory,
  connectivity,
  display,
  camera,
  positioning,
  reader,
  printer,
  battery,
  material,
  humidity,
  heat,
  size,
  certification
}) => {
  return (
    <SpecDetailContainer>
      <SpecsImage src={img} />
      <SpecTextContainer>
        <SpecText><b>Hệ điều hành: </b>{os}</SpecText>
        <SpecText><b>CPU: </b>{cpu}</SpecText>
        <SpecText><b>Bộ nhớ: </b>{memory}</SpecText>
        <SpecText><b>Kết nối: </b>{connectivity}</SpecText>
        <SpecText><b>Màn hình hiển thị: </b>{display}</SpecText>
        <SpecText><b>Camera sau: </b>{camera}</SpecText>
        <SpecText><b>Định vị: </b>{positioning}</SpecText>
        <SpecText><b>Hỗ trợ đọc: </b>{reader}</SpecText>
        <SpecText><b>Máy in: </b>{printer}</SpecText>
        <SpecText><b>Pin: </b>{battery}</SpecText>
        <SpecText><b>Vật liệu cấu tạo: </b>{material}</SpecText>
        <SpecText><b>Điều kiện môi trường: </b>{humidity}</SpecText>
        <SpecText><b>Nhiệt độ: </b>{heat}</SpecText>
        <SpecText><b>Kích thước, trọng lượng: </b>{size}</SpecText>
        <SpecText><b>Chứng chỉ: </b>{certification}</SpecText>
      </SpecTextContainer>
    </SpecDetailContainer>
    
    
  );
};

export default SpecDetail