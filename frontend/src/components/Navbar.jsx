import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header id="siteHeader">
        <div className="container nav-wrap">

          <Link to="/" className="brand">
            <img src="/workout_zone_logo.png" alt="Workout Zone logo" />

            <span className="brand-text">
              WORKOUT ZONE
              <span>PAREL · MUMBAI</span>
            </span>
          </Link>

          <nav className="nav-links" id="deskNav">
            <Link to="/" data-nav="home">
              Home
            </Link>

            <Link to="/services" data-nav="services">
              Services
            </Link>

            <Link to="/hyrox" data-nav="hyrox">
              HYROX
            </Link>

            <Link to="/trainers" data-nav="trainers">
              Trainers
            </Link>

            <Link to="/pricing" data-nav="membership">
              Membership
            </Link>

            <Link to="/contact" data-nav="contact">
              Contact
            </Link>
          </nav>

          <div className="nav-right">
            <Link to="/contact" className="btn btn-primary nav-cta">
              Join Now
            </Link>

            <button
              className="burger"
              id="burgerBtn"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <span className="lines">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu">

        <Link to="/">
          <span>01</span>
          Home
        </Link>

        <Link to="/services">
          <span>02</span>
          Services
        </Link>

        <Link to="/hyrox">
          <span>03</span>
          HYROX
        </Link>

        <Link to="/trainers">
          <span>04</span>
          Trainers
        </Link>

        <Link to="/pricing">
          <span>05</span>
          Membership
        </Link>

        <Link to="/contact">
          <span>06</span>
          Contact
        </Link>

        <Link to="/contact" className="btn btn-primary btn-block">
          Join Now
        </Link>

        <div className="mobile-menu-foot">
          Workout Zone — Parel, Mumbai · Est. 1937
        </div>

      </div>
    </>
  );
}

export default Navbar;