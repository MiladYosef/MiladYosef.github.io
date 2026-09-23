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
                        TRIO is a game featuring a unique style and three playing pieces; 
                        
                        the challenge lies in maneuvering the pieces between the other two.
                    </p>

                </div>

            </section>

            <footer className="footer">
                © 2026 Milad Yousefi — Game Developer
            </footer>

        </div>
    );
}

export default Trio;