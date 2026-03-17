import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <InputField label="Full Name*" />
      <InputField label="Phone number*" />
      <InputField label="Email address*" />
      <InputField label="Password*" type="password" />
      <InputField label="Company name" />

      <div className="radio-group">
        <p>Are you an Agency?*</p>
        <label>
          <input type="radio" name="agency" /> Yes
        </label>
        <label>
          <input type="radio" name="agency" /> No
        </label>
      </div>

      <button className="btn" onClick={() => navigate("/account")}>
        Create Account
      </button>

      <button className="back-bottom" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
    </div>
  );
}

export default Register;