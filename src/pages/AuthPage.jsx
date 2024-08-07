import { useState } from "react";

import CheckOtpForm from "src/components/template/CheckOtpForm";
import SendOtpForm from "src/components/template/SendOtpForm";

function AuthPage() {
  const [step,setStep]=useState(1);
  const [mobile,setMobile]=useState("");
  const [code,setCode]=useState("");

  return (
    <div>
     {step === 1 &&
     <SendOtpForm
      setStep={setStep}
      mobile={mobile}
      setMobile={setMobile}
    />}
     {step === 2 && 
     <CheckOtpForm
     code={code}
     setCode={setCode}
     setStep={setStep}
     mobile={mobile}
     />}
    </div>
  )
}

export default AuthPage
