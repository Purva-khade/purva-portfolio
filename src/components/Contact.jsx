import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8081/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Unable to connect to the server.");
        }
    };

    return (
        <section className="contactSection" id="contact">
            <h2>Contact Me</h2>

            <div className="contactContent">

                <div className="contactInfo">
                    <h3>Let's Connect</h3>

                    <p>
                        If you would like to discuss a project,
                        opportunity or collaboration, feel free to contact me.
                    </p>

                    <p>📧 Email: your-email@example.com</p>
                    <p>📱 Phone: +91 XXXXX XXXXX</p>
                </div>

                <form className="contactForm" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className="btn">
                        Send Message
                    </button>

                    {status && <p>{status}</p>}

                </form>
            </div>
        </section>
    );
}

export default Contact;