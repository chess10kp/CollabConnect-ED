import "./About.css";

export default function About() {
    return (
        <div className="about">
            <div className="column1">
                <video autoPlay muted loop src="../public/assets/video (2160p).mp4"></video>
            </div>
            <div className="column2">
                <div>
                    <h1>What is the Collab Connect</h1>
                    <p>
                        Interos is using automation and the world’s largest database of B2B relationships to challenge the supply chain status quo and modernize how organizations manage supplier resilience. We empower enterprises to be Resilient by Design™ – embedding proactive resilience measures into their very foundations, instead of reacting to disruption after the fact.

                        Using the industry's first, and only, automated supplier resilience platform, we harness the power of AI to map and monitor supply chains at scale.

                        This enables companies to get ahead of disruption – five days sooner, five moves earlier, and five layers deeper.
                    </p>
                </div>

            </div>
        </div>
    )
}

