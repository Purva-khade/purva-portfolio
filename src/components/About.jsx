function About() {
    return (
        <section className="aboutSection" id="about">

            <h2>About Me</h2>

            <div className="aboutContent">

                <div className="aboutText">
                    <p>
                        Hi, I'm Purva, an Electronics and Communication
                        Engineering student with an interest in software
                        and web development.
                    </p>

                    <p>
                        I enjoy building practical projects and learning
                        technologies such as Java, MySQL, HTML, CSS,
                        JavaScript and React.
                    </p>

                    <p>
                        I am continuously improving my technical skills
                        and looking for opportunities where I can apply
                        my knowledge to real-world projects.
                    </p>
                </div>

                <div className="aboutSkills">

                    <h3>Skills</h3>

                    <div className="skillsList">
                        <span>Java</span>
                        <span>MySQL</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;