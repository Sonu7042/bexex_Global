import { useState } from "react";
import { signup } from "../api/authApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./auth.css";
import bexexLogoLogin from "../assets/images/Bexexlogo.png";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";


export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  
  // NEW: terms checkbox state + error text
  const [agree, setAgree] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { state } = useLocation();
  const card = state?.card;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
     setError(""); 
  };



  const handleTermsChange = (e) => {
    const checked = e.target.checked;
    setAgree(checked);
    setTermsError("");
    setError("");
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError("");
  setTermsError("");

    // keep your logic & API, just guard on terms
    if (!agree) {
      setTermsError("You must agree to the Terms & Conditions.");
      return;
    }
    setLoading(true);



    try {
        const res = await signup(form);
        if (res.data?.success==false) {
          console.log("fetcing sonu")
        setError(res.data?.message || "Signup failed");
        return; 
       }
  
      // alert("Signup successful! Check your email for OTP.");
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
      setError(err.response?.data?.message || "Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };


  
  return (
    <div className="auth-wrapper full-layout">
      {/* Left illustration section */}
      <div className="auth-illustration">
        <img className="logoLogin" src={bexexLogoLogin} alt="img" />
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
            required
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            required
            type="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
          />

          {/* Terms & conditions + error P */}
          <div className="terms-row">
            <label className="imputTick">
              <input
                type="checkbox"
                checked={agree}
                onChange={handleTermsChange}
              />
              I agree to the &nbsp;<span className="terms-link">Term & Conditions</span>
            </label>
          </div>

          {/* Error paragraph right after T&C line */}
          <p className="error-text">{error}</p>

          <button className="loginForm-submit" type="submit" disabled={loading || !agree}>
            {loading ? "Signing up..." : "Create account"}
          </button>

          <div className="auth-divider">or register with</div>

          <div className="social-row">
            <button type="button" className="social-btn google-btn">
              <span className="social-icon"><FcGoogle /></span>
              Google
            </button>
            <button type="button" className="social-btn facebook-btn">
              <span className="social-icon"><SiFacebook /></span>
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
