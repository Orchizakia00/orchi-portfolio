import SectionTitle from "../Shared/SectionTitle/SectionTitle";


const About = () => {
    return (
        <div id="intro" className="min-h-[350px] pt-24" data-aos="fade-up">
            <SectionTitle heading={'Introduction'}></SectionTitle>
            <p className="w-[80%] mx-auto mb-4 mt-10">Hello, I am Zakia Tanzim Orchi, a dedicated MERN stack developer with a passion for creating and designing dynamic web solutions. Leveraging my skills in MongoDB, Express.js, React.js, and Node.js, I have successfully crafted impactful projects, including an employee management system, a hotel management system, and an e-commerce website.</p>
            <p className="w-[80%] mx-auto">My enthusiasm for web development goes beyond the technicalities—it is about creating seamless user experiences and bringing innovative ideas to life. Each project is an opportunity for me to push boundaries and deliver solutions that resonate with both clients and end-users.</p>
        </div>
    );
};

export default About;