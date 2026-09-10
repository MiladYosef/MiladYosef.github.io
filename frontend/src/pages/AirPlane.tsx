import "../App.css";

function AirPlane() {
    return (
        <div className="app">

            <nav className="navbar">
                <div className="logo">MILAD</div>

                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#games">Games</a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                </ul>
            </nav>


            <section className="game-info-section">

                <div className="game-info-header">
                    <div className="section-label">
                        Game Information
                    </div>

                    <h2 className="section-title">
                        AIR PLANE
                    </h2>
                </div>

                <div className="game-info-grid">

                    <div className="info-item">
                        <span className="info-label">
                            PLATFORM
                        </span>
                        <span className="info-value">
                            Mobile
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">
                            ENGINE
                        </span>
                        <span className="info-value">
                            Unity
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">
                            LANGUAGE
                        </span>
                        <span className="info-value">
                            C#
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">
                            ROLE
                        </span>
                        <span className="info-value">
                            Game Developer
                        </span>
                    </div>

                </div>

            </section>

            {/* Download Game */}
            <section className="download-section">

                <div className="section-label">
                    DOWNLOAD
                </div>

                <h2 className="section-title">
                    Play AirPlane
                </h2>

                <p className="about-text">
                    Download AirPlane and experience the game yourself.
                </p>

                <div className="hero-buttons">

                    {/* <a
                        href="/downloads/AirPlane.apk"
                        className="button button-primary"
                        download
                    >
                        DOWNLOAD GAME
                    </a> */}

                    <a href="#about" className="button button-primary">
                        DOWNLOAD IS DISABLED
                    </a>

                </div>

            </section>


            <section className="gameplay-section">

                <div className="section-label">
                    Gameplay
                </div>

                <h2 className="section-title">
                    How It Works
                </h2>

                <div className="gameplay-content">

                    <div className="gameplay-text">

                        <h3>
                            Flight & Control
                        </h3>

                        <p>
                            AIR PLANE is built around flight,
                            movement and player control.
                            The player interacts with the aircraft
                            while progressing through the gameplay.
                        </p>

                        <p>
                            The game focuses on responsive controls,
                            gameplay challenges and an enjoyable
                            flying experience.
                        </p>

                    </div>

                </div>

            </section>


            <section className="screenshots-section">

                <div className="section-label">
                    Screenshots
                </div>

                <h2 className="section-title">
                    AIR PLANE In Action
                </h2>

                <div className="screenshots-grid">

                    <div className="screenshot-item">
                        <img src="/images/airplane_SC1.jpg" alt="Air Plane Screenshot 1" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/airplane_SC2.jpg" alt="Air Plane Screenshot 2" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/airplane_SC3.jpg" alt="Air Plane Screenshot 3" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/airplane_SC4.jpg" alt="Air Plane Screenshot 4" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/airplane_SC5.jpg" alt="Air Plane Screenshot 5" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/airplane_SC6.jpg" alt="Air Plane Screenshot 6" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/airplane_SC7.jpg" alt="Air Plane Screenshot 7" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/airplane_SC8.jpg" alt="Air Plane Screenshot 8" />
                    </div>

                </div>

            </section>


            <section className="about-section">

                <div className="about-content">

                    <div className="section-label">
                        About The Game
                    </div>

                    <h2 className="section-title">
                        AIR PLANE
                    </h2>

                    <p className="about-text">
                        AIR PLANE is a mobile game created by
                        Milad Yousefi.
                        The game focuses on flight,
                        player control and gameplay.
                    </p>

                    <div className="skills">
                        <span className="skill">Mobile</span>
                        <span className="skill">Unity</span>
                        <span className="skill">C#</span>
                        <span className="skill">Game Development</span>
                    </div>

                </div>

            </section>


            <footer className="footer">
                © 2026 Milad Yousefi — Game Developer
            </footer>

        </div>
    );
}

export default AirPlane;