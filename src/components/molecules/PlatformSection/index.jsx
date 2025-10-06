import React from "react";
import classes from "./PlatformSection.module.css";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";
import clsx from "clsx";
import Button from "@/components/atoms/Button";
import Parser from "html-react-parser";

const PlatformSection = ({ data }) => {
  return (
    <div className={classes.infoCards}>
      <div class={classes.infoCardsContainer}>
        <div className={classes.infoImage}>
          <Image
            src={imageUrl(data?.image) || data?.image}
            alt={data?.title}
            fill
          />
        </div>
      </div>
      <div className={classes.infoCardsContent}>
        <div className={classes.infoCardsHeader}>
          <div className={classes.infoCardsImage}>
            <Image
              src={imageUrl(data?.icon) || data?.icon}
              alt={data?.title}
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className={classes.infoCardsContent}>
          <h3 className={clsx(classes.infoCardsTitle, "fs28 fw400")}>
            {data?.title}
          </h3>
          <div className={classes.infoCardsDescription}>
            {Parser(data?.htmlDescription)}
          </div>
        </div>
        <Button
          label="Get Started"
          variant="primary"
          className={classes.infoCardsButton}
        />
      </div>
    </div>
  );
};

export default PlatformSection;
