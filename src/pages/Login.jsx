import { useState } from "react";
import { login } from "../api/authApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./auth.css";
import bexexLogoLogin from "../assets/images/Bexexlogo.png";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();
  const card = state?.card;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);

      if(res.data.success == false){
        setError(res.data?.message || "Verification failed");
        return; 
      }

      navigate("/innerServicePage", {
        replace: true,
        state: { card },
      });

      if (card?.downloadPdf) {
        window.open(card.downloadPdf, "_blank");
      }
    } catch (err) {
        setError(err.response?.data?.message || "Server error. Try again.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper full-layout">
      {/* Left illustration (same as signup) */}
      <div className="auth-illustration">
        <img className="logoLogin" src={bexexLogoLogin} alt="img" />
      </div>

      {/* Right content */}
      <div className="auth-content">
        <div className="auth-header">
          <h1>Log in to your account</h1>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/signup" state={{ card }}>
              Signup
            </Link>
          </p>
        </div>

        {/* Inputs are same as your current code */}
        <form className="loginForm" onSubmit={handleSubmit}>
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

             {/* Error paragraph right after T&C line */}

             {/* Error paragraph right after T&C line */}
          <p className="error-text">{error}</p>

          <button className="loginForm-submit" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
