import banner from '../../assets/banner/orchi-white-bg.png'
import { FaDownload } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-white mb-12">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <img src={banner} className="max-w-sm rounded-lg flex-1" />
                <div className='flex-1'>
                    <p className="pb-2">Hi there, This is</p>
                    <h1 className="text-5xl font-bold pb-6">Zakia Tanzim Orchi</h1>
                    <p className="pb-6 text-lg">MERN Stack Developer || Design and create websites using different JavaScript frameworks || Frontend Web Develpoment</p>
                    <button className="btn btn-accent"><FaDownload /> Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;