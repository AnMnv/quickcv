import React from "react";
import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";

import "../../styles/viewer.css";

function UserTitles() {
  return (
    <div className="userTitles">
      <div className="userName">
        JAMES PEARSON
      </div>
      <div className="userJob">
        WEB DESIGNER
      </div>
    </div>
  );
}

function UserImage() {
  return (
    <div className="userImage">
      <img
        src="https://i.pinimg.com/564x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg"
        alt="james"
      />
    </div>
  );
}

function Contact(props) {
  const Icon = props.icon;
  return (
    <div className="contact">
      <div className="contactIcon">
        <Icon size={24} weight="fill" />
      </div>
      {props.title}
    </div>
  );
}

function Contacts() {
  return (
    <div className="Contacts">
      <Contact icon={Phone} title={"+1 551 404 4934"} />
      <Contact icon={EnvelopeSimple} title={"lorem@tutanota.com"} />
      <Contact icon={MapPin} title={"lorem ipsum chifdpu spuc"} />
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="personalInfo_viewer">
      <UserTitles />
      <UserImage />
      <Contacts />
    </div>
  );
}

export default PersonalInfo;