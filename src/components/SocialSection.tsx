import React from "react";
import "../styles/SocialSection.scss";

// Import images
import disneyLogo from "/public/assets/logos/disney.png";
import googleLogo from "/public/assets/logos/google-icon-lg.png";
import hubspotLogo from "/public/assets/logos/hubspot-icon-lg.png";
import youtubeLogo from "/public/assets/logos/youtube-icon-lg.png";
import slackLogo from "/public/assets/logos/slack-icon-lg.png";
import shopifyLogo from "/public/assets/logos/shopify-icon-lg.png";

const SocialSection: React.FC = () => (
  <section className="trusted">
    <p className="label">TRUSTED BY TOP-LEADING COMPANIES.</p>
    <div className="logos">
      <div className="logo-item large">
        <img src={disneyLogo} alt="Disney" />
      </div>
      <div className="logo-item large">
        <img src={googleLogo} alt="Google" />
      </div>
      <div className="logo-item">
        <img src={hubspotLogo} alt="HubSpot" />
      </div>
      <div className="logo-item large">
        <img src={youtubeLogo} alt="YouTube" />
      </div>
      <div className="logo-item">
        <img src={slackLogo} alt="Slack" />
      </div>
      <div className="logo-item large">
        <img src={shopifyLogo} alt="Shopify" />
      </div>
    </div>
  </section>
);

export default SocialSection;
