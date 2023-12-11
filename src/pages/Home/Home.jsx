import Introduction from "../../components/Introduction/Introduction";
import Banner from "../../components/Banner/Banner";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Home = () => {
    return (
        <div>
            <Banner />
            <Introduction />
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;