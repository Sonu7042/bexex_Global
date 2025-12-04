// WhoWeWorkWith.jsx
import "../Css/whoWeWorkWith.css";
import thumbUp from "../assets/images/thumbUp.png"; // Replace with your icon path


const items = [
  "Manufacturing plants looking to reduce incidents and improve productivity",
  "Construction firms managing contractor safety and regulatory compliance",
  "Automotive suppliers pursuing IATF 16949 certification",
  "Logistics and warehouse operations improving safety culture",
  "Infrastructure projects needing end-to-end risk management",
  "Companies preparing for client audits, ISO certifications, or ESG reporting",
];

export default function WhoWeWorkWith() {
  return (
    <section className="www-section">
      <div className="www-inner">
        <h2 className="www-title applyFont">
          Who We <span>Work </span> With
        </h2>

        <div className="www-list">
          {items.map((text) => (
            <div className="www-card" key={text}>
              <div className="www-icon">
                <span className="www-thumb"><img src={thumbUp} alt="thumb Up" /></span>
              </div>
              <div className="www-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
