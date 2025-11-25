import '../Css/footer.css';
import footer_img from '../assets/images/footer_logo.png';
// import qr1 from '../assets/images/qr1.png';
// import qr2 from '../assets/images/qr2.png';
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import qr_code from '../assets/images/qr_code.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-flex-row">
          {/* Left columns */}
          <div className="footer-col">
            <div className="footer-title applyfont">Contact</div>
            <a href="mailto:bexex@official.com" className="footer-link applyfont">Bexex@official.com</a>
            <div className='applyfont number-link'>91/+ 95823 90987</div>
            <div className="footer-title margin-top applyfont">Bexex Address</div>
            <div className='applyfont'>O-100 ranbom place</div>
            <div className='applyfont'>New Delhi - 110084</div>
          </div>
          <div className="footer-col">
            <div className="footer-link applyfont">Home</div>
            <div className="footer-link applyfont">About Us</div>
            <div className="footer-link applyfont">Communities</div>
          </div>
          <div className="footer-col">
            <div className="footer-title applyfont">Services</div>
            <div className='applyfont service_links'>Environment, Health & Safety (EHS) Solution</div>
            <div className='applyfont service_links'>Managements Systems & Compliance</div>
            <div className='applyfont service_links'>Training & Competency Development</div>
            <div className='applyfont service_links'>Software & Digital Solution</div>
            <div className='applyfont service_links'>Sustainability & ESG Services</div>
            <div className='applyfont service_links'>Quality & Business Excellence</div>
          </div>
          <div className="footer-col">
            <div className="footer-title applyfont">Resources</div>
            <div className="footer-link applyfont">Blog</div>
            <div className="footer-link applyfont">Newsletters</div>
          </div>
          {/* Right section with icons and QR codes */}
          <div className="footer-side">
            <div className="footer-social-icons">
              <a href="#"><BsFacebook /></a>
              <a href="#"><FaSquareInstagram /></a>
              <a href="#"><IoLogoYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>
            <div className="footer-qr-block">
              <img src={qr_code} alt="QR Code 1" className="qr-main" />
              {/* <img src={"qr2"} alt="QR Code 2" className="qr-small" /> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Bexex</span>
          <a href="#" className="footer-bottom-link applyfont">Privacy Policy</a>
          <a href="#" className="footer-bottom-link applyfont">Terms and Conditions</a>
        </div>
      </div>
      <img src={footer_img} className="footer-bg-logo" alt="footer logo bg" />
    </footer>
  );
}
