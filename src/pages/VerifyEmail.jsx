import { useState } from "react";
import { verifyEmail } from "../api/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import "./auth.css";
import bexexLogoLogin from "../assets/images/Bexexlogo.png";


export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email;
  const card = state?.card;



  const handleChange = (e) => {
    setCode(e.target.value);
    setError("");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    try {
      const res = await verifyEmail({ email, code });
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
      {/* Left illustration side */}
      <div className="auth-illustration">
        <img className="logoLogin" src={bexexLogoLogin} alt="img" />
      </div>

      {/* Right content side */}
      <div className="auth-content">
        <div className="auth-header">
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            placeholder="Enter OTP"
            value={code}
            onChange={handleChange}
          />

            {/* Error paragraph right after T&C line */}
          <p className="error-text">{error}</p>

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
}
