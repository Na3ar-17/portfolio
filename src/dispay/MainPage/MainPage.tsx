import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import { NextPage } from "next";

interface Props {}

const MainPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default MainPage;
