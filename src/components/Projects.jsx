function Projects() {
    return (
        <section className="projectsSection" id="projects">

            <h2>My Projects</h2>

            <div className="projectsContainer">

                <div className="projectCard">
                    <h3>Student Management System</h3>

                    <p>
                        A Java and MySQL based application for
                        managing student information, records
                        and academic details.
                    </p>

                    <div className="projectButtons">
                        <button className="btn">
                            View Project
                        </button>

                        <button className="btn">
                            GitHub
                        </button>
                    </div>
                </div>


                <div className="projectCard">
                    <h3>Portfolio Website</h3>

                    <p>
                        A responsive personal portfolio website
                        developed using HTML, CSS, JavaScript
                        and React.
                    </p>

                    <div className="projectButtons">
                        <button className="btn">
                            View Project
                        </button>

                        <button className="btn">
                            GitHub
                        </button>
                    </div>
                </div>


                <div className="projectCard">
                    <h3>Full Stack Web Application</h3>

                    <p>
                        A full stack web application using
                        frontend technologies, Java and MySQL
                        for backend development.
                    </p>

                    <div className="projectButtons">
                        <button className="btn">
                            View Project
                        </button>

                        <button className="btn">
                            GitHub
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Projects;