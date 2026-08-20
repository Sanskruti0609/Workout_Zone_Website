import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Strength Training",
    description:
      "Build strength, power and confidence using premium equipment.",
    link: "/services/strength-training",
  },
  {
    number: "02",
    title: "Cardio",
    description:
      "Improve endurance and conditioning.",
    link: "/services/cardio",
  },
  {
    number: "03",
    title: "Zumba & Aerobics",
    description:
      "High-energy group fitness sessions.",
    link: "/services/zumba-aerobics",
  },
  {
    number: "04",
    title: "HYROX",
    description:
      "Strength, endurance and functional performance training.",
    link: "/hyrox",
  },
  {
    number: "05",
    title: "Personal Training",
    description:
      "One-to-one coaching based on individual goals.",
    link: "/services/personal-training",
  },
  {
    number: "06",
    title: "Recovery",
    description:
      "Massage and steam facilities.",
    link: "/services/recovery",
  },
];

function ServicesPreview() {
  return (
    <section className="sect" id="services">

      <div className="container">
        <div className="sect-head">

          <div className="eyebrow">
            What we offer
          </div>

          <h2>
            Train your way.
          </h2>

          <p>
            Six ways to train under one roof — pick a lane,
            or work them all.
          </p>

        </div>
      </div>

      <div className="container">

        <div className="svc-grid">

          {services.map((service) => (
            <Link
              to={service.link}
              className="svc-card"
              key={service.number}
            >

              <div className="svc-num">
                {service.number}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;