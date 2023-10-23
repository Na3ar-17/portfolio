"use client";
import { NextPage } from "next";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const NavBar: NextPage = () => {
  const [isMenuActive, setMenuActive] = useState<boolean>(false);
  const [isNavBarFixed, setNavBarFixed] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const navBarOffset = navRef.current?.offsetTop || 0;
      const scrolled = window.scrollY;

      if (windowWidth >= 540) {
        if (scrolled > navBarOffset) {
          setNavBarFixed(true);
        } else {
          setNavBarFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${isNavBarFixed ? styles.navBarFixed : ""} `}
    >
      <div className={styles.logoBlock}>
        <p className={styles.logo}>Nazar</p>
      </div>
      <ul style={isMenuActive ? { right: "0" } : {}} className={styles.list}>
        <div className={styles.area}>
          <ul className={styles.circles}>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
            <li className={styles.noAnimation}></li>
          </ul>
        </div>
        <div
          style={
            isMenuActive ? { right: "0", background: "rgba(0, 0, 0, 0.4)" } : {}
          }
          className={styles.menuOverlay}
        ></div>
        <li>
          <Link className={styles.navLink} href="#">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="#">
            Mentorship
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="#">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="#">
            Snippet
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="#">
            Blog
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setMenuActive(!isMenuActive)}
        className={`${styles.navIcon} ${isMenuActive && styles.open}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
