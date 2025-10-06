import React from "react";
import classes from "./WaveBoxes.module.css";
import Image from "next/image";
import clsx from "clsx";

export default function WaveBoxes({ data, index }) {
  return (
    <div className={classes.waveBoxesContainer}>
      <div className={classes.boxesContainer}>
        <div className={classes.boxDiv}>
          <div className={classes.waveBox}>
            <div className={classes.waveBoxContent}>
              <div className={classes.boxIcon}>
                <Image
                  src={data?.icon}
                  alt={data?.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className={classes.boxContent}>
                <h3 className={classes.boxTitle}>{data?.title}</h3>
                <p className={classes.boxDescription}>{data?.description}</p>
              </div>
            </div>
          </div>
           <div className={clsx(classes.connectionLine, classes[`line${index + 1}`])}></div>
        </div>
      </div>
    </div>
  );
}
