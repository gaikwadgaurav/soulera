import "../styles/BlogSection.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

// Importing images
import refreshingImage from "/public/assets/refreshing.png";
import healthyImage from "/public/assets/healthy.png";
import gamingImage from "/public/assets/gaming.png";
import techImage from "/public/assets/tech.png";
import foodImage from "/public/assets/food.png";
import bookImage from "/public/assets/book.png";

// Define blog posts
const blogPosts = [
  {
    title: "Refreshing Designs",
    category: "Resources",
    description:
      "Quench satisfying designs to help you stir up emotion and tell a story.",
    image: refreshingImage,
    color: "#8e5cff",
  },
  {
    title: "Healthier Lifestyle",
    category: "Lifestyle",
    description:
      "Living a healthier lifestyle will help with your productivity and your mind-set.",
    image: healthyImage,
    color: "#4da6ff",
  },
  {
    title: "Gaming Evolution",
    category: "Entertainment",
    description:
      "Learn about the evolution of gaming and how it started a revolution.",
    image: gamingImage,
    color: "#f7c442",
  },
  {
    title: "Best Workstations of the Year",
    category: "Inspiration",
    description:
      "Check out these inspiring workstations to get ideas on how to level-up.",
    image: techImage,
    color: "#e6e6e6",
  },
  {
    title: "Eating for Productivity",
    category: "Food",
    description:
      "Learn how to be more disciplined in your diet to maximize productivity.",
    image: foodImage,
    color: "#e6e6e6",
  },
  {
    title: "A Design Mind-set",
    category: "Resourcess",
    description:
      "What does it mean to have a design mind-set? Learn how to improve your eye.",
    image: bookImage,
    color: "#e6e6e6",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h1>The Project Blog</h1>
        <p>Designs and layouts to help you with your app.</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post, idx) => (
          <div
            className="blog-card"
            key={idx}
            style={{ backgroundColor: post.color }}
          >
            <div className="image-wrapper">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <span className={`category ${post.category.toLowerCase()}`}>
                {post.category}
              </span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="blog-footer">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Team</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
        </div>
        <div className="footer-socials">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaDribbble />
        </div>
        <p className="copyright">
          © 2025 SomeCompany, Inc. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default BlogSection;
