import {
  MdWorkspacePremium,
  MdAllInbox,
  MdDeveloperMode,
  MdCategory,
  MdLocalOffer,
  MdNotifications
} from "react-icons/md";
import "../styles/FeaturesSection.scss";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Our Features</h2>
      <p className="subtitle">Check out our list of awesome features below.</p>
      <div className="features-list">
        <div className="feature-item">
          <div className="icon"><MdWorkspacePremium /></div>
          <h3>Certifications</h3>
          <p>Each of our plan will provide you and your team with certifications.</p>
        </div>
        <div className="feature-item">
          <div className="icon"><MdNotifications /></div>
          <h3>Notifications</h3>
          <p>Send out notifications to all your customers to keep them engaged.</p>
        </div>
        <div className="feature-item">
          <div className="icon"><MdAllInbox /></div>
          <h3>Bundles</h3>
          <p>High-quality bundles of awesome tools to help you out.</p>
        </div>
      </div>
      <div className="features-list">
        <div className="feature-item">
          <div className="icon"><MdDeveloperMode /></div>
          <h3>Developer Tools</h3>
          <p>Developer tools to help grow your application and keep it up-to-date.</p>
        </div>
        <div className="feature-item">
          <div className="icon"><MdCategory /></div>
          <h3>Building Blocks</h3>
          <p>The right kind of building blocks to take your company to the next level.</p>
        </div>
        <div className="feature-item">
          <div className="icon"><MdLocalOffer /></div>
          <h3>Coupons</h3>
          <p>Coupons system to provide special offers and discounts for your app.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
