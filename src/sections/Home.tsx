import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParticlesContainer from "../components/ParticlesContainer";
import TextLoop from "react-text-loop";
import { Scroller } from "../components";
import { fab } from "@fortawesome/free-brands-svg-icons";
import details from "../data/details.json";

export class Home extends React.Component {
  render() {
    return (
      <section id="home" className="home d-flex align-items-center">
        <ParticlesContainer />
        <Container>
          <div className="intro">
            <img
              src={details.avatar}
              className="mb-4"
              alt="Dmitry Pavluk"
              style={{ width: "180px", borderRadius: "100%" }}
            />

            <h1 className="mb-2 mt-0">{""}</h1>

            <span style={{ fontSize: "20px" }}>
              I'm a{" "}
              <TextLoop
                springConfig={{ stiffness: 180, damping: 10 }}
                interval={2000}
              >
                {details.titles.map((t) => (
                  <span
                    style={{
                      color: "#25d2db",
                      fontWeight: "lighter",
                      fontSize: "20px"
                    }}
                    key={t}
                  >
                    {t}
                  </span>
                ))}
              </TextLoop>
            </span>

            <ul className="social-icons light list-inline mb-0 mt-4">
              {details.socialNetworks.map((network) => (
                <li className="list-inline-item" key={network.iconName}>
                  <a
                    href={network.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={fab[network.iconName]} />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Scroller href="#contact" className="btn btn-kd">
                Contact me
              </Scroller>
            </div>
          </div>
          <div className="scroll-down">
            <Scroller href="#about" className="mouse-wrapper">
              <span>Scroll Down</span>
              <span className="mouse">
                <span className="wheel" />
              </span>
            </Scroller>
          </div>
        </Container>
      </section>
    );
  }
}

export default Home;
