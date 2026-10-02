function Footer() {
    return (
        <footer className="footer">

            <div className="footerContainer">

                <div className="footerColumn">
                    <h3>Purva's Portfolio</h3>
                    <p>
                        Building practical projects and
                        continuously learning new technologies.
                    </p>
                </div>

                <div className="footerColumn">
                    <h3>Quick Links</h3>

                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footerColumn">
                    <h3>Technologies</h3>

                    <ul>
                        <li>Java</li>
                        <li>MySQL</li>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>

            </div>

            <div className="footerBottom">
                <p>© 2026 Purva's Portfolio. All Rights Reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;