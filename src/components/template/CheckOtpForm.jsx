import { checkOtp } from "src/services/Auth";
import { setCookie } from "src/utils/cookie";

import styles from "src/components/template/CheckOtpForm.module.css"

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  
  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile,code);
    
    if (response) {
    setCookie(response.data);
    }
    if (error) console.log(error.message);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h3>ورود به حساب کاربری</h3>
      <span className={styles.text}>
        کد ارسال شده به شماره «{mobile}» را وارد کنید.
      </span>{" "}
      <br />
      <label htmlFor="input">کد تایید را وارد کنید :</label>
      <input
        type="text"
        id="input"
        placeholder="کد را وارد کنید..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div>
        <button type="submit">ورود</button>
        <button
          onClick={() => setStep(1)}
          className={styles.backButton}
        >
          تغییر شماره موبایل
        </button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
