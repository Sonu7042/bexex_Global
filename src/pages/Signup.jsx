import { useState } from "react";
import { signup } from "../api/authApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./auth.css";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // NEW: terms checkbox state + error text
  const [agree, setAgree] = useState(false);
  const [termsError, setTermsError] = useState("");

  const navigate = useNavigate();

  const { state } = useLocation();
  const card = state?.card;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTermsChange = (e) => {
    const checked = e.target.checked;
    setAgree(checked);

    // clear error when user checks the box
    if (checked) {
      setTermsError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // keep your logic & API, just guard on terms
    if (!agree) {
      setTermsError("You must agree to the Terms & Conditions.");
      return;
    }

    setLoading(true);

    try {
      await signup(form);

      alert("Signup successful! Check your email for OTP.");
      navigate(
        "/verify-email",
        {
          replace: true,
          state: {
            email: form.email,
            card: card,
          },
        }
      );
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper full-layout">
      {/* Left illustration section */}
      <div className="auth-illustration">
        {/* You can replace this with an <img> if you have the artwork */}
        <div className="illustration-box">
          <h3>Construction in progress</h3>
          <p>Manage your projects and accounts with Bexex Global Pvt. Ltd.</p>
        </div>
      </div>

      {/* Right form section */}
      <div className="auth-content">
        <div className="auth-header">
          <h1>Create an account</h1>
          <p>
            Already have an account?{" "}
            <Link to="/login" state={{ card }} replace>
              Log in
            </Link>
          </p>
        </div>

        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
          />

          {/* Terms & conditions + error P */}
          <div className="terms-row">
            <label>
              <input
                type="checkbox"
                checked={agree}
                onChange={handleTermsChange}
              />{" "}
              I agree to the{" "}
              <span className="terms-link">Term &amp; Conditions</span>
            </label>
          </div>

          {/* Error paragraph right after T&C line */}
          <p className="error-text">{termsError}</p>

          <button type="submit" disabled={loading || !agree}>
            {loading ? "Signing up..." : "Create account"}
          </button>

          <div className="auth-divider">or register with</div>

          <div className="social-row">
            <button type="button" className="social-btn google-btn">
              Google
            </button>
            <button type="button" className="social-btn facebook-btn">
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
