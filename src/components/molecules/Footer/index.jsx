"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FOOTER_DATA } from "../../../developmentContext/app-data";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import clsx from "clsx";


export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Main Footer Content */}
        <div className={styles.mainFooter}>
          <div className={styles.footerContainer}>
            {/* Left Column - Branding & Email */}
            <div className={styles.brandColumn}>
              <div className={styles.logoIcon}>
                <Image src={FOOTER_DATA?.logo} alt="MyLandlordLogic Logo" fill />               
              </div>

              <form className={styles.emailForm} onSubmit={handleEmailSubmit}>
                <div className={styles.emailInputWrapper}>
                  <div className={styles.emailIcon}>✉</div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.emailInput}
                    required
                  />
                  <button type="submit" className={styles.emailSubmitButton}>
                    →
                  </button>
                </div>
              </form>
            </div>

            {/* Right Columns - Links */}
            <div className={styles.linksSection}>
              {FOOTER_DATA.links.map((section, index) => (
                <div key={index} className={styles.linkColumn}>
                  <h3 className={styles.linkTitle}>{section.title}</h3>
                  <ul className={styles.linkList}>
                    {section.sublinks.map((link, linkIndex) => (
                      <li key={linkIndex} className={styles.linkItem}>
                        {link.icon ? (
                          <a href={link.path} className={styles.socialLink}>
                            {link.icon === "x" && "𝕏"}
                           
                          </a>
                        ) : (
                          <a href={link.path} className={styles.textLink}>
                            {link.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
