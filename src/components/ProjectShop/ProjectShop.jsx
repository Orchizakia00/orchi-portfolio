/* eslint-disable react/no-unescaped-entities */
import { FaExternalLinkAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import shopImg1 from "../../assets/projects/shopImg1.png"
import shopImg2 from "../../assets/projects/shopImg2.png"
import shopImg3 from "../../assets/projects/shopImg3.png"
import shopImg4 from "../../assets/projects/shopImg4.png"
import shopImg5 from "../../assets/projects/shopImg5.png"

const ProjectShop = () => {
    return (
        <div className="lg:w-[1200px] mx-auto">
            <div className="pt-10 px-4 lg:px-0 mb-8">
                <h2 className="text-2xl font-bold mb-6">Rabeya Mart || Online Grocery Shop (Ongoing)</h2>
                <Carousel className="text-center">
                    <div>
                        <img src={shopImg1} />
                    </div>
                    <div>
                        <img src={shopImg2} />
                    </div>
                    <div>
                        <img src={shopImg3} />
                    </div>
                    <div>
                        <img src={shopImg4} />
                    </div>
                    <div>
                        <img src={shopImg5} />
                    </div>
                </Carousel>
                <div className="mt-6">

                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="flex-1">
                            <p className="mb-5"><span className="text-xl font-bold">Overview:</span> Currently working on enhancing Rabeya Mart’s e-commerce platform, focusing on user experience, operational efficiency, and personalization for a seamless online grocery shopping experience.</p>
                            <h2 className="text-xl font-bold">Features:</h2>
                            <ul className="list-disc ml-5 mt-4 space-y-2">
                                <li><span className="font-bold">Optimizing Cart and Checkout System:</span> Actively refining the cart functionality and improving the checkout process to make it faster and more user-friendly, aimed at creating a smoother shopping experience.</li>
                                <li><span className="font-bold">Developing Role-Specific Dashboard Routes:</span> Creating customized dashboard routes to tailor experiences for each user type (customers, admins, support staff), allowing for personalized navigation and tool access.</li>
                                <li><span className="font-bold">Improving User-Centric Functionality:</span> Continuously refining the platform’s design and functionality with an emphasis on accessibility and user satisfaction.</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div>
                                <h2 className="text-xl font-bold">Technologies:</h2>
                                <ul className="list-disc ml-5 mt-4">
                                    <li>React for dynamic, interactive front-end development.</li>
                                    <li>Tailwind CSS for a responsive, modern user interface.</li>
                                    <li>Firebase for secure, real-time authentication.</li>
                                    <li>MongoDB as the database for efficient task storage and retrieval.</li>
                                    <li>Node.js and Express.js for efficient server-side functionality.</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mt-4">Links:</h2>
                                <div className="flex gap-3 mt-2">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href='https://github.com/Orchizakia00/rabeya-mart-client'>
                                        <p className="btn btn-outline btn-accent mt-2">Client Side Repository</p>
                                    </a> <br />
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href='https://github.com/Orchizakia00/rabeya-mart-server'>
                                        <p className="btn btn-outline btn-accent mt-2">Server Side Repository</p>
                                    </a><br />
                                </div>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://rabeya-mart.web.app'>
                                    <button className="btn btn-outline btn-accent mt-3 text-accent">Visit Website <FaExternalLinkAlt size={15} />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center my-10">
                <Link to={'/'}><button className="btn btn-accent">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ProjectShop;