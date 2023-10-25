import { NextPage } from "next";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Button.module.scss";
import Link from "next/link";
interface Props {
  link?: string;
}

const Button: NextPage<Props> = ({ link }) => {
  return (
    <div className={styles.button}>
      <Link href={link ? link : "/"}>
        <button>
          <MenuIcon sx={{ marginRight: "10px" }} /> See More
          <span></span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
