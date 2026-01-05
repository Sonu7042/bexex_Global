import { useState } from "react";
import { login } from "../api/authApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./auth.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  const card = state?.card;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/innerServicePage", {
        replace: true,
        state: { card },
      });

      if (card?.downloadPdf) {
        window.open(card.downloadPdf, "_blank");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-wrapper full-layout">
      {/* Left illustration (same as signup) */}
      <div className="auth-illustration">
        <div className="illustration-box">
          <h3>Welcome back</h3>
          <p>Access your projects and accounts securely.</p>
        </div>
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
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
