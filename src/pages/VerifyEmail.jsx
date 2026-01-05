import { useState } from "react";
import { verifyEmail } from "../api/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import "./auth.css";

export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email;
  const card = state?.card;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const res = await verifyEmail({ email, code });
      localStorage.setItem("token", res.data.token);
      alert("Email verified successfully");
      navigate("/innerServicePage", {
        replace: true,
        state: { card },
      });

      if (card?.downloadPdf) {
        window.open(card.downloadPdf, "_blank");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Verification failed");
    }
  };

  return (
    <div className="auth-wrapper full-layout">
      {/* Left illustration side */}
      <div className="auth-illustration">
        <div className="illustration-box">
          <h3>Verify your email</h3>
          <p>Enter the OTP sent to your email to continue.</p>
        </div>
      </div>

      {/* Right content side */}
      <div className="auth-content">
        <div className="auth-header">
          <h1>Verify Email</h1>
          <p>Please enter the one-time password you received.</p>
        </div>

        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
}
