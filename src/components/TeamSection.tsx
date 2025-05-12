import { FaTwitter, FaGithub } from "react-icons/fa";
import "../styles/TeamSection.scss";

// Importing images
import freddyImage from "/public//assets/team/freddy.png";
import carlImage from "/public//assets/team/carl.png";
import susanImage from "/public//assets/team/susan.png";
import tommyImage from "/public//assets/team/tommy.png";
import ronImage from "/public//assets/team/ron.png";
import peteImage from "/public//assets/team/pete.png";
import kellyImage from "/public//assets/team/kelly.png";
import alexisImage from "/public//assets/team/alexis.png";

// Define team members
const teamMembers = [
  {
    name: "Freddy Smith",
    role: "CEO and Founder",
    image: freddyImage,
  },
  {
    name: "Carl Jones",
    role: "CTO and Co Founder",
    image: carlImage,
  },
  {
    name: "Susan Peterson",
    role: "Marketing Director",
    image: susanImage,
  },
  {
    name: "Tommy Barnes",
    role: "Designer",
    image: tommyImage,
  },
  {
    name: "Ron Jonson",
    role: "Senior Developer",
    image: ronImage,
  },
  {
    name: "Pete Tompkins",
    role: "Web Developer",
    image: peteImage,
  },
  {
    name: "Kelly Richards",
    role: "Sales Manager",
    image: kellyImage,
  },
  {
    name: "Alexis Jordan",
    role: "Affiliate Manager",
    image: alexisImage,
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-header-wrapper">
        <div className="team-heading">
          <h2>Our Team</h2>
          <p>An incredible team of amazing individuals</p>
        </div>
        <div className="team-accent"></div>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <img src={member.image} alt={member.name} className="profile-img" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="socials">
              <FaTwitter />
              <FaGithub />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
