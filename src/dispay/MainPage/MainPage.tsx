import About from "@/components/About/About";
import NavBar from "@/components/NavBar/NavBar";
import Skills from "@/components/Skills/Skills";
import { NextPage } from "next";

interface Props {}

const MainPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
    </div>
  );
};

export default MainPage;
