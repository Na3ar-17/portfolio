import { NextPage } from "next";
import styles from "./Skills.module.scss";
import LanguageIcon from "@mui/icons-material/Language";
import JavascriptIcon from "@mui/icons-material/Javascript";
const Skills: NextPage = () => {
  return (
    <main className={styles.skills}>
      <div className={styles.content}>
        <div className={styles.infoBlock}>
          <p className={styles.title}>What I do</p>
          <p>
            Build and maintain websites,
            <span style={{ color: "#3bf686" }}>frontend developer {""}</span>
            FTW. I also have a mentorship called {""}
            <span style={{ fontWeight: "700" }} className={styles.neonText}>
              MOFON
            </span>
            . My motto is Beauty and function in equal measure as priority.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <LanguageIcon className={styles.icon} />
            </div>
            <p className={styles.cardTitle}>HTML & CSS development</p>
            <p>Building Dynamic Web Experiences, crafting Digital Interfaces</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <JavascriptIcon
                style={{ fontSize: "60px" }}
                className={styles.icon}
              />
            </div>
            <p className={styles.cardTitle}>JavaScript programming</p>
            <p>
              Unleashing the Power of Web Interactivity, building Web
              Experiences
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <LanguageIcon className={styles.icon} />
            </div>
            <p className={styles.cardTitle}>ReactJs & NextJs</p>
            <p>ReactJS & Next.js Pro: Crafting Modern Web Experiences</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <LanguageIcon className={styles.icon} />
            </div>
            <p className={styles.cardTitle}>Full stack</p>
            <p>From Frontend Magic to Backend Wizardry</p>
          </div>
        </div>
      </div>
      {/* <div className={styles.content}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <LanguageIcon className={styles.icon} />
            </div>
            <p className={styles.cardTitle}>ReactJs & NextJs</p>
            <p>ReactJS & Next.js Pro: Crafting Modern Web Experiences</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <LanguageIcon className={styles.icon} />
            </div>
            <p className={styles.cardTitle}>Full stack</p>
            <p>From Frontend Magic to Backend Wizardry</p>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Skills;
