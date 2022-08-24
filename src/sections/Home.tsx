import React from "react";
import { Container } from "react-bootstrap";
import ParticlesContainer from "../components/ParticlesContainer";
import TextLoop from "react-text-loop";
import { Scroller } from "../components";
import details from "../data/details.json";

import { Github } from "@styled-icons/feather/Github";
import { Linkedin } from "@styled-icons/feather/Linkedin";
import { Medium } from "@styled-icons/boxicons-logos/Medium";
import { Twitter } from "@styled-icons/feather/Twitter";
import { Angellist } from "@styled-icons/simple-icons/Angellist";

type TDict = { [key: string]: JSX.Element };

const iconDictionary: TDict = {
  Github: <Github size="20" />,
  Linkedin: <Linkedin size="20" />,
  Medium: <Medium size="20" />,
  Twitter: <Twitter size="20" />,
  Angellist: <Angellist size="20" />
};

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
                    {iconDictionary[network.iconName]}
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
