import "../App.css";

function Board() {
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
                        BOARD
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
                    Play Board
                </h2>

                <p className="about-text">
                    Download Board and experience the game yourself.
                </p>

                <div className="hero-buttons">
                    <a
                        href="/downloads/Board.apk"
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
                            Strategy & Gameplay
                        </h3>

                        <p>
                            BOARD is built around engaging gameplay,
                            simple controls and strategic decisions.
                            The player interacts with the game board
                            to progress through each challenge.
                        </p>

                        <p>
                            The gameplay focuses on player interaction,
                            decision making and an enjoyable game experience.
                        </p>

                    </div>

                </div>

            </section>


            <section className="screenshots-section">

                <div className="section-label">
                    Screenshots
                </div>

                <h2 className="section-title">
                    BOARD In Action
                </h2>

                <div className="screenshots-grid">

                    <div className="screenshot-item">
                        <img src="/images/board_SC1.jpg" alt="Board Screenshot 1" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/board_SC2.jpg" alt="Board Screenshot 2" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/board_SC3.jpg" alt="Board Screenshot 3" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/board_SC4.jpg" alt="Board Screenshot 4" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/board_SC5.jpg" alt="Board Screenshot 5" />
                    </div>

                </div>

            </section>


            <section className="about-section">

                <div className="about-content">

                    <div className="section-label">
                        About The Game
                    </div>

                    <h2 className="section-title">
                        BOARD
                    </h2>

                    <p className="about-text">
                        BOARD is a mobile game created by Milad Yousefi.
                        The game focuses on engaging gameplay,
                        player interaction and strategic decisions.
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

export default Board;