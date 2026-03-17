import { useState } from "react";
import "./menu.css";

function MenuPopup() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  return (
    <>
      {/* 3 DOTS */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ⋮
      </div>

      {/* MENU */}
      {open && (
        <div className="menu-box">
          <p onClick={() => setActive("info")}>Info</p>
          <p onClick={() => setActive("report")}>Report Abuse</p>
          <p onClick={() => setActive("legal")}>Legal Notices</p>
          <p onClick={() => setActive("login")}>Sign In</p>
        </div>
      )}

      {/* ================= INFO ================= */}
      {active === "info" && (
        <div className="modal">
          <div className="modal-box scroll">
            <h3>
              App Info
              <span className="close" onClick={() => setActive("")}>✖</span>
            </h3>
            <hr />

            <p className="info-text">
              PopX is a modern UI application built using React JS.
            </p>

            <ul className="info-list">
              <li>Version: 1.0.0</li>
              <li>Framework: React JS</li>
              <li>Design: Mobile-first</li>
              <li>Developer: Your Name</li>
            </ul>

            <button className="primary full" onClick={() => setActive("")}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= REPORT ================= */}
      {active === "report" && (
        <div className="modal">
          <div className="modal-box scroll">
            <h3>
              Report Abuse
              <span className="close" onClick={() => setActive("")}>✖</span>
            </h3>
            <hr />

            <p className="info-text">
              If you feel this content violates terms, report it below.
            </p>

            <label>Your Email *</label>
            <input />

            <label>Your Name *</label>
            <input />

            <label>Why are you reporting?</label>

            <div className="radio-group">
              <label><input type="radio" name="r" /> Defamation</label>
              <label><input type="radio" name="r" /> Trademark</label>
              <label><input type="radio" name="r" /> Offensive</label>
              <label><input type="radio" name="r" /> Hate Content</label>
              <label><input type="radio" name="r" /> Explicit</label>
              <label><input type="radio" name="r" /> Other</label>
            </div>

            <label>Description</label>
            <textarea />

            <div className="modal-btns">
              <button className="cancel" onClick={() => setActive("")}>
                Cancel
              </button>
              <button className="primary">
                Report abuse
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= LEGAL ================= */}
      {active === "legal" && (
        <div className="modal">
          <div className="modal-box scroll">
            <h3>
              Legal Notices
              <span className="close" onClick={() => setActive("")}>✖</span>
            </h3>
            <hr />

            <p className="link">Terms of Use</p>

            <p className="info-text">
              © 2016-2026 PopX. All rights reserved.
            </p>

            <p className="info-text">
              PopX logo and trademarks belong to their respective owners.
            </p>

            <p className="info-text">
              Third-party licenses:
            </p>

            <p className="link">
              https://www.popx.com/legal
            </p>

            <button className="primary full" onClick={() => setActive("")}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuPopup;