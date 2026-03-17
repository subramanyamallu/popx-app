import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/InputField";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful ✅");
      navigate("/account");
    } else {
      alert("Enter email & password");
    }
  };

  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>

      <InputField
        label="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn" onClick={handleLogin}>
        Login
      </button>

      {/* NEW BUTTON */}
      <button
        className="btn-outline"
        onClick={() => navigate("/register")}
      >
        Create New Account
      </button>

      <button className="back-bottom" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
    </div>
  );
}

export default Login;