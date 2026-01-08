// InnerServicePage.jsx
import "../Css/innerServicePage.css";
import "../pages/auth.css";
import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import LetsConnect from "./LetsConnect";
import { FiDownload } from "react-icons/fi";
import { HeadingComponent } from "./Buttons";
import booksIcon from "../assets/images/service_image/innerServices_booksIcons/books-svgrepo-com.svg";
import certificateicn from "../assets/images/service_image/innerServices_booksIcons/certificate-contract-svgrepo-com.svg";
import freeLearningicon from "../assets/images/service_image/innerServices_booksIcons/free-learning.png";
import { signup, verifyEmail, login } from "../api/authApi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

export default function InnerServicePage() {
  const { state } = useLocation();
  const card = state?.card;
  const navigate = useNavigate();

  const [selectedMedia, setSelectedMedia] = useState(card?.media?.[0]);

  // Auth modal states
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signup'); // 'signup' or 'login'
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  // Signup form state
  const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "" });
  const [signupLoading, setSignupLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [signupError, setSignupError] = useState("");

  // Login form state
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // OTP verify state
  const [code, setCode] = useState("");
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [signupEmail, setSignupEmail] = useState("");

  if (!card) return <p>Data not found</p>;

  // when user clicks download
  const downloadPdfWithAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowAuthModal(true);
      setAuthMode('login'); // Show login by default
      return;
    }
    window.open(card.downloadPdf, "_blank");
  };

  // Signup form handlers
  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    setSignupError("");
  };

  const handleTermsChange = (e) => {
    const checked = e.target.checked;
    setAgree(checked);
    setTermsError("");
    setSignupError("");
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupLoading) return;

    setSignupError("");
    setTermsError("");

    if (!agree) {
      setTermsError("You must agree to the Terms & Conditions.");
      return;
    }

    setSignupLoading(true);
    try {
      const res = await signup(signupForm);
      if (res.data?.success === false) {
        setSignupError(res.data?.message || "Signup failed");
        return;
      }

      // store email for OTP verify and open verify modal
      setSignupEmail(signupForm.email);
      setShowAuthModal(false);
      setShowVerifyModal(true);
      setCode("");
      setVerifyError("");
    } catch (err) {
      setSignupError(err.response?.data?.message || "Server error. Try again.");
    } finally {
      setSignupLoading(false);
    }
  };

  // Login form handlers
  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setLoginError("");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (loginLoading) return;
    
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await login(loginForm);
      
      if (res.data?.success === false) {
        setLoginError(res.data?.message || "Login failed");
        return;
      }

      // Save token
      localStorage.setItem("token", res.data.token);

      // Close modal and download PDF
      setShowAuthModal(false);
      
      if (card?.downloadPdf) {
        window.open(card.downloadPdf, "_blank");
      }

      // Refresh page state
      navigate("/innerServicePage", {
        replace: true,
        state: { card },
      });
    } catch (err) {
      setLoginError(err.response?.data?.message || "Server error. Try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Switch auth mode
  const switchToLogin = () => {
    setAuthMode('login');
    setSignupError("");
    setTermsError("");
    setLoginError("");
  };

  const switchToSignup = () => {
    setAuthMode('signup');
    setSignupError("");
    setTermsError("");
    setLoginError("");
  };

  // verify OTP handlers
  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setVerifyError("");
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    if (verifyLoading) return;

    setVerifyError("");
    setVerifyLoading(true);

    try {
      const res = await verifyEmail({ email: signupEmail, code });
      if (res.data?.success === false) {
        setVerifyError(res.data?.message || "Verification failed");
        return;
      }

      // save token if API returns it
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      // close verify modal
      setShowVerifyModal(false);

      // open PDF after verification
      if (card?.downloadPdf) {
        window.open(card.downloadPdf, "_blank");
      }

      // refresh same page
      navigate("/innerServicePage", {
        replace: true,
        state: { card },
      });
    } catch (err) {
      setVerifyError(err.response?.data?.message || "Server error. Try again.");
    } finally {
      setVerifyLoading(false);
    }
  };

  return (
    <>
      <section className="px-4 md:px-16 lg:px-12 pt-[2.875rem]">
        <div className="heading-portion">
          <HeadingComponent text="Service" marginTop="0" paddingBottom="0" />
        </div>

        <div className="fs-page">
          {/* LEFT COLUMN */}
          <div className="fs-left">
            {/* GALLERY */}
            <div className="gallery-container">
              <div className="gallery-flex">
                <div className="thumb-column">
                  {card.media.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedMedia(item)}
                      className={`thumb-btn ${
                        selectedMedia?.id === item.id ? "thumb-active" : ""
                      }`}
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.url}
                          alt={item.title}
                          className="thumb-img"
                        />
                      ) : (
                        <div className="video-thumb">
                          <img
                            src={`https://img.youtube.com/vi/${
                              item.url.split("/embed/")[1]?.split("?")[0]
                            }/hqdefault.jpg`}
                            alt="Video thumbnail"
                          />
                          <span className="video-play-icon">
                            <Play size={28} />
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="media-wrapper">
                  <div className="media-card">
                    {selectedMedia?.type === "image" ? (
                      <img
                        src={selectedMedia.url}
                        alt={selectedMedia.title}
                        className="media-img"
                      />
                    ) : (
                      <div className="video-container">
                        <iframe
                          src={selectedMedia.url}
                          title={selectedMedia.title}
                          frameBorder="0"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* DOWNLOAD CARD */}
            <div className="fs-iso-card">
              <div className="fs-iso-text">
                <h3 className="fs-iso-title">{card.downlaodheadingText}</h3>
                <p className="fs-iso-desc">{card.downlaodheadingSubText}</p>

                <div
                  className="download-button"
                  onClick={downloadPdfWithAuth}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && downloadPdfWithAuth()
                  }
                >
                  <div className="download-btn-hover">Download</div>
                  <div className="circle-hover">
                    <FiDownload />
                  </div>
                </div>
              </div>

              <div className="fs-iso-flyer-wrapper">
                <img
                  src={card.downlaodheadingImg}
                  alt="Download preview"
                  className="fs-iso-flyer"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="fs-right">
            <header className="fs-header">
              <h1 className="fs-why-title applyfont">
                {card.headingParts.map((part, index) => (
                  <span key={index} className={part.highlight ? "itly" : ""}>
                    {part.text}
                  </span>
                ))}
              </h1>

              <div className="fs-why-text">
                {card.paragrapgh.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </header>

            <section className="fs-cover-section">
              <h2 className="fs-cover-title">{card.secondSubHeading}</h2>
              <ul className="fs-cover-list">
                {card.secondListItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="fs-cover-section">
              <h2 className="fs-cover-title">{card.subHeading}</h2>
              <ul className="fs-cover-list-ticked">
                {card.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="fs-badges">
              <div className="fs-badge">
                <span className="fs-badge-icon">
                  <img width={"30px"} src={booksIcon} alt="icon" />
                </span>
                <span>Training Material (PDF Format)</span>
              </div>
              <div className="fs-badge">
                <span className="fs-badge-icon">
                  <img width={"30px"} src={certificateicn} alt="icon" />
                </span>
                <span>Training Certificate</span>
              </div>
              <div className="fs-badge">
                <span className="fs-badge-icon">
                  <img width={"40px"} src={freeLearningicon} alt="icon" />
                </span>
                <span>Free Learning Resources</span>
              </div>
            </div>
          </div>
        </div>

        {/* SINGLE AUTH MODAL - SWITCHES BETWEEN LOGIN/SIGNUP */}
        {showAuthModal && (
          <div className="auth-overlay" onClick={() => setShowAuthModal(false)}>
            <div
              className="auth-page"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="auth-content">
                <button
                  type="button"
                  className="auth-close-btn"
                  onClick={() => setShowAuthModal(false)}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="auth-header">
                  <h1>{authMode === 'signup' ? 'Create an account' : 'Welcome back'}</h1>
                  <p>
                    {authMode === 'signup' 
                      ? 'Already have an account? '
                      : "Don't have an account? "
                    }
                    <button 
                      type="button"
                      className="auth-switch-link"
                      onClick={authMode === 'signup' ? switchToLogin : switchToSignup}
                    >
                      {authMode === 'signup' ? 'Log in' : 'Sign up'}
                    </button>
                  </p>
                </div>

                {authMode === 'signup' ? (
                  // SIGNUP FORM
                  <form className="loginForm" onSubmit={handleSignupSubmit}>
                    <input
                      name="name"
                      required
                      placeholder="Full Name"
                      value={signupForm.name}
                      onChange={handleSignupChange}
                    />
                    <input
                      name="email"
                      required
                      placeholder="Email"
                      value={signupForm.email}
                      onChange={handleSignupChange}
                    />
                    <input
                      name="password"
                      required
                      type="password"
                      placeholder="Enter Your Password"
                      value={signupForm.password}
                      onChange={handleSignupChange}
                    />

                    <div className="terms-row">
                      <label className="imputTick">
                        <input
                          type="checkbox"
                          checked={agree}
                          onChange={handleTermsChange}
                        />
                        I agree to the &nbsp;
                        <span className="terms-link">Term & Conditions</span>
                      </label>
                    </div>

                    <p className="error-text">
                      {signupError || termsError}
                    </p>

                    <button
                      className="loginForm-submit"
                      type="submit"
                      disabled={signupLoading || !agree}
                    >
                      {signupLoading ? "Signing up..." : "Create account"}
                    </button>

                    <div className="auth-divider">or register with</div>

                    <div className="social-row">
                      <button type="button" className="social-btn google-btn">
                        <span className="social-icon">
                          <FcGoogle />
                        </span>
                        Google
                      </button>
                      <button type="button" className="social-btn facebook-btn">
                        <span className="social-icon">
                          <SiFacebook />
                        </span>
                        Facebook
                      </button>
                    </div>
                  </form>
                ) : (
                  // LOGIN FORM
                  <form className="loginForm" onSubmit={handleLoginSubmit}>
                    <input
                      name="email"
                      required
                      placeholder="Email"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                    />
                    <input
                      name="password"
                      required
                      type="password"
                      placeholder="Enter Your Password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                    />

                    <p className="error-text">{loginError}</p>

                    <button
                      className="loginForm-submit"
                      type="submit"
                      disabled={loginLoading}
                    >
                      {loginLoading ? "Logging in..." : "Log in"}
                    </button>

                    <div className="auth-divider">or continue with</div>

                    <div className="social-row">
                      <button type="button" className="social-btn google-btn">
                        <span className="social-icon">
                          <FcGoogle />
                        </span>
                        Google
                      </button>
                      <button type="button" className="social-btn facebook-btn">
                        <span className="social-icon">
                          <SiFacebook />
                        </span>
                        Facebook
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* VERIFY OTP MODAL */}
        {showVerifyModal && (
          <div className="auth-overlay" onClick={() => setShowVerifyModal(false)}>
            <div
              className="auth-page"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="auth-content">
                <button
                  type="button"
                  className="auth-close-btn"
                  onClick={() => setShowVerifyModal(false)}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="auth-header">
                  <h1>Verify your email</h1>
                  <p>We have sent an OTP to <strong>{signupEmail}</strong></p>
                </div>

                <form className="loginForm" onSubmit={handleVerifySubmit}>
                  <input
                    placeholder="Enter OTP"
                    value={code}
                    onChange={handleCodeChange}
                  />

                  <p className="error-text">{verifyError}</p>

                  <button
                    className="loginForm-submit"
                    type="submit"
                    disabled={verifyLoading}
                  >
                    {verifyLoading ? "Verifying..." : "Verify"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>

      <LetsConnect />
      <Footer />
    </>
  );
}
