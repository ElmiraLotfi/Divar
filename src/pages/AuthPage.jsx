import { useState } from "react";

import CheckOtpForm from "../components/template/CheckOtpForm"
import SendOtpForm from "../components/template/SendOtpForm"

function AuthPage() {
  const [step,setStep]=useState(2);
  const [mobile,setMobile]=useState("");
  const [stecodep,setCode]=useState("");
  
  return (
    <div>
     {step === 1 && <SendOtpForm/>}
     {step === 2 && <CheckOtpForm/>}
    </div>
  )
}

export default AuthPage
