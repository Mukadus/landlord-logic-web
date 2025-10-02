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
                  {Parser(data?.sectionOne?.htmlDescription)}
                  {Parser(data?.sectionOne?.htmlDescription2)}
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
                    {data?.sectionOne?.arr?.map((item, index) => (
                      <FeaturesCard data={item} key={index} />
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </>
  );
}
