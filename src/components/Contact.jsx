function Contact() {
    return (
        <section className="contactSection" id="contact">

            <h2>Contact Me</h2>

            <div className="contactContent">

                <div className="contactInfo">
                    <h3>Let's Connect</h3>

                    <p>
                        If you would like to discuss a project,
                        opportunity or collaboration, feel free
                        to contact me.
                    </p>

                    <p>
                        📧 Email: your-email@example.com
                    </p>

                    <p>
                        📱 Phone: +91 XXXXX XXXXX
                    </p>
                </div>

                <div className="contactForm">

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="5"
                    ></textarea>

                    <button className="btn">
                        Send Message
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Contact;