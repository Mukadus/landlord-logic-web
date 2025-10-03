import React from "react";
import classes from "./InfoCards.module.css";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";
import clsx from "clsx";
import Button from "@/components/atoms/Button";

const InfoCards = ({ data }) => {
  return (
    <div className={classes.infoCards}>
      <div className={classes.infoCardsHeader}>
        <div className={classes.infoCardsImage}>
          <div className={classes.infoCardsImageIcon}>
            <Image
              src={imageUrl(data?.icon) || data?.icon}
              alt={data?.title}
              fill
            />
          </div>
        </div>
        <Button
          label="Get Started"
          variant="primary"
          className={classes.infoCardsButton}
        />
      </div>
      <div className={classes.infoCardsContent}>
        <h3 className={clsx(classes.infoCardsTitle, "fs28 fw400")}>
          {data?.title}
        </h3>
        <p className={clsx(classes.infoCardsDescription, "fs18 fw400")}>
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
