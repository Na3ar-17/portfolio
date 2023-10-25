import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { NextPage } from "next";
import Image from "next/image";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import project from "../../../public/project1.jpg";
import Button from "../ButtonMore/Button";
import styles from "./Projects.module.scss";
const Projects: NextPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <p>My Projects</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <button className={styles.cardIcon}>
                <ArrowUpwardIcon className={styles.icon} />
              </button>
            </div>
            <div className={styles.cardBody}>
              <FaReact />
              <FaNodeJs />
            </div>
            <div className={styles.cardFooter}>
              <Image
                className={styles.projectImage}
                src={project}
                alt="project1"
                width={428}
                height={228}
              />
            </div>
          </div>
          <div className={styles.cardText}>
            <p>Web Development</p>
            <p className={styles.cardTextTitle}>Bolder Landingpage</p>
            <p>
              Serrow restructured and designed core pages, creating interactive
              elements that put users in control and allowed them to discover
              the information needed to make a decision.
            </p>
          </div>
        </div>
      </div>
      <Button />
    </main>
  );
};

export default Projects;
