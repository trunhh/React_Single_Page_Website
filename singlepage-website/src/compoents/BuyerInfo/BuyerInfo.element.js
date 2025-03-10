import styled, {keyframes} from "styled-components";
import { FloatingLabel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

export const StyledFloatingLabel = styled(FloatingLabel)`
  position: relative;

  label {
    color: #a6a6a6 !important;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value=""]) ~ label {
    margin-top: -1rem;
  }
`;


export const StyledInput = styled(Form.Control)`
   border-color: #a6a6a6 !important;
  border-radius: 0 !important;
`;

export const StyledSelect = styled(Form.Select)`
  border-color: #a6a6a6 !important;
  border-radius: 0 !important;
`;

export const StyledCheck = styled(Form.Check)`
  input {
    border-radius: 0 !important;
    border-color: #a6a6a6;
  }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-3px); }
`;

export const ErrorText = styled.div`
  color: red;
  font-weight: bold;
  animation: ${shake} 0.5s ease-in-out 2; /* Runs twice, then stops */
  margin-top: 5px;
`;