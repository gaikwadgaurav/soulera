import React from "react";
import "../styles/SocialSection.scss";

const SocialSection: React.FC = () => (
  <section className="trusted">
    <p className="label">TRUSTED BY TOP-LEADING COMPANIES.</p>
    <div className="logos">
      <div className="logo-item large">
        <img src="src/assets/logos/disney.png" alt="Disney" />
      </div>
      <div className="logo-item large">
        <img src="src/assets/logos/google-icon-lg.png" alt="Google" />
      </div>
      <div className="logo-item">
        <img src="src/assets/logos/hubspot-icon-lg.png" alt="HubSpot" />
      </div>
      <div className="logo-item large">
        <img src="src/assets/logos/youtube-icon-lg.png" alt="YouTube" />
      </div>
      <div className="logo-item">
        <img src="src/assets/logos/slack-icon-lg.png" alt="Slack" />
      </div>
      <div className="logo-item large">
        <img src="src/assets/logos/shopify-icon-lg.png" alt="Shopify" />
      </div>
    </div>
  </section>
);

export default SocialSection;
