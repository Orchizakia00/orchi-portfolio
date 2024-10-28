import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Experiences = () => {
    return (
        <div>
            <SectionTitle heading={'Experiences'}></SectionTitle>
            <div>
                <h2 className="font-bold">Frontend Developer Intern</h2>
                <p>Quad Theory Ltd | Remote</p>
                <p>Feb 2024 - May 2024</p>
                <ul className="list-disc">
                    <li>Assisted in developing UI components with HTML, CSS, and JavaScript for various client projects.</li>
                    <li>Participated in daily stand-ups and code reviews, contributing to a collaborative team environment.</li>
                    <li>Gained hands-on experience with Git for version control and GitHub for code repository management.</li>
                    <li>Worked on bug fixing and enhancing the performance of existing applications.</li>
                </ul>
            </div>
        </div>
    );
};

export default Experiences;