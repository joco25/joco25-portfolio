import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h1>Hi, I'm Joshua Onungwe 👋</h1>
        <h3>I make things happen 👨‍💻</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
