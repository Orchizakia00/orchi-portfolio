import Project1 from "../Project1/Project1";
import Project2 from "../Project2/Project2";
import Project3 from "../Project3/Project3";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";


const Projects = () => {
    return (
        <div id="projects" className="my-20 lg:p-0 p-8">
            <SectionTitle heading={'Projects'}></SectionTitle>
            <Project1></Project1>
            <Project2></Project2>
            <Project3></Project3>
        </div>
    );
};

export default Projects;