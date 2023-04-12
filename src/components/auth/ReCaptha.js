import React, { useRef, useState } from "react";
import { ReCAPTCHA } from "react-google-recaptcha";

export default function ReCAPT() {
  const captchaRef = useRef();
  const [text, setText] = useState("");
  return (
    <div className="App">
    
      <h2>{text}</h2>
      <ReCAPTCHA
        ref={captchaRef}
        sitekey="6LfHH6IgAAAAALhz3rRxoFbMd31oxbgYYuv_pBpu"
        onChange={(value) => {
          setText(`There you go!!!!!!!!!!! ${value}`);
        }}
        size="invisible"
      />
      <button className="btn pink lighten-1 z-depth-0"
        onClick={(event) => {
          setText("yes. it was a click");
          captchaRef.current.execute();
        }}
      >
        Sign Up
      </button>
    </div>
  );
}


