import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import banner from '../../assets/banner/orchi-white-bg.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-white mb-12">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <img src={banner} className="max-w-sm rounded-lg flex-1" />
                <div className='flex-1'>
                    <p className="pb-2">Hi there, This is</p>
                    <h1 className="text-5xl font-bold pb-6">Zakia Tanzim Orchi</h1>
                    <p className="pb-6 text-lg">MERN Stack Developer || Design and create websites using different JavaScript frameworks || Frontend Web Develpoment</p>
                    <div className='pb-6'>
                        <div className='flex gap-3 items-center pb-4'>
                            <FaEnvelope size={20}></FaEnvelope>
                            <p className=''>zakiaislam290@gmail.com</p>
                        </div>
                        <div className='flex gap-4 pb-4'>
                            <div className='flex items-center'>
                                
                                <FaLinkedin size={20}></FaLinkedin>
                                <Link to={'https://www.linkedin.com/in/zakia-tanzim-orchi-a2263a290/'}><p className='btn btn-ghost'>LinkedIn</p></Link>
                            </div>
                            <div className='flex items-center'>
                                <FaGithub size={20}></FaGithub>
                                <Link to={'https://github.com/Orchizakia00'}><p className='btn btn-ghost'>GitHub</p></Link>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center pb-4'>
                            <FaPhoneAlt size={20}></FaPhoneAlt>
                            <p className=''>+8801779153018</p>
                        </div>
                        <div className='flex gap-3 items-center pb-4'>
                            <FaMapMarkerAlt size={20}></FaMapMarkerAlt>
                            <p className=''>Jashore, Khulna, Bangladesh</p>
                        </div>
                    </div>
                    <button className="btn btn-accent"><FaDownload /> Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;