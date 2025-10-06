"use client";
import React from "react";
import classes from "./AboutUsTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { aboutUsPage } from "@/developmentContext/aboutUsPage";
import { useState } from "react";
import Parser from "html-react-parser";
import Image from "next/image";
import FeaturesCard from "@/components/molecules/FeaturesCard";
import InfoCards from "@/components/molecules/InfoCards";
import clsx from "clsx";
import MobileAppCard from "@/components/molecules/MobileAppCard";
import MobileAppFeatures from "@/components/molecules/MobileAppFeatures";
import FaqSection from "@/components/molecules/FaqSection";
import AboutHeroSection from "@/components/molecules/AboutHeroSection";
import PlatformSection from "@/components/molecules/PlatformSection";
import Button from "@/components/atoms/Button";
// import clsx from "clsx";

export default function AboutUsTemplate() {
  const [data, setData] = useState(aboutUsPage);

  return (
    <>
      {data?.hero && (
        <div className={classes.heroSection}>
          <Container>
            <Row>
              <Col lg={12}>
                <AboutHeroSection data={data?.hero} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
      <Container fluid>
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
                <Row className={clsx("gy-4", classes.sectionOneFeaturesRow)}>
                  {data?.sectionOne?.arr?.map((item, index) => (
                    <Col lg={4} key={index}>
                      <FeaturesCard
                        data={item}
                        key={index}
                        contentClass={classes.contentBox}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Container>
      <Container>
        {data?.sectionTwo && (
          <div className={classes.sectionTwo}>
            <Row className="align-items-center justify-content-center">
              <Col lg={12}>
                <PlatformSection data={data?.sectionTwo} />
              </Col>
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
                      <div>{Parser(data?.sectionFive?.htmlDescription)}</div>
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
