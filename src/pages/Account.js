import { useNavigate } from "react-router-dom";
import MenuPopup from "../components/MenuPopup";

function Account() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <MenuPopup />

      <h3>Account Settings</h3>

      <div className="profile">
        <div className="img-box">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="profile-img"
          />
          <span className="camera">📷</span>
        </div>

        <div>
          <h4>Marry Doe</h4>
          <p className="email">marry@gmail.com</p>
        </div>
      </div>

      <p className="desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr.
      </p>

      <button className="back-bottom" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}

export default Account;