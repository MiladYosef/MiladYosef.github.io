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
                        "Ludo" is a 3D mobile board game inspired by the classic Ludo game; 
                        
                        its features include new maps, enhanced graphics, and support for up to six players.
                    </p>

                </div>

            </section>


            <footer className="footer">
                © 2026 Milad Yousefi — Game Developer
            </footer>

        </div>
    );
}

export default Ludo;