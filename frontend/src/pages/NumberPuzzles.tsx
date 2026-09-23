function NumberPuzzles()  {
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
                        Number Puzzles
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
                    NUMBER PUZZLES In Action
                </h2>

                <div className="screenshots-grid">

                    <div className="screenshot-item">
                        <img src="/images/numberPuzzles_SC1.jpg" alt="Number Puzzles Screenshot 1" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/numberPuzzles_SC2.jpg" alt="Number Puzzles Screenshot 2" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/numberPuzzles_SC3.jpg" alt="Number Puzzles Screenshot 3" />
                    </div>

                    <div className="screenshot-item">
                        <img src="/images/numberPuzzles_SC4.jpg" alt="Number Puzzles Screenshot 4" />
                    </div>

                </div>

            </section>


            <section className="about-section">

                <div className="about-content">

                    <div className="section-label">
                        About The Game
                    </div>

                    <h2 className="section-title">
                        Number Puzzles Game
                    </h2>

                    <p className="about-text">
                        Challenge your logic and problem-solving skills in this number-based puzzle game. 

                        <br /><br />
                        
                        In each level, you are given a set of numbers and operations, and your goal is to find the correct combination that matches the final result.

                        <br /><br />
                        
                        As you progress through the levels, more numbers and increasingly complex calculations are introduced, making each challenge more demanding and engaging.
                        
                        Choose the right numbers, find the correct combination, and complete the level!
                    </p>

                </div>

            </section>


            <footer className="footer">
                © 2026 Milad Yousefi — Game Developer
            </footer>

        </div>
    );
}

export default NumberPuzzles;