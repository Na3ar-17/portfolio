import { NextPage } from "next";
import styles from "./About.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
const About: NextPage = () => {
  return (
    <section className={styles.bio}>
      <div className={styles.header}>
        <p className={styles.neonText}>
          Hi, I'm Nazar, a special human with the ability to love learning and
          working on teamwork and coding.
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.card}>
          <div className={styles.cardContect}>
            <div className={styles.borderImg}>
              <img
                src="https://portofolio-web-nu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimage%2Fhomepage%2Fnaufaldi.392e10c99758e727af3b1ea4380a6b8b.png&w=1920&q=100"
                alt="boy"
                className={styles.avatar}
              />
            </div>
            <div className={styles.cardText}>
              <h3>Biography</h3>
              <p>
                Getting Buff +1 for learning, Buff +2 for documentation, and
                more buff on managing a team. Excited about{" "}
                <span style={{ color: "#4ca9ff" }}>React.js</span>,{" "}
                <span style={{ color: "#62d9ff" }}>UX Research</span>, and{" "}
                <span style={{ color: "#3bf686" }}>Agile Development</span>.
              </p>
            </div>
          </div>
          <div className={styles.bioSocials}>
            <p>Lets connect</p>
            <div className={styles.icons}>
              <Link href="https://github.com/Na3ar-17">
                <GitHubIcon sx={{ fontSize: "27px", cursor: "pointer" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
