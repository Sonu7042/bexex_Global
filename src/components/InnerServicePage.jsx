// InnerServicePage.jsx
import "../Css/innerServicePage.css";
import "../pages/auth.css";
import React, { useState } from "react";
import { Play } from "lucide-react";
import { X } from "lucide-react"; // <--- ADD THIS
import { useLocation, useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import LetsConnect from "./LetsConnect";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { PiCertificate } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { HeadingComponent } from "./Buttons";
import booksIcon from "../assets/images/service_image/innerServices_booksIcons/books-svgrepo-com.svg";
import certificateicn from "../assets/images/service_image/innerServices_booksIcons/certificate-contract-svgrepo-com.svg";
import freeLearningicon from "../assets/images/service_image/innerServices_booksIcons/free-learning.png";
import { signup } from "../api/authApi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

export default function InnerServicePage() {
  const { state } = useLocation();
  const card = state?.card;
  const navigate = useNavigate();

  const [selectedMedia, setSelectedMedia] = useState(card?.media?.[0]);

  // modal state
  const [showAuthModal, setShowAuthModal] = useState(false);

  // form + auth states
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [error, setError] = useState("");

  if (!card) return <p>Data not found</p>;

  const downloadPdfWithAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowAuthModal(true);
      return;
    }
    window.open(card.downloadPdf, "_blank");
  };

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

    if (!agree) {
      setTermsError("You must agree to the Terms & Conditions.");
      return;
    }

    setLoading(true);
    try {
      const res = await signup(form);
      if (res.data?.success === false) {
        setError(res.data?.message || "Signup failed");
        return;
      }

      setShowAuthModal(false);
      navigate("/verify-email", {
        replace: true,
        state: {
          email: form.email,
          card: card,
        },
      });
    } catch (err) {
      setError(err.response?.data?.message || "Server error. Try again.");
    } finally {
      setLoading(false);
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

        {/* AUTH MODAL */}
        {showAuthModal && (
          <div className="auth-overlay" onClick={() => setShowAuthModal(false)}>
            <div
              className="auth-page"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="auth-content">
                {/* CLOSE X */}
                <button
                  type="button"
                  className="auth-close-btn"
                  onClick={() => setShowAuthModal(false)}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

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

                  <p className="error-text">{error || termsError}</p>

                  <button
                    className="loginForm-submit"
                    type="submit"
                    disabled={loading || !agree}
                  >
                    {loading ? "Signing up..." : "Create account"}
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
