import "./About.css";

export default function About() {
    return (
        <>
            <video autoPlay muted loop src="../public/assets/video (2160p).mp4"></video>
            <div className="about">

                <div className="column2">
                    <div>
                        <h1>Collab Connect</h1>
                        <p>
At Collab-Connect-ED, we’re dedicated to fostering collaborative projects that empower your academic journey. Our project section is a hub of teamwork and goal achievement, where you’ll discover like-minded students with diverse skills, enabling you to brainstorm and execute project ideas seamlessly. Moreover, our platform facilitates connections with a wide spectrum of individuals, allowing you to engage with fellow students. Whether you’re in search of collaborators with specific majors or expertise, seeking academic mentorship, or requiring specialized guidance, we’ve streamlined the process. Let’s come together at Collab-Connect-ED and build a strong, supportive community to bring your project concepts to life
                        </p>
                        <button className="btn">Get started</button>
                    </div>
                </div>
            </div>
        </>

    )
}

