import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* FIRST BUTTON */}
      <button className="btn" onClick={() => navigate("/register")}>
        Create Account
      </button>

      {/* SECOND BUTTON */}
      <button
        className="btn-secondary"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;