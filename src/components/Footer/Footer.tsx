import { NextPage } from "next";
import styles from "./Footer.module.scss";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link href="#!">About Site</Link>
            </li>
            <li>
              <Link href="#!">About developer</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.socials}>
          <p>Reach me out</p>
        </div>
        <div className={styles.icons}>
          <Link href="https://github.com/Na3ar-17" target="_blank">
            <GitHubIcon className={styles.icon} />
          </Link>
        </div>
        <div className={styles.developer}>
          <p>@ Gavrylyk Nazar 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
