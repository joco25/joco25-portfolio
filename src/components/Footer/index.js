import React from "react";

import styles from "./footerStyles.module.css";
import GatsbyLogo from "../../assets/gatsby-logo.jpg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>
          🙏 Copyright © 2019 Joshua Onungwe | Site Developed & Designed using
          ⚛️ +{" "}
          <img
            src={GatsbyLogo}
            alt="gatsby-logo"
            style={{ width: "16px", height: "16px" }}
          />{" "}
          {""}Gatsbyjs + 💅 style-components.
        </p>
      </div>
    </div>
  );
};

export default Footer;
