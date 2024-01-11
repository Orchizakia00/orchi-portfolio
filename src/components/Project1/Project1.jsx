/* eslint-disable react/no-unescaped-entities */
import { FaExternalLinkAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Project1 = () => {
    return (
        <div className="pt-16 px-4 lg:px-0 mb-8">
            <h2 className="text-2xl font-bold mb-6">Reso Nest || Hotel Management System</h2>
            <Carousel className="text-center">
                <div>
                    <img src="https://i.ibb.co/VvBTvmt/Screenshot-2023-12-11-132631.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/RHSGHB5/Screenshot-2023-12-11-132808.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/qmPQ0H4/Screenshot-2023-12-11-132918.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/6YfHGdy/Screenshot-2023-12-11-133019.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/1Mv3KZ3/Screenshot-2023-12-11-133149.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/SnkngBb/Screenshot-2023-12-11-152724.png" />
                </div>
            </Carousel>
            <div className="mt-6">
                
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold">Features:</h2>
                        <ul className="list-disc ml-5 mt-4">
                            <li>User can view the available rooms and see detailed information about the rooms.</li>
                            <li>User can also view if there is any review available for the specific room given by any customer.</li>
                            <li>User can also book any available room by submitting some informations about them and the date when they want to book the room.</li>
                            <li>After booking user can update and delete their bookings. But they can only delete 2 days before their booking.</li>
                            <li>After deleting user's booking the room will be available for other customer again.</li>
                            <li>User can view testimonials of the hotel.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div>
                            <h2 className="text-xl font-bold">Technologies:</h2>
                            <ul className="list-disc ml-5 mt-4">
                                <li>Tailwind CSS is used for styling.</li>
                                <li>Firebase based authentication.</li>
                                <li>Jwt is implemented using cookies.</li>
                                <li>MongoDB is used for database.</li>
                                <li>AOS is used for scroll animations.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mt-4">Links:</h2>
                            <div className="flex gap-3 mt-2">
                                <Link to={'https://github.com/Orchizakia00/reso-nest-client'}><p className="btn btn-outline btn-accent mt-2">Client Side Repository</p></Link> <br />
                                <Link to={'https://github.com/Orchizakia00/reso-nest-server'}><p className="btn btn-outline btn-accent mt-2">Server Side Repository</p></Link><br />
                            </div>
                            <Link to={'https://reso-nest.web.app'}><button className="btn btn-outline btn-accent mt-3 text-accent text-md">Visit Website <FaExternalLinkAlt size={15} /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;