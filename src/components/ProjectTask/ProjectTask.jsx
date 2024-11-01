/* eslint-disable react/no-unescaped-entities */
import { FaExternalLinkAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import taskImg1 from "../../assets/projects/taskImg1.png"
import taskImg2 from "../../assets/projects/taskImg2.png"
import taskImg3 from "../../assets/projects/taskImg3.png"
import taskImg4 from "../../assets/projects/taskImg4.png"
import taskImg5 from "../../assets/projects/taskImg5.png"
import taskImg6 from "../../assets/projects/taskImg6.png"

const ProjectTask = () => {
    return (
        <div className="lg:w-[1200px] mx-auto">
            <div className="pt-10 px-4 lg:px-0 mb-8">
                <h2 className="text-2xl font-bold mb-6">Task Sync Pro || Task Management System</h2>
                <Carousel className="text-center">
                    <div>
                        <img src={taskImg1} />
                    </div>
                    <div>
                        <img src={taskImg2} />
                    </div>
                    <div>
                        <img src={taskImg3} />
                    </div>
                    <div>
                        <img src={taskImg4} />
                    </div>
                    <div>
                        <img src={taskImg5} />
                    </div>
                    <div>
                        <img src={taskImg6} />
                    </div>
                </Carousel>
                <div className="mt-6">

                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="flex-1">
                            <h2 className="text-xl font-bold">Features:</h2>
                            <ul className="list-disc ml-5 mt-4">
                                <li>Allows users to create, edit, and manage daily tasks within a comprehensive to-do list.</li>
                                <li>Provides seamless task status updates, enabling users to move tasks between "To Do," "Ongoing," and "Completed" lists using drag-and-drop functionality.</li>
                                <li>Enables task deletion, giving users full control over their task list.</li>
                                <li>A “My Tasks” page provides a consolidated view of all tasks with real-time status indicators for streamlined organization.</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div>
                                <h2 className="text-xl font-bold">Technologies:</h2>
                                <ul className="list-disc ml-5 mt-4">
                                    <li>Tailwind CSS for a responsive, modern user interface.</li>
                                    <li>Firebase for secure, real-time authentication.</li>
                                    <li>MongoDB as the database for efficient task storage and retrieval.</li>
                                    <li>React Drag and Drop for intuitive, interactive task management.</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mt-4">Links:</h2>
                                <div className="flex gap-3 mt-2">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href='https://github.com/Orchizakia00/task-sync-client'>
                                        <p className="btn btn-outline btn-accent mt-2">Client Side Repository</p>
                                    </a> <br />
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href='https://github.com/Orchizakia00/task-sync-server'>
                                        <p className="btn btn-outline btn-accent mt-2">Server Side Repository</p>
                                    </a><br />
                                </div>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://task-sync-27a0a.web.app'>
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

export default ProjectTask;