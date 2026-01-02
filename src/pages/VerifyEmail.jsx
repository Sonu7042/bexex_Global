import { useState } from "react";
import { verifyEmail } from "../api/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import './auth.css'


export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail({ email, code });
      alert("Email verified successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Verification failed");
    }
  };

  return (
    <div className="auth-wrapper">
    
    <form className="loginForm" onSubmit={handleSubmit}>
      <h2>Verify Email</h2>
      <input
        placeholder="Enter OTP"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">Verify</button>
    </form>
    </div>
  );
}
