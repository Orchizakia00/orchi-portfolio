import { FaNodeJs, FaReact } from "react-icons/fa";
import css from "../../assets/icons/css.png";
import ex from "../../assets/icons/ex.png";
import firebase from "../../assets/icons/firebase.png";
import git from "../../assets/icons/git.png";
import html from "../../assets/icons/html.png";
import js from "../../assets/icons/js.png";
import mongodb from "../../assets/icons/mongodb.png";
import tailwind from "../../assets/icons/tailwind.png";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";

const Skills = () => {
    return (
        <div id='skills' className="my-8">
            <SectionTitle heading={'Skills'}></SectionTitle>

            <Marquee className="gap-2">
                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><FaReact className="" size={50} color="cyan"></FaReact></p>
                        <h2 className="font-bold text-2xl">React</h2>
                        <p>Intermediate</p>
                    </div>
                </div>

                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                    <div className="card-body text-center">

                        <p className="flex justify-center"><img src={js} alt="" /></p>
                        <h2 className="font-bold text-2xl">JavaScript</h2>
                        <p>Intermediate</p>
                    </div>
                </div>

                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 90 }} role="progressbar">90%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><img src={html} alt="" /></p>
                        <h2 className="font-bold text-2xl">HTML</h2>
                        <p>Advanced</p>
                    </div>
                </div>

                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 90 }} role="progressbar">90%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><img src={css} alt="" /></p>
                        <h2 className="font-bold text-2xl">CSS</h2>
                        <p>Advanced</p>
                    </div>
                </div>

                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 90 }} role="progressbar">90%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><img src={tailwind} alt="" /></p>
                        <h2 className="font-bold text-2xl">Tailwind CSS</h2>
                        <p>Advanced</p>
                    </div>
                </div>


                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 20 }} role="progressbar">20%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><img src={mongodb} width={48} height={48} alt="" /></p>
                        <h2 className="font-bold text-2xl">MongoDB</h2>
                        <p>Basic</p>
                    </div>
                </div>

                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><img src={firebase} alt="" /></p>
                        <h2 className="font-bold text-2xl">Firebase</h2>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 20 }} role="progressbar">20%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><FaNodeJs size={40} ></FaNodeJs></p>
                        <h2 className="font-bold text-2xl">Node</h2>
                        <p>Basic</p>
                    </div>
                </div>
                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><img src={git} alt="" /></p>
                        <h2 className="font-bold text-2xl">Git</h2>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div data-aos="flip-up" className="card card-compact w-56 bg-base-100 shadow-lg mr-2">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 20 }} role="progressbar">20%</div>
                    </div>
                    <div className="card-body text-center">
                        <p className="flex justify-center"><img src={ex} alt="" /></p>
                        <h2 className="font-bold text-2xl">Express</h2>
                        <p>Basic</p>
                    </div>
                </div>
            </Marquee>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-16 w-[55%] lg:w-full mx-auto">


            </div>
        </div>
    );
};

export default Skills;