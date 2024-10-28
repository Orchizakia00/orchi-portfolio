import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Experiences = () => {
    return (
        <div id="experiences" className="pt-24 px-6 sm:px-8 md:px-12 lg:px-24">
            <SectionTitle heading={'Experiences'}></SectionTitle>
            <div className="max-w-4xl mx-auto mt-8">
                <div className="border-b border-gray-200 pb-6 mb-6">
                    <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
                    <div className="flex justify-between items-center text-sm mt-1">
                        <span>Quad Theory Ltd | Remote</span>
                        {/* <span>Feb 2024 - May 2024</span> */}
                    </div>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Developed and optimized UI components for multiple client projects using HTML, CSS, and JavaScript.</li>
                        <li>Engaged in daily stand-ups and code reviews, fostering a collaborative and agile team environment.</li>
                        <li>Utilized Git and GitHub for version control, enhancing codebase management skills.</li>
                        <li>Conducted bug fixes and improved application performance for a better user experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experiences;