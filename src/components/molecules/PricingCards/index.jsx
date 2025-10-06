import classes from "./PricingCards.module.css";
import { getFormattedPrice } from "@/resources/utils/helper";
import clsx from "clsx";
import Button from "@/components/atoms/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PricingCards({ data }) {
  return (
    <div
      className={
        data?.type === "Popular"
          ? classes.popularPricingCards
          : classes.pricingCards
      }
    >
      <div className={classes.pricingCardsContainer}>
        <div className={classes.pricingCardsHeader}>
          <div>
            <div className={clsx(classes.title, "fs20 fw600")}>
              {data?.title}
            </div>
            <div className={clsx(classes.price, "fs40 fw600")}>
              {getFormattedPrice(data?.price)}
              <span className="fs16 fw400">/month</span>
            </div>
          </div>
          {data?.type && (
            <div className={classes.popularBadge}>{data?.type}</div>
          )}
        </div>
        <div className={classes.pricingCardsContent}>
          <p className={classes.pricingCardsContentTitle}>Features included:</p>
          <ul>
            {data?.features?.map((item, index) => (
              <li key={index}>
                <p className={classes.pricingCardsContentTitle}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.pricingCardsButtonContainer}>
        <Button
          label="Get Started"
          variant="primary"
          className={classes.pricingCardsButton}
          rightIcon={<FaArrowRightLong />}
        />
      </div>
    </div>
  );
}
