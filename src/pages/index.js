import Head from 'next/head'
import Image from 'next/image'
import localStyles from '../styles/index.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="SoccerLogic - View latest Soccer Match updates" />
                <meta
                    property="og:description"
                    content="SoccerLogic - View latest Soccer Match updates" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap" />
                <link rel="stylesheet" media="print" onLoad="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap" />
                <noscript>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap" />
                </noscript>
                <title>SoccerLogic - View latest Soccer Match updates</title>
            </Head>
            <header>
                <div className="navigation-bar flex">
                    <div className="left flex">
                        <img id="menu" src="./images/icon-menu.svg" alt="icon menu" />
                        <a className="flex logo" href="./index.html">
                            <img src="./images/logo.png" alt="logo" />
                            <h1>SoccerLogic</h1>
                        </a>
                        <ul className="navigation-menu flex">
                            <li>
                                <a href="./matches.html">Matches</a>
                            </li>
                            <li>
                                <a href="./table.html">Table</a>
                            </li>
                            <li>
                                <a href="./stats.html">Statistics</a>
                            </li>
                            <li>
                                <a href="./teams.html">Teams</a>
                            </li>
                            <li>
                                <a href="./players.html">Players</a>
                            </li>
                        </ul>
                        <div className="overlay"></div>
                        <button id="menu-close-button" aria-label="Close menu button" className="flex">
                            <svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="right flex">
                        <button id="league-selector" className="flex">
                            <div className="flex">
                                <img src="./images/Championships/Premier League.png" alt="" />
                                <span>Premier League</span>
                            </div>
                            <svg viewBox="0 0 19 13" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fillRule="nonzero" />
                            </svg>
                        </button>
                        <div className="vertical-flex popup hide" id="league-selector-popup">
                            <div className="content">
                                <ul>
                                    <li className="active">
                                        <img src="./images/Championships/Premier League.png" alt="" />
                                        <span>Premier League</span>
                                    </li>
                                    <li>
                                        <img src="./images/Championships/Bundesliga.png" alt="" />
                                        <span>Bundesliga</span>
                                    </li>
                                    <li>
                                        <img src="./images/Championships/La Liga.png" alt="" />
                                        <span>La Liga</span>
                                    </li>
                                    <li>
                                        <img src="./images/Championships/Serie A.png" alt="" />
                                        <span>Serie A</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button id="user">
                            <i className="fa-solid fa-user avatar"></i>
                        </button>
                        <div className="vertical-flex popup hide" id="user-menu">
                            <div className="content">
                                <ul>
                                    <li id="sign_in">
                                        <a href="./users/sign-in.html"><span>Sign In</span></a>
                                    </li>
                                    <li id="register">
                                        <a href="./users/register.html"><span>Register</span></a>
                                    </li>
                                    <li>
                                        <a href="./users/feedback.html"><span>Feedback</span></a>
                                    </li>
                                    <li id="sign_out">
                                        <a href="#"><span>Sign Out</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="container">
                <header className={`hero ${localStyles["hero"]}`}>
                    <div className={localStyles["background"]}></div>
                    <div className={localStyles["content"]}>
                        <h1>Matches</h1>
                        <hr />
                        <h4>Keep up to date with latest match news from top soccer leagues.</h4>
                        <a href="./matches.html" className="form-button">View All Matches</a>
                    </div>
                </header>
                <header className={`hero ${localStyles["hero"]}`}>
                    <div className={localStyles["background"]}></div>
                    <div className={localStyles["content"]}>
                        <h1>Teams</h1>
                        <hr />
                        <h4>Search for your favourite teams, buy their tickets and merchandise.</h4>
                        <a href="./teams.html" className="form-button">View All Teams</a>
                    </div>
                </header>
                <header className={`hero ${localStyles["hero"]}`}>
                    <div className={localStyles["background"]}></div>
                    <div className={localStyles["content"]}>
                        <h1>Players</h1>
                        <hr />
                        <h4>Find and follow your favourite players on social media.</h4>
                        <a href="./players.html" className="form-button">View All Players</a>
                    </div>
                </header>
            </main>
            <footer className="flex">
                <div>
                    <a className="flex logo" href="./index.html">
                        <img src="./images/logo.png" alt="logo" />
                        <h1>SoccerLogic</h1>
                    </a>
                </div>
                <div>A GitHub <a href="https://github.com/NhatTanVu/soccer-logic" target="_blank">project</a></div>
                <div>Developed by: <a href="https://www.linkedin.com/in/tanvu/" target="_blank">Nhat Tan Vu</a></div>
            </footer>
        </>
    )
}
