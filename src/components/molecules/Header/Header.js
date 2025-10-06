import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { NAV_DATA } from "@/developmentContext/app-data";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  return (
    <header className={styles.header}>
      {/* Main Header */}
      <div className={styles.mainHeader}>
        <Container>
          <div className={styles.headerContent}>
            <div className={styles.logoIcon}>
              <Image
                src="/app-images/logo.png"
                alt="MyLandlordLogic Logo"
                fill
              />
            </div>
            {/* Navigation Menu */}
            <nav className={styles.nav}>
              {NAV_DATA.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={clsx(styles.navLink, item?.path === pathname ? styles.active : "")}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <Link href="/login" className={styles.signInLink}>
                Sign in
              </Link>
              <Button
                label="Signup"
                variant="primary"
                className={styles.signupBtn}
              />
              <Button
                label="Contact us"
                variant="outlined"
                className={styles.contactBtn}
                onClick={() => {
                  router.push("/contact-us");
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
