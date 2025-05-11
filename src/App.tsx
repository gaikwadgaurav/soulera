import React from "react";
import Header from "./components/Header";
import StartSection from "./components/StartSection";
import SocialSection from "./components/SocialSection";
import BoostSection from "./components/BoostSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import BlogSection from "./components/BlogSection";

const App: React.FC = () => (
  <div>
    <Header />
    <StartSection />
    <SocialSection />
    <BoostSection />
    <FeaturesSection />
    <TeamSection />
    <BlogSection />
  </div>
);

export default App;
