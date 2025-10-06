"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FOOTER_DATA } from "../../../developmentContext/app-data";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import clsx from "clsx";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Parser from "html-react-parser";
import { imageUrl } from "@/resources/utils/helper";
import moment from "moment";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Main Footer Content */}
        <div className={styles.mainFooter}>
          <div className={styles.footerContent}>
            <div className={styles.footerTitleContainer}>
              <div className={styles.footerTitle}>
                {Parser(FOOTER_DATA?.htmlDescription)}
              </div>
              <p className={clsx(styles.footerText, "fs18 fw400")}>
                {FOOTER_DATA?.text}
              </p>
            </div>
            <div className={styles.footerImage}>
              <Link href="/contact-us" target="_blank">
                <Image
                  src={imageUrl(FOOTER_DATA?.image) || FOOTER_DATA?.image}
                  alt="Contact Us"
                  fill
                />
              </Link>
            </div>
          </div>
          <div className={styles.footerContainer}>
            {/* Left Column - Branding & Email */}
            <div className={styles.brandColumn}>
              <div className={styles.logoIcon}>
                <Image
                  src={FOOTER_DATA?.logo}
                  alt="MyLandlordLogic Logo"
                  fill
                />
              </div>

              <div className={styles.emailInputWrapper}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  setValue={setEmail}
                  required
                  inputClass={styles.emailInput}
                  containerClass={styles.emailInputContainer}
                  leftIcon={<MdOutlineMail size={18} />}
                  leftIconClass={styles.emailInputLeftIcon}
                />
                <Button
                  type="submit"
                  className={styles.emailSubmitButton}
                  leftIcon={<FaArrowRightLong size={18} />}
                />
              </div>
            </div>

            {/* Right Columns - Links */}
            <div className={styles.linksSection}>
              {FOOTER_DATA.links.map((section, index) => (
                <div key={index} className={styles.linkColumn}>
                  <h3 className={styles.linkTitle}>{section.title}</h3>
                  <ul
                    className={
                      section?.title === "SOCIAL"
                        ? styles.socialLinkList
                        : styles.linkList
                    }
                  >
                    {section.sublinks.map((link, linkIndex) => (
                      <li key={linkIndex} className={styles.linkItem}>
                        {link.icon ? (
                          <Link href={link.path} className={styles.socialLink}>
                            <Image
                              src={link?.icon}
                              alt={link?.title}
                              fill
                              className={styles.socialLinkImage}
                            />
                          </Link>
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
      <div className={styles.legalSection}>
        <div className={styles.legalContainer}>
          <div className={styles.legalLinks}>
          <ul className={styles.legalList}>
            {FOOTER_DATA.legalLinks.map((link, index) => (
              <li key={index} className={styles.legalItem}>
                <Link href={link.path} className={styles.legalLink}>
                  {link.title}
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <p className={styles.copyright}>
            © {moment().format("YYYY")} MyLandlordLogic, Inc.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
