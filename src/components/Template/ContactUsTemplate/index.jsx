"use client";
import classes from "./ContactUsTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "@/components/molecules/ContactForm";
import contactUsPage, { contactForm } from "@/developmentContext/contactUsPage";
import { useState } from "react";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";

export default function ContactUsTemplate() {
  const [data, setData] = useState(contactUsPage);
  return (
    <main className={classes.contactUsTemplate}>
      <Container>
        <Row>
          <Col md={6}>
            <ContactForm data={data} />
          </Col>

          <Col md={6}>
            <div className={classes.containerBox}>
              <div className={classes.contactFormImage}>
                <div className={classes.contactFormImageContent}>
                  <Image
                    src={imageUrl(data?.image) || data?.image}
                    alt="contact us"
                    fill
                  />
                </div>
              </div>

              <div className={classes.contactInfoBlock}>
                {contactForm(data)?.map((item, index) => (
                  <div key={index} className={classes.contactInfoItem}>
                    <div className={classes.contactIcon}>
                      {item?.icon}
                    </div>
                    <div className={classes.contactDetails}>
                      <div className={classes.contactLabel}>{item?.label}</div>
                      <div className={classes.contactValue}>Office : {item?.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
