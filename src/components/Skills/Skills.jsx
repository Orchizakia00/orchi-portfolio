import SectionTitle from "../Shared/SectionTitle/SectionTitle";


const Skills = () => {
    return (
        <div id='skills' className="my-8">
            <SectionTitle heading={'Skills'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-16">

                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">React</h2>
                        <p>Intermediate</p>
                    </div>
                </div>

                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">JavaScript</h2>
                        <p>Intermediate</p>
                    </div>
                </div>

                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 90 }} role="progressbar">90%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">HTML</h2>
                        <p>Advanced</p>
                    </div>
                </div>

                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 90 }} role="progressbar">90%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">CSS</h2>
                        <p>Advanced</p>
                    </div>
                </div>

                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 90 }} role="progressbar">90%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">Tailwind CSS</h2>
                        <p>Advanced</p>
                    </div>
                </div>


                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 20 }} role="progressbar">20%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">MongoDB</h2>
                        <p>Basic</p>
                    </div>
                </div>

                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">Firebase</h2>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 20 }} role="progressbar">20%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">Node</h2>
                        <p>Basic</p>
                    </div>
                </div>
                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">Git</h2>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div className="card card-compact w-56 bg-base-100 shadow-xl">
                    <div className="text-center mt-5">
                        <div className="radial-progress text-accent text-center" style={{ "--value": 20 }} role="progressbar">20%</div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">Express</h2>
                        <p>Basic</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;