import React from "react";
import classes from "./HeroSection.module.css";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/atoms/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { imageUrl } from "@/resources/utils/helper";
import Parser from "html-react-parser";
import { useRouter } from "next/navigation";

const HeroSection = ({ data }) => {
  const router = useRouter();

  return (
    <div className={classes.heroSection}>
      <div className={classes.heroContent}>
        <div className={classes.heroText}>
          {Parser(data?.htmlDescription)}
        </div>
        <div className={classes.heroDescription}>
          {Parser(data?.htmlDescription2)}
        </div>
        <div className={classes.heroButtons}>
          <Button
            label="Get Started"
            variant="primary"
            className={classes.heroGetStartedButton}
            onClick={() => {
              router.push("/about-us");
            }}
          />
          <Button
            label="Explore Pricing"
            variant="outlined"
            className={classes.heroButton}
            rightIcon={<FaArrowRightLong />}
            onClick={() => {
              router.push("/pricing");
            }}
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
