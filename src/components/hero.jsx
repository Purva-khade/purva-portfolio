import { useEffect, useState } from "react";

function Hero() {

    const roles = [
        "Web Developer",
        "Graphic Designer",
        "Web Designer",
        "Video Editor"
    ];

    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {

        let characterIndex = 0;

        const typingTimer = setInterval(() => {

            setText(
                roles[roleIndex].slice(0, characterIndex + 1)
            );

            characterIndex++;

            if (characterIndex === roles[roleIndex].length) {

                clearInterval(typingTimer);

                setTimeout(() => {
                    setRoleIndex(
                        (previousIndex) =>
                            (previousIndex + 1) % roles.length
                    );

                    setText("");
                }, 1000);
            }

        }, 100);

        return () => clearInterval(typingTimer);

    }, [roleIndex]);

    return (
        <section className="firstSection" id="home">

            <div className="leftSection">

                <div>
                    Hi, My name is
                    <span className="purple"> Purva</span>
                </div>

                <div>
                    and I am a passionate
                </div>

                <div className="typingText">
                    {text}
                    <span className="cursor">|</span>
                </div>

                <div className="buttons">

                    <a
                        href="/resume.pdf"
                        download
                        className="btn"
                    >
                        Download Resume
                    </a>

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        Visit Github
                    </a>

                </div>

            </div>

            <div className="rightSection">

                <img
                    src="/images/Web developer.jpeg"
                    alt="Web Developer"
                />

            </div>

        </section>
    );
}

export default Hero;