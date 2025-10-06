"use client";
import React from "react";
import classes from "./HomeTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { homePage } from "@/developmentContext/homePage";
import { useState } from "react";
import HeroSection from "@/components/molecules/HeroSection";
import Parser from "html-react-parser";
import Image from "next/image";
import FeaturesCard from "@/components/molecules/FeaturesCard";
import InfoCards from "@/components/molecules/InfoCards";
import clsx from "clsx";
import MobileAppCard from "@/components/molecules/MobileAppCard";
import MobileAppFeatures from "@/components/molecules/MobileAppFeatures";
import FaqSection from "@/components/molecules/FaqSection";
import Button from "@/components/atoms/Button";
import TimeLineSection from "@/components/molecules/TimeLineSection";
import WaveBoxes from "@/components/molecules/WaveBoxes";
// import clsx from "clsx";

export default function HomeTemplate() {
  const [data, setData] = useState(homePage);

  return (
    <>
      {data?.hero && (
        <div className={classes.heroSection}>
          <Container>
            <Row>
              <Col lg={12}>
                <HeroSection data={data?.hero} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
      <Container>
        {data?.sectionOne && (
          <div className={classes.sectionOne}>
            <Row className="gy-5">
              <Col lg={12}>
                <div className={classes.sectionOneContent}>
                  <div className={classes.sectionOneTitle}>
                    {Parser(data?.sectionOne?.htmlDescription)}
                  </div>
                  <div className={classes.sectionOneDescription}>
                    {Parser(data?.sectionOne?.htmlDescription2)}
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <Row>
                  <Col lg={6}>
                    <div className={classes.sectionOneImage}>
                      <Image
                        src={data?.sectionOne?.image}
                        alt="section one"
                        fill
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className={classes.sectionOneFeatures}>
                      {data?.sectionOne?.arr?.map((item, index) => (
                        <FeaturesCard data={item} key={index} />
                      ))}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        )}

        {data?.sectionTwo && (
          <div className={classes.sectionTwo}>
            <Row className="align-items-center justify-content-center">
              {data?.sectionTwo?.arr?.map((item, index) => (
                <Col lg={5} key={index}>
                  <InfoCards data={item} />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {data?.sectionThree && (
          <div className={classes.sectionThree}>
            <Row className="align-items-center justify-content-center">
              <Col lg={12}>
                <div className={classes.sectionThreeContent}>
                  <h2 className={clsx(classes.sectionThreeTitle, "fs48 fw400")}>
                    {data?.sectionThree?.title}
                  </h2>
                  <p
                    className={clsx(
                      classes.sectionThreeDescription,
                      "fs17 fw400"
                    )}
                  >
                    {data?.sectionThree?.description}
                  </p>
                </div>
              </Col>
              <Col lg={12}>
                <div className={classes.timeLineSection}>
                  <div className={classes.timeLineRow}>
                    {data?.sectionThree?.arr?.map((item, index) => (
                      <div className={clsx(classes.timeLineItem, classes[`item${index + 1}`])} key={index}>
                        <WaveBoxes data={item} index={index}  />
                      </div>
                    ))}
                  </div>
                  <div className={classes.bg}>
                    <Image src="/app-images/bg.png" alt="bg" fill />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
        {data?.sectionFour && (
          <div className={classes.sectionFour}>
            <Row className="gy-5">
              <Col lg={6}>
                <MobileAppCard data={data?.sectionFour} />
              </Col>
              <Col lg={6}>
                <Row className="gy-3">
                  {data?.sectionFour?.arr?.map((item, index) => (
                    <Col lg={6} key={index}>
                      <MobileAppFeatures data={item} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Container>

      {data?.sectionFive && (
        <div className={classes.sectionFive}>
          <Container>
            <Row className="gy-5 justify-content-center align-items-center">
              <Col lg={10}>
                <Row className={classes.sectionFiveRow}>
                  <Col lg={12}>
                    <div className={classes.sectionFiveContent}>
                      <h2
                        className={clsx(classes.sectionFiveTitle, "fs48 fw400")}
                      >
                        {data?.sectionFive?.title}
                      </h2>
                      <p
                        className={clsx(
                          classes.sectionFiveDescription,
                          "fs17 fw400"
                        )}
                      >
                        {data?.sectionFive?.description}
                      </p>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <Row className="gy-3">
                      {data?.sectionFive?.faq?.map((item, index) => (
                        <Col lg={6} key={index}>
                          <FaqSection data={item} />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col lg={12}>
                    <div className={classes.sectionFiveDescription}>
                      <div className={classes.sectionFiveDescriptionText}>
                        {Parser(data?.sectionFive?.htmlDescription)}
                      </div>
                      <Button
                        label="Try the App now"
                        variant="primary"
                        className={classes.sectionFiveButton}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
