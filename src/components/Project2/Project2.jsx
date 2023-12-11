/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Project2 = () => {
    return (
        <div className="my-16">
            <h2 className="text-2xl font-bold mb-6">Team Tracker || Employee Management System</h2>
            <Carousel className="text-center">
                <div>
                    <img src="https://i.ibb.co/6bRKBBr/Screenshot-2023-12-11-162443.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Tw9mzv0/Screenshot-2023-12-11-175634.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/dct50Wk/Screenshot-2023-12-11-175751.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/YLmTLrt/Screenshot-2023-12-11-175921.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/s55RnDR/Screenshot-2023-12-11-180212.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/G90BFrp/Screenshot-2023-12-11-180753.png" />
                </div>
            </Carousel>
            <div className="mt-6">

                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold">Features:</h2>
                        <ul className="list-disc ml-5 mt-4">
                            <li>An user can set his/her role while registration. User can be an employee or a HR of the company.</li>
                            <li>There is admins in website. They can change a normal employee's role to a HR.</li>
                            <li>User can also book any available room by submitting some informations about them and the date when they want to book the room.</li>
                            <li>Admin can also fire any employee if he/she wants.</li>
                            <li>HRs can make a employee verified or unverified. And also see the details about the employees.</li>
                            <li>In this details page, HR can see a bar chart that represents the salaries of various months of the employees.</li>
                            <li>HR can make payment for the verified employees only. But making payments for the same month twice is not allowed.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div>
                            <h2 className="text-xl font-bold">Technologies:</h2>
                            <ul className="list-disc ml-5 mt-4">
                                <li>Tailwind CSS is used for styling.</li>
                                <li>Firebase based authentication.</li>
                                <li>Jwt is implemented using local storage.</li>
                                <li>MongoDB is used for database.</li>
                                <li>AOS is used for scroll animations.</li>
                                <li>Stripe is used for payment gateway.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mt-4">Links:</h2>
                            <div className="flex gap-6 mt-2">
                                <Link to={'https://github.com/Orchizakia00/team-tracker-client'}><p className="btn btn-outline btn-accent mt-2">Client Side Repository</p></Link> <br />
                                <Link to={'https://github.com/Orchizakia00/team-tracker-server'}><p className="btn btn-outline btn-accent mt-2">Server Side Repository</p></Link><br />
                            </div>
                            <Link to={'https://team-tracker-31435.web.app'}><button className="btn btn-link text-accent">Visit Website</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;