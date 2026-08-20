import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <section className={`hero ${loaded ? "loaded" : ""}`} id="home">

      <div className="hero-lines"></div>

      <div className="hero-glow"></div>

      <div className="grain"></div>

      <img
        src="/logo.png"
        alt=""
        className="hero-badge"
        aria-hidden="true"
      />

      <div className="hero-inner">

        <div className="hero-eyebrow eyebrow">
          Parel · Mumbai · Fitness &amp; Performance
        </div>

        <h1>
          <span className="line">
            <span>Train.</span>
          </span>

          <span className="line">
            <span>Push.</span>
          </span>

          <span className="line">
            <span>Repeat.</span>
          </span>
        </h1>

        <p className="hero-sub">
          A complete fitness experience built around strength,
          conditioning, performance and recovery — all under one roof.
        </p>

        <div className="hero-ctas">

          <Link to="/contact" className="btn btn-primary">
            Start Your Journey
          </Link>

          <Link to="/services" className="btn btn-outline">
            Explore Services
          </Link>

        </div>

      </div>

      <div className="hero-foot">

        <div className="hero-tags">
          <span className="tag">Strength</span>
          <span className="tag">HYROX</span>
          <span className="tag">Recovery</span>
          <span className="tag">Est. 1937</span>
        </div>

        <div className="scroll-cue"></div>

      </div>

    </section>
  );
}

export default Hero;