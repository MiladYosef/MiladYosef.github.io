import "../App.css";

function Ludo() {
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
                        LUDO
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
                    Play Ludo
                </h2>

                <p className="about-text">
                    Download Ludo and experience the game yourself.
                </p>

                <div className="hero-buttons">
                    <a
                        href="/downloads/Ludo.apk"
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

                        <h3>
                            Classic Ludo
                        </h3>

                        <p>
                            LUDO brings the classic board game
                            experience to mobile devices with
                            simple controls and engaging gameplay.
                        </p>

                        <p>
                            The game focuses on player interaction,
                            strategy and competition throughout
                            each match.
                        </p>

                    </div>

                </div>

            </section>


            <section className="screenshots-section">

                <div className="section-label">
                    Screenshots
                </div>

                <h2 className="section-title">
                    LUDO In Action
                </h2>

                <div className="screenshots-grid">

                    <div className="screenshot-item">
                        <img src="/images/ludo_SC1.jpg" alt="Ludo Screenshot 1" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/ludo_SC2.jpg" alt="Ludo Screenshot 2" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/ludo_SC3.jpg" alt="Ludo Screenshot 3" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/ludo_SC4.jpg" alt="Ludo Screenshot 4" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/ludo_SC5.jpg" alt="Ludo Screenshot 5" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/ludo_SC6.jpg" alt="Ludo Screenshot 6" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/ludo_SC7.jpg" alt="Ludo Screenshot 7" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/ludo_SC8.jpg" alt="Ludo Screenshot 8" />
                    </div>

                </div>

            </section>

            <section className="about-section">

                <div className="about-content">

                    <div className="section-label">
                        About The Game
                    </div>

                    <h2 className="section-title">
                        LUDO
                    </h2>

                    <p className="about-text">
                        LUDO is a mobile board game created by
                        Milad Yousefi.
                        The game focuses on classic board gameplay,
                        player interaction and competition.
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

export default Ludo;