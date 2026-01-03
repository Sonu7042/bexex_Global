import { useState } from "react";
import { login } from "../api/authApi";
import { Link, useLocation, useNavigate} from "react-router-dom";
import './auth.css'

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
 const [loading, setLoading]= useState(false)

  const navigate = useNavigate();


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

    const { state } = useLocation();
    const card = state?.card;
    // console.log(card, "sonu")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loading) return;
    setLoading(true);


    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/innerServicePage", {
        replace: true,
        state: {card}
      }  
    );


      if(card?.downloadPdf) {
      window.open(card.downloadPdf, "_blank");
    }
      
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
    <form className="loginForm" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <p>Don't have an account? <Link to="/signup" state={{card}}>Signup</Link></p>
    </form>
    </div>
  );
}
