import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className={styles.navBar}>
      {/* Left Side - VishvaConnect Logo */}
      <div className={styles.logo}>VishvaConnect</div>

      {/* Right Side - Navigation Links */}
      <ul className={styles.navLinks}>
        {["Home", "About", "Career", "Blog", "Contact Us"].map((link, index) => (
          <li
            key={index}
            className={styles.navItem}
            onClick={() => setActiveLink(link)}
          >
            <a
              href={`/${link.toLowerCase()}`}
              className={`${styles.navLink} ${
                activeLink === link ? styles.active : ""
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
