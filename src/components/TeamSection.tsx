import { FaTwitter, FaGithub } from "react-icons/fa";
import "../styles/TeamSection.scss";

const teamMembers = [
  {
    name: "Freddy Smith",
    role: "CEO and Founder",
    image: "src/assets/team/freddy.png",
  },
  {
    name: "Carl Jones",
    role: "CTO and Co Founder",
    image: "src/assets/team/carl.png",
  },
  {
    name: "Susan Peterson",
    role: "Marketing Director",
    image: "src/assets/team/susan.png",
  },
  {
    name: "Tommy Barnes",
    role: "Designer",
    image: "src/assets/team/tommy.png",
  },
  {
    name: "Ron Jonson",
    role: "Senior Developer",
    image: "src/assets/team/ron.png",
  },
  {
    name: "Pete Tompkins",
    role: "Web Developer",
    image: "src/assets/team/pete.png",
  },
  {
    name: "Kelly Richards",
    role: "Sales Manager",
    image: "src/assets/team/kelly.png",
  },
  {
    name: "Alexis Jordan",
    role: "Affiliate Manager",
    image: "src/assets/team/alexis.png",
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

