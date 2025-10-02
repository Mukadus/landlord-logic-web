import React from "react";
import classes from "./HeroSection.module.css";
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
          {/* <h1 className={clsx(classes.heroTitle, "fs68 fw400 white italic")}> */}
          {Parser(data?.htmlDescription)}
          {/* </h1> */}
        </div>

        <p className={clsx(classes.heroDescription, "fs20 fw400 white")}>
          {data?.description}
        </p>
        <div className={classes.heroButtons}>
          <Button
            label="Get Started"
            variant="primary"
            className={classes.heroGetStartedButton}
          />
          <Button
            label="Explore Features"
            variant="outlined"
            className={classes.heroButton}
            rightIcon={<FaArrowRightLong />}
          />
        </div>
      </div>
      <div className={classes.heroImageContainer}>
        {data?.image?.map((item, index) => (
          <div className={classes.heroImage} key={index}>
            <Image src={imageUrl(item?.url) || item?.url} alt="hero" fill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
