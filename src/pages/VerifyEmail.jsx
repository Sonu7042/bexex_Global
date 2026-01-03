import { useState } from "react";
import { verifyEmail } from "../api/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import './auth.css'


export default function VerifyEmail() {
  const [code, setCode] = useState("");
 const [loading, setLoading]= useState(false)

  const navigate = useNavigate();
  const {state} = useLocation();

  const email = state?.email;
 const card = state?.card;
//  console.log(card, "verifyEmail")

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      await verifyEmail({ email, code });
      alert("Email verified successfully");
      navigate("/innerServicePage",{
        replace: true,
        state: {card}
      } 
    );

      if(card?.downloadPdf) {
      window.open(card.downloadPdf, "_blank");
    }
      // navigate("/login",  {state: {card}})
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
      <button type="submit" disabled={loading}>
        {loading ? "Verifying..." : "Verify"}
      </button>
    </form>
    </div>
  );
}
