import Introduction from "../../components/Introduction/Introduction";
import Banner from "../../components/Banner/Banner";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <Introduction />
            <Education></Education>
            <Skills></Skills>
        </div>
    );
};

export default Home;