/* eslint-disable react/no-unescaped-entities */
import { FaExternalLinkAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";


const Project3 = () => {
    return (
        <div className="pt-16 px-4 lg:px-0 mb-8">
            <h2 className="text-2xl font-bold mb-6">Tasty Hub || E-commerce Website</h2>
            <Carousel className="text-center">
                <div>
                    <img src="https://i.ibb.co/NNrKcDV/Screenshot-2023-12-11-182710.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/1r10qK2/Screenshot-2023-12-11-182828.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/zbL3fdV/Screenshot-2023-12-11-183027.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/dMXHcWj/Screenshot-2023-12-11-183144.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/gt2SWqb/Screenshot-2023-12-11-183238.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/hyTPWCg/Screenshot-2023-12-11-183352.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/sF1L49v/Screenshot-2023-12-11-183454.png" />
                </div>
            </Carousel>
            <div className="mt-6">

                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold">Features:</h2>
                        <ul className="list-disc ml-5 mt-4">
                            <li>In this website, an user can see their desired brand's food. Also they can know more details about foods.</li>
                            <li>User can log in with email and password or with google.</li>
                            <li>They can also customize the theme between light or dark mode.</li>
                            <li>The logged in user can add any products of any brand.</li>
                            <li>User can also update any existing product.</li>
                            <li>After logging in user can see his/her profile picture and name at the navbar.</li>
                            <li>User can also add their desired product to the cart and also can delete the products from the cart.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div>
                            <h2 className="text-xl font-bold">Technologies:</h2>
                            <ul className="list-disc ml-5 mt-4">
                                <li>Tailwind CSS is used for styling.</li>
                                <li>Firebase based authentication.</li>
                                <li>MongoDB is used for database.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mt-4">Links:</h2>
                            <div className="flex gap-3 mt-2">
                                <Link to={'https://github.com/Orchizakia00/tasty-hub-client'}><p className="btn btn-outline btn-accent mt-2">Client Side Repository</p></Link> <br />
                                <Link to={'https://github.com/Orchizakia00/tasty-hub-server'}><p className="btn btn-outline btn-accent mt-2">Server Side Repository</p></Link><br />
                            </div>
                            <Link to={'https://tasty-hub-b9f0c.web.app'}><button className="btn btn-outline btn-accent mt-3 text-accent">Visit Website <FaExternalLinkAlt size={15}/></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project3;