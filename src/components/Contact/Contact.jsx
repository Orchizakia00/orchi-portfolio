import Lottie from "lottie-react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import emailjs from 'emailjs-com';
import animation from '../../assets/animations/Animation - 1702365921053.json'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_a15h5fm', 'template_845ao17', e.target, '5IkfkOhCWEZYrqzLp')
            .then(
                (result) => {
                    console.log(result.text);
                    // Handle success, e.g., show a success message
                },
                (error) => {
                    console.log(error.text);
                    // Handle error, e.g., show an error message
                }
            );

        // Clear the form after submission
        e.target.reset();
    };

    return (
        <div id="contact" className="mt-10">
            <SectionTitle heading={'Get In Touch'}></SectionTitle>
            <div className="flex lg:gap-10 flex-col lg:flex-row">
                <div className="flex-1">
                    <Lottie loop={true} animationData={animation}></Lottie>
                </div>
                <form onSubmit={sendEmail} className="card-body flex-1 mt-16">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea type="text" name="message" className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Send</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;