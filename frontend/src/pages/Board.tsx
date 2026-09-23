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
                            Android Mobile
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
                            C# Programming
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
                        "BOARD" is a mobile game inspired by the chalkboard; 
                        <br /><br />
                        all objects are designed to resemble chalk drawings, and the game features numerous environmental challenges.
                    </p>

                </div>

            </section>


            <footer className="footer">
                © 2026 Milad Yousefi — Game Developer
            </footer>

        </div>
    );
}

export default Board;