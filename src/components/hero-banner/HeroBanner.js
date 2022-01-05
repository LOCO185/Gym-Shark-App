import React from "react";
import "./hero.css";
import backgroundVideo from "../../assets/gymshark-mix.mp4";
import Button from "../buttons/Button";

const HeroBanner = () => {
  return (
    <section className="hero-container">
      <video autoPlay loop muted className="hero-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <article className="hero-content">
        <h1>Unleash your inner shark</h1>
        <h2>Workouts to elevate your fitness training</h2>
        <Button>Get Started</Button>
      </article>
    </section>
  );
};

export default HeroBanner;
