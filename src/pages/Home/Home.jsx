import Introduction from "../../components/Introduction/Introduction";
import Banner from "../../components/Banner/Banner";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";

const Home = () => {
    return (
        <div>
            <Banner />
            <Introduction />
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;