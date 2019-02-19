import React from "react";
import { FaEnvelope, FaGithub, FaMedium, FaTwitter } from "react-icons/lib/fa";
import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:onungwej@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/joco25">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/joco25_">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@onungwej">
            <FaMedium />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
