import Introduction from "../../components/Introduction/Introduction";
import Banner from "../../components/Banner/Banner";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Experiences from "../../components/Experiences/Experiences";

const Home = () => {
    return (
        <div>
            <Banner />
            <Introduction />
            <Education></Education>
            <Skills></Skills>
            <Experiences></Experiences>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;