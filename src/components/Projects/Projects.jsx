import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import taskImg from "../../assets/projects/taskImg1.png"
import shopImg from "../../assets/projects/shopImg1.png"

const Projects = () => {
    return (
        <div id="projects" className="my-20 pt-24">
            <SectionTitle heading={'Projects'}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 lg:w-full md:w-full w-[90%] mx-auto">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={shopImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Rabeya Mart</h2>
                        <p>Online Grocery Shop (Ongoing) </p>
                        <div className="card-actions justify-end">
                            <Link to={'/project-three'}><button className="btn btn-accent">Details <FaArrowRight /> </button></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/VvBTvmt/Screenshot-2023-12-11-132631.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Reso Nest</h2>
                        <p>Hotel Management System</p>
                        <div className="card-actions justify-end">
                            <Link to={'/project-one'}><button className="btn btn-accent">Details <FaArrowRight /> </button></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={taskImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Task Sync Pro</h2>
                        <p>Task Management System</p>
                        <div className="card-actions justify-end">
                            <Link to={'/project-task'}><button className="btn btn-accent">Details <FaArrowRight /> </button></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center">
                <a href="https://github.com/Orchizakia00?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-accent">More Projects</button>
                </a>
            </div>
        </div>
    );
};

export default Projects;