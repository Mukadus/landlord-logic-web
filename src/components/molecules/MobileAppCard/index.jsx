import React from "react";
import classes from "./MobileAppCard.module.css";
import Image from "next/image";
import clsx from "clsx";
import { imageUrl } from "@/resources/utils/helper";
import Button from "@/components/atoms/Button";

const MobileAppCard = ({ data }) => {
  return (
    <div className={classes.mobileAppCard}>
      <div className={classes.mobileAppCardHeader}>
        <div className={classes.infoCardsImage}>
          <div className={classes.infoCardsImageIcon}>
            <Image
              src="/app-images/icon.png"
              alt="mobile app"
              fill
            />
          </div>
        </div>
        <div className={classes.mobileAppCardHeaderButton}>
          <div className={classes.badgeImage}>
            <Image src="/app-images/badge1.png" alt="apple" fill />
          </div>
          <div className={classes.badgeImage}>
            <Image src="/app-images/badge2.png" alt="google" fill />
          </div>
        </div>
      </div>
      <div className={classes.mobileAppCardHeaderContent}>
        <h3 className={clsx(classes.title, "fs20 fw500")}>
          {data?.title}
        </h3>
        <p
          className={clsx(classes.description, "fs17 fw400")}
        >
          {data?.description}
        </p>
      </div>
      <div className={classes.mobileAppCardImage}>  
        <Image src={imageUrl(data?.image) || data?.image} alt="mobile app" fill />
      </div>
    </div>
  );
};

export default MobileAppCard;
