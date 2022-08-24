import React from "react";
import styled from "styled-components";
import { School } from "@styled-icons/ionicons-outline/School";
import { Briefcase } from "@styled-icons/feather/Briefcase";

const Fade = require("react-reveal/Fade");

interface Props {
  time: string;
  title: string;
  icon: string;
  left?: string;
}

export class Timeline extends React.Component<Props> {
  render() {
    const icon = this.props.icon === "education" ? School : Briefcase;

    const IconBox = styled.div({
      background: "#09091a",
      fontSize: "24px",
      color: "#25d2db",
      position: "absolute",
      left: this.props.left ? this.props.left : "-10px",
      top: 0,
      zIndex: 1,
      fontWeight: 300
    });

    const StyledIcon = styled(icon)`
      color: "#25d2db";
    `;

    return (
      <div className="timeline-container">
        <Fade bottom>
          <div className="content">
            <span className="time">{this.props.time}</span>
            <h3 className="title">{this.props.title}</h3>
            {this.props.children}
          </div>
        </Fade>
        <IconBox>
          <StyledIcon size="32" />
        </IconBox>
      </div>
    );
  }
}

export default Timeline;
