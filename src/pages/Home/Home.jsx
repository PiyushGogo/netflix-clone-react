import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../assets/hero_banner.jpg";
import HeroTitle from "../../assets/hero_title.png";
import PlayIcon from "../../assets/play_icon.png";
import InfoIcon from "../../assets/info_icon.png";
import TitileCards from "../../components/TitileCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={HeroBanner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={HeroTitle} alt="" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            quasi? Nobis, possimus sequi, perspiciatis earum eum ea cupiditate,
            nemo totam incidunt similique culpa voluptatum reprehenderit
            expedita porro fuga! Aspernatur, laboriosam.
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={PlayIcon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={InfoIcon} alt="" />
              More Info
            </button>
          </div>
          <TitileCards />
        </div>
      </div>
      <div className="more-cards">
        <TitileCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitileCards title={"Only on Netflix"} category={"popular"} />
        <TitileCards title={"Upcoming"} category={"upcoming"} />
        <TitileCards title={"Top Pics for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
