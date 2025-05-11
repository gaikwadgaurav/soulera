import { MdPhoneIphone } from "react-icons/md";
import boostImage from "../assets/boost-productivity.png";
import automateImage from "../assets/automated-tasks.png";
import "../styles/BoostSection.scss";

const BoostSection = () => {
  return (
    <section className="boost-section">
      <div className="boost-item">
        <div className="image">
          <img src={boostImage} alt="Boost Productivity" />
        </div>
        <div className="content">
          <h2>Boost Productivity</h2>
          <p>
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </p>
          <ul>
            <li>
              <span className="icon-wrapper">
                <MdPhoneIphone className="icon" />
              </span>
              Maximize productivity and growth
            </li>
            <li>
              <span className="icon-wrapper">
                <MdPhoneIphone className="icon" />
              </span>
              Speed past your competition
            </li>
            <li>
              <span className="icon-wrapper">
                <MdPhoneIphone className="icon" />
              </span>
              Learn the top techniques
            </li>
          </ul>
        </div>
      </div>

      <div className="boost-item reverse">
        <div className="image">
          <img src={automateImage} alt="Automated Tasks" />
        </div>
        <div className="content">
          <h2>Automated Tasks</h2>
          <p>
            Save time and money with our revolutionary services. We are the
            leaders in the industry.
          </p>
          <ul>
            <li>
              <span className="icon-wrapper">
                <MdPhoneIphone className="icon" />
              </span>
              Automated task management workflow
            </li>
            <li>
              <span className="icon-wrapper">
                <MdPhoneIphone className="icon" />
              </span>
              Detailed analytics for your data
            </li>
            <li>
              <span className="icon-wrapper">
                <MdPhoneIphone className="icon" />
              </span>
              Some awesome integrations
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BoostSection;
