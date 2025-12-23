// FireSafetySection.jsx
import pdcaImg from "../assets/images/blog_imgs/CAPA-process.png"     
import flyerImg from "../assets/images/blog_imgs/CAPA-process.png"      
import "../Css/innerServicePage.css"
import {HeadingComponent} from '../components/Buttons'

export default function InnerServicePage() {
  return (
    <section className="px-4 md:px-16 lg:px-12  mt-[1.875rem]">
    {/* <HeadingComponent text="Service" /> */}

    <div className="fs-page">

      {/* LEFT PDCA BANNER */}
      <div className="fs-left">
        <img src={pdcaImg} alt="PDCA Plan Do Check Act" className="fs-pdca-img" />

        <div className="fs-iso-card">
          <div className="fs-iso-text">
            <h3 className="fs-iso-title">
              ISO 45001 Gap Analysis<br />
              Checklist <span className="fs-iso-em">(Excel)</span>
            </h3>
            <p className="fs-iso-desc">
              Comprehensive assessment tool covering all ISO 45001 requirements
              with scoring methodology and implementation priority guidance.
            </p>
            <button className="fs-download-btn">
              Downloads now
            </button>
          </div>

          <div className="fs-iso-flyer-wrapper">
            <img src={flyerImg} alt="Fire safety training flyer" className="fs-iso-flyer" />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="fs-right">
        <header className="fs-header">
          <h1 className="fs-why-title">
            Why <span className="fs-why-highlight">Fire Safety</span>?
          </h1>
          <p className="fs-why-text">
            Fire emergencies can occur anytime, anywhere often due to small, overlooked hazards.
            Most fires are preventable when people understand how fires start, how to stop them
            from spreading, and what actions to take in the first few critical minutes. Our Fire
            Safety Training helps participants recognize risks, understand fire prevention
            principles, and respond effectively in emergencies.
          </p>
        </header>

        <section className="fs-cover-section">
          <h2 className="fs-cover-title">
            What We Cover During Trainings:
          </h2>

          <ul className="fs-cover-list">
            <li>Introduction to Fire Behavior and the Fire Triangle</li>
            <li>Types and Classes of Fire</li>
            <li>Common Workplace Fire Hazards and Prevention Tips</li>
            <li>Introduction to Fire Extinguishers and Their Applications</li>
            <li>Emergency Evacuation Procedures and Safe Assembly</li>
            <li>Roles of Employees During a Fire Emergency</li>
            <li>Basic Fire Safety Do's & Don'ts</li>
            <li>Case Discussions and Interactive Q&A</li>
          </ul>
        </section>

        <div className="fs-badges">
          <div className="fs-badge">
            <span className="fs-badge-icon">📚</span>
            <span>Training Material (PDF Format)</span>
          </div>
          <div className="fs-badge">
            <span className="fs-badge-icon">🎓</span>
            <span>Training Certificate</span>
          </div>
        </div>
      </div>
    </div>

    </section>
  );
}
