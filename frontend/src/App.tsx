import "./App.css";
import Board from "./pages/Board";
import Ludo from "./pages/Ludo";
import AirPlane from "./pages/AirPlane";
import Trio from "./pages/Trio";
import NumberPuzzles from "./pages/NumberPuzzles";


function App() {

    if (window.location.pathname === "/board") {
        return <Board />;
    }

    if (window.location.pathname === "/ludo") {
        return <Ludo />;
    }

    if (window.location.pathname === "/air-plane") {
        return <AirPlane />;
    }

    if (window.location.pathname === "/trio") {
        return <Trio />;
    }

    if (window.location.pathname === "/number-puzzles") {
        return <NumberPuzzles />;
    }

    

    return (
        <div className="app">

            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">YOUSEFI</div>

                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Resume</a></li>
                </ul>
            </nav>

            <section className="hero">
            
            <div className="hero-content hero-layout">
            
            <div className="hero-text">

            <div className="hero-tag">
                Game Developer
            </div>

            <h1>
                MILAD
                <br />
                <span>YOUSEFI</span>
            </h1>

            <p className="hero-description">
                I create games and interactive experiences
                with a focus on gameplay, creativity and fun.
            </p>

            <div className="hero-buttons">
                <a href="#about" className="button button-primary">
                    About Me
                </a>
            </div>

            </div>
            
             <div className="hero-photo">
              <img
                src="/images/_MyImageLinkdin.jpg"
                alt="Milad Yousefi"
              />
            
              </div>
        
            
              </div>
    
            </section>


            {/* Games */}
            <div className="games-grid">

                {/* BOARD */}

                <a href="/board" className="game-card">

                    <div className="game-image">
                        <img
                            src="/images/board_cover.jpg"
                            alt="BOARD"
                        />
                    </div>

                    <div className="game-overlay"></div>

                    <div className="game-info">

                        <h3>
                            BOARD
                        </h3>

                        <p>
                            A board game project focused on
                            strategy, interaction and fun gameplay.
                        </p>

                        <span className="game-link">
                            VIEW GAME →
                        </span>

                    </div>

                </a>


                {/* LUDO */}

                <a href="/ludo" className="game-card">

                    <div className="game-image">
                        <img
                            src="/images/ludo_cover.jpg"
                            alt="LUDO"
                        />
                    </div>

                    <div className="game-overlay"></div>

                    <div className="game-info">

                        <h3>
                            LUDO
                        </h3>

                        <p>
                            A modern multiplayer board game
                            inspired by the classic Ludo experience.
                        </p>

                        <span className="game-link">
                            VIEW GAME →
                        </span>

                    </div>

                </a>


                {/* AIR PLANE */}

                <a href="/air-plane" className="game-card">

                    <div className="game-image">
                        <img
                            src="/images/airplane_cover.jpg"
                            alt="AIR PLANE"
                        />
                    </div>

                    <div className="game-overlay"></div>

                    <div className="game-info">

                        <h3>
                            AIR PLANE
                        </h3>

                        <p>
                            A mobile game project focused on
                            flight, control and gameplay.
                        </p>

                        <span className="game-link">
                            VIEW GAME →
                        </span>

                    </div>

                </a>


                {/* TRIO */}

                <a href="/trio" className="game-card">

                    <div className="game-image">
                        <img
                            src="/images/trio_cover.jpg"
                            alt="TRIO"
                        />
                    </div>

                    <div className="game-overlay"></div>

                    <div className="game-info">

                        <h3>
                            TRIO
                        </h3>

                        <p>
                            A challenging three-piece aiming game
                            where precision and timing are the key.
                        </p>

                        <span className="game-link">
                            VIEW GAME →
                        </span>

                    </div>

                </a>



                {/* NUMBER PUZZLES */}

                <a href="/number-puzzles" className="game-card">

                    <div className="game-image">
                        <img
                            src="/images/NumberPuzzles_cover.jpg"
                            alt="Number Puzzles"
                        />
                    </div>

                    <div className="game-overlay"></div>

                    <div className="game-info">

                        <h3>
                            TRIO
                        </h3>

                        <p>
                            A challenging three-piece aiming game
                            where precision and timing are the key.
                        </p>

                        <span className="game-link">
                            VIEW GAME →
                        </span>

                    </div>

                </a>

            </div>


            {/* About */}


            {/* Resume */}
            <section id="contact" className="about-section">

                <div className="about-content">

                    <div className="section-label">
                        Resume
                    </div>

                    <h2 className="section-title">
                        My Resume
                    </h2>


                    {/* Resume Buttons - English */}
                    <div className="resume-buttons">

                        <a
                            href="/resume/Milad-Yousefi-Resume-EN.pdf"
                            className="button button-primary"
                            download
                        >
                            DOWNLOAD RESUME (JPG) — EN
                        </a>

                        <a
                            href="/resume/Milad-Yousefi-Resume-EN.pdf"
                            className="button button-primary"
                            download
                        >
                            DOWNLOAD RESUME (PDF) — EN
                        </a>

                    </div>


                    <div className="resume-space"></div>


                    {/* Resume Buttons - Persian */}
                    <div className="resume-buttons">

                        <a
                            href="/resume/Milad-Yousefi-Resume-FA.pdf"
                            className="button button-primary"
                            download
                        >
                            DOWNLOAD RESUME (JPG) — FA
                        </a>

                        <a
                            href="/resume/Milad-Yousefi-Resume-FA.pdf"
                            className="button button-primary"
                            download
                        >
                            DOWNLOAD RESUME (PDF) — FA
                        </a>

                    </div>

                </div>

            </section>

            <section id="about" className="about-section">

                <div className="about-content">

                    <div className="section-label">
                        About Me
                    </div>

                    <h2 className="section-title">
                        Game Developer
                    </h2>

                    <p className="about-text">
                    
                    Hello,<br />
                    
                    I am Milad Yousefi,<br />
                    
                    A game developer with hands-on experience in creating five published titles—projects developed
                    
                    solely for my personal portfolio and to gain practical experience in the game publishing process 
                    
                    (without advertisements).
                    
                    <br /><br />
                    
                    I do not hold a formal university degree in this field; my expertise is entirely the result of practical experience in game development.<br />
                    
                    I am eager to collaborate with game development companies on a project (freelance) basis.<br />
                    
                    I am a dedicated individual with a passion for game development and possess strong debugging skills.
                    
                    <br /><br />
                    
                    My English proficiency is at a basic level; please send a message to get in touch.
    
                    </p>

                </div>

            </section>

            <section id="contact" className="about-section">

                <div className="game-info-header">

                    <h2 className="section-title">
                        My Skils
                    </h2>
                </div>

                <div className="game-info-grid">

                    <div className="info-item">
                        <span className="info-label">
                            PLATFORM
                        </span>
                        <span className="info-value">
                            Android / Pc / IOS
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">
                            ENGINE
                        </span>
                        <span className="info-value">
                            Unity (More than 2 years)
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
                            3D Model
                        </span>
                        <span className="info-value">
                            Blender
                        </span>
                    </div>

                </div>

            </section>


            {/* Contact */}
            <section id="contact" className="about-section">

                <div className="about-content">

                    <div className="section-label">
                        Contact
                    </div>

                    <h2 className="section-title">
                        Let's Work Together
                    </h2>

                    <p className="about-text">
                        Interested in working together or want to
                        talk about games? Feel free to get in touch.
                    </p>

                    <div className="contact-links">

                        <div className="contact-item">
                            <div className="contact-title">
                                Gmail
                            </div>

                            <div className="contact-title">
                                miladyosef54@gmail.com
                            </div>

                            <div className="contact-title">
                                ---------------------------
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-title">LinkedIn</div>

                            <a
                                href="https://www.linkedin.com/in/milad-yousefi-unity"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Link: www.linkedin.com/in/milad-yousefi-unity
                            </a>

                            <div className="contact-title">
                                ---------------------------
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-title">Instagram</div>

                            <a
                                href="https://www.instagram.com/studioyousefi"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Link: @studioyousefi
                            </a>
                        </div>

                    </div>

                </div>

            </section>

            {/* Footer */}
            <footer className="footer">
                © 2026 Milad Yousefi — Game Developer
            </footer>

        </div>
    );
}

export default App;