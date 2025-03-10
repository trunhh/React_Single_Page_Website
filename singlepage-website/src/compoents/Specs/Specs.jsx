import React from "react";





import SpecDetail from "../SpecDetails/SpecDetail";

import {
    SpecsContainer,
    SpecsContentContainer,
    SpecsTitle
} from "./Specs.element";

import { sampleProd } from "../Samples";

function Specs() {
  return (
    <SpecsContainer>
      <SpecsTitle>Thông số kỹ thuật</SpecsTitle>
      <SpecsContentContainer>
        <SpecDetail {...sampleProd} />
        <SpecDetail {...sampleProd} />


      </SpecsContentContainer>
    </SpecsContainer>
    

  );
}
export default Specs;
