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
                        The core challenge of this game lies in upgrading your aircraft to cover greater distances.
                    </p>

                </div>

            </section>


            <footer className="footer">
                © 2026 Milad Yousefi — Game Developer
            </footer>

        </div>
    );
}

export default AirPlane;