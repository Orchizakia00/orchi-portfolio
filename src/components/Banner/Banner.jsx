import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import banner from '../../assets/banner/orchi-nobg.png';
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 mb-12 lg:p-0 p-8">
            <div className="hero-content flex-col lg:flex-row gap-32">
                {/* <Lottie loop={true} animationData={animation}></Lottie> */}
                <img data-aos="fade-right" src={banner} className="max-w-xs rounded-lg flex-1" />
                <div data-aos="fade-left" className='flex-1 max-w-lg'>
                    <p className="pb-2">Hi there, This is</p>
                    {/* <h1 className="text-5xl font-bold pb-6">Zakia Tanzim Orchi</h1> */}
                    <div className="h-24">
                        <TypeAnimation
                            sequence={[
                                500,
                                'Zakia',
                                200,
                                'Zakia Tanzim',
                                200,
                                'Zakia Tanzim Orchi',
                                200,
                                '',
                            ]}
                            // wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                            style={{ fontSize: '3em', fontWeight: 'bold', paddingBottom: '1.5rem', display: 'inline-block' }}
                        />
                    </div>
                    <p className="pb-6 text-lg">MERN Stack Developer || Design and create websites using different JavaScript frameworks || Frontend Web Develpoment</p>
                    <div className='pb-6'>
                        <div className='flex gap-3 items-center pb-2'>
                            <FaEnvelope size={20}></FaEnvelope>
                            <p className=''>zakiaislam290@gmail.com</p>
                        </div>
                        <div className='flex gap-4 pb-2'>
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
                        <div className='flex gap-3 items-center pb-2'>
                            <FaMapMarkerAlt size={20}></FaMapMarkerAlt>
                            <p className=''>Jashore, Khulna, Bangladesh</p>
                        </div>
                    </div>
                    <Link to={'https://drive.google.com/uc?export=download&id=1mKRknaUlYyD1aKaJE9E2HBJrgVe71nLi'}>
                        <button className="btn btn-accent"><FaDownload /> Download Resume</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;