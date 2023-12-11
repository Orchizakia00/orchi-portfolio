import { Link } from "react-router-dom";


const Navbar = () => {

    const scrollTo = (id) => {
        if (id === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    };

    const navItems = (
        <>
            <li><Link to={'/'} onClick={() => scrollTo("home")}>Home</Link></li>
            <li><a href="#intro" onClick={() => scrollTo("intro")}>Introduction</a></li>
            <li><a href="#education" onClick={() => scrollTo("education")}>Education</a></li>
            <li><a href="#skills" onClick={() => scrollTo("skills")}>Skills</a></li>
            <li><a href="#projects" onClick={() => scrollTo("projects")}>Projects</a></li>
            <li><a href="#contact" onClick={() => scrollTo("contact")}>Contact</a></li>
        </>
    );

    return (
        <div className="navbar bg-base-200 bg-opacity-50 rounded text-black h-[20px] fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Zakia Tanzim Orchi</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;