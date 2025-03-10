import { useState } from "react";
import "./FloatingLabelInput.css";

function FloatingLabelInput({ label, ...props }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`floating-label ${focused || props.value ? "active" : ""}`}>
      <input
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <label>{label}</label>
    </div>
  );
}

export default FloatingLabelInput
