import React from "react";
import classes from "./AboutHeroSection.module.css";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/atoms/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { imageUrl } from "@/resources/utils/helper";
import Parser from "html-react-parser";

const HeroSection = ({ data }) => {
  return (
    <div className={classes.heroSection}>
      <div className={classes.heroContent}>
        <div className={classes.heroText}>
          {Parser(data?.htmlDescription)}
        </div>
        <div className={classes.heroDescription}>
          {Parser(data?.htmlDescription2)}
        </div>
        <div className={classes.heroImage}>
            <Image src={imageUrl(data?.image) || data?.image} alt="hero" fill />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
