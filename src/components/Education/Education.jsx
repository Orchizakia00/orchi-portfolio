import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Just from "../../assets/education/just.jpeg"


const Education = () => {
    return (
        <div id="education" className="mt-8 min-h-[550px] pt-24">
            <SectionTitle heading={'Education'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 lg:w-full md:w-full w-[90%] mx-auto">
                <div data-aos="flip-up" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={Just} className="h-[200px] w-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Master of Science in Computer Science and Engineering</h2>
                        <p><span className="font-bold">Institute: </span>Jashore University of Science and Technology</p>
                        <p><span className="font-bold">Session: </span>2024-Present</p>
                        {/* <p><span className="font-bold">CGPA:</span> 3.788</p> */}
                    </div>
                </div>
                <div data-aos="flip-up" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/x8yKMsZ/nubt.jpg" className="h-[200px] w-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bachelor of Science in Computer Science and Engineering.</h2>
                        <p><span className="font-bold">Institute: </span>Northern University of Business and Technology, Khulna</p>
                        <p><span className="font-bold">Session: </span>2019-2023</p>
                        <p><span className="font-bold">CGPA:</span> 3.788</p>
                    </div>
                </div>
                <div data-aos="flip-up" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/D9q54H8/DAUD-PUBLIC-SCHOOL-AND-COLLEGE-Logo.png" className="h-[200px] w-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Higher Secondary School Certificate - HSC</h2>
                        <p><span className="font-bold">Institute: </span>Daud Public School and College, Jashore Cantonment, Jashore</p>
                        <p><span className="font-bold">Session: </span>2018</p>
                        <p><span className="font-bold">GPA:</span> 4.33</p>
                    </div>
                </div>
                <div data-aos="flip-up" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/gdncWxs/logo-4.png" className="h-[200px] w-[200px]" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Secondary School Certificate - SSC</h2>
                        <p><span className="font-bold">Institute: </span>Jashore Govt. Shikkha Board Model School and College, Jashore</p>
                        <p><span className="font-bold">Session: </span>2016</p>
                        <p><span className="font-bold">GPA:</span> 5.00</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;