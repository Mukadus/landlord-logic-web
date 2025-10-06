"use client";
import React from "react";
import classes from "./PricingTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { pricingPage } from "@/developmentContext/pricingPage";
import { useState } from "react";
import Parser from "html-react-parser";
import PricingCards from "@/components/molecules/PricingCards";

export default function PricingTemplate() {
  const [data, setData] = useState(pricingPage);
  return (
    <div className={classes.pricingContainer}>
      <Container>
        <Row className={classes.pricingRow}>
          <Col lg={12}>
            <div className={classes.pricingTitle}>
              {Parser(data?.htmlDescription)}
            </div>
            <div className={classes.pricingDescription}>
              <p>{data?.description}</p>
            </div>
          </Col>
          <Col lg={12}>
            <Row>
              {data?.arr?.map((item, index) => (
                <Col lg={4} key={index}>
                  <PricingCards data={item} key={index} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
