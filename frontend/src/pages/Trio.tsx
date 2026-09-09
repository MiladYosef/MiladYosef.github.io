import "../App.css";

function Trio() {
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
                        TRIO
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
                    Play TRIO
                </h2>

                <p className="about-text">
                    Download TRIO and experience the game yourself.
                </p>

                <div className="hero-buttons">
                    <a
                        href="/downloads/TRIO.apk"
                        className="button button-primary"
                        download
                    >
                        DOWNLOAD GAME
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

                        <h3>Precision & Timing</h3>

                        <p>
                            TRIO is built around a simple idea:
                            precise aiming and controlled movement.
                            The player needs to carefully choose the
                            direction and timing of each move.
                        </p>

                        <p>
                            Each challenge is designed to test the
                            player's accuracy, control and ability
                            to understand the situation before making
                            a move.
                        </p>

                    </div>

                </div>

            </section>

            <section className="screenshots-section">

                <div className="section-label">
                    Screenshots
                </div>

                <h2 className="section-title">
                    TRIO In Action
                </h2>

                <div className="screenshots-grid">

                    <div className="screenshot-item">
                        <img src="/images/trio_SC1.jpg" alt="TRIO Screenshot 1" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC2.jpg" alt="TRIO Screenshot 2" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC3.jpg" alt="TRIO Screenshot 3" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC4.jpg" alt="TRIO Screenshot 4" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC5.jpg" alt="TRIO Screenshot 5" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC6.jpg" alt="TRIO Screenshot 6" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC7.jpg" alt="TRIO Screenshot 7" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC8.jpg" alt="TRIO Screenshot 8" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC9.jpg" alt="TRIO Screenshot 9" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/trio_SC10.jpg" alt="TRIO Screenshot 10" />
                    </div>

                </div>

            </section>

            <section className="about-section">

                <div className="about-content">

                    <div className="section-label">
                        About The Game
                    </div>

                    <h2 className="section-title">
                        TRIO
                    </h2>

                    <p className="about-text">
                        TRIO is a mobile game created by Milad Yousefi.
                        The game focuses on challenging gameplay,
                        precision and player control.
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

export default Trio;