import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Layout({ children, selectedMenu }) {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isLeagueSelectorPopupOpened, setIsLeagueSelectorPopupOpened] = useState(false);
    const [isUserPopupOpened, setIsUserPopupOpened] = useState(false);
    const [selectedLeague, setSelectedLeague] = useState("Premier League");
    const allLeagues = ["Premier League", "Bundesliga", "La Liga", "Serie A"];

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap" />
                <link rel="stylesheet" media="print" onLoad="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap" />
                <noscript>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap" />
                </noscript>
            </Head>
            <header>
                <div className="navigation-bar flex">
                    <div className="left flex">
                        <span id="menu">
                            <Image src="/images/icon-menu.svg" alt="Menu icon" layout="fill" objectFit='contain' objectPosition="left" onClick={() => { setIsMenuOpened(true); setIsLeagueSelectorPopupOpened(false); setIsUserPopupOpened(false); }} />
                        </span>
                        <Link href="/">
                            <a className="flex logo">
                                <span>
                                    <Image src="/images/logo.png" alt="logo" layout="fill" objectFit='contain' objectPosition="left" />
                                </span>
                                <h1>SoccerLogic</h1>
                            </a>
                        </Link>
                        <ul className={`navigation-menu flex ${isMenuOpened ? "mobile" : ""}`}>
                            <li className={selectedMenu == "Matches" ? "active" : ""}>
                                <Link href="/matches">
                                    <a>Matches</a>
                                </Link>
                            </li>
                            <li className={selectedMenu == "Table" ? "active" : ""}>
                                <Link href="/table">
                                    <a>Table</a>
                                </Link>
                            </li>
                            <li className={selectedMenu == "Statistics" ? "active" : ""}>
                                <Link href="/stats">
                                    <a>Statistics</a>
                                </Link>
                            </li>
                            <li className={selectedMenu == "Teams" ? "active" : ""}>
                                <Link href="/teams">
                                    <a>Teams</a>
                                </Link>
                            </li>
                            <li className={selectedMenu == "Players" ? "active" : ""}>
                                <Link href="/players">
                                    <a>Players</a>
                                </Link>
                            </li>
                        </ul>
                        <div className={`overlay ${isMenuOpened ? "mobile" : ""}`}></div>
                        <button id="menu-close-button" aria-label="Close menu button" className={`flex ${isMenuOpened ? "mobile" : ""}`}
                            onClick={() => setIsMenuOpened(false)}>
                            <svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="right flex">
                        <button id="league-selector" className="flex" onClick={() => { setIsLeagueSelectorPopupOpened(!isLeagueSelectorPopupOpened); setIsUserPopupOpened(false); }}>
                            <div className="flex">
                                <span>
                                    <Image src={`/images/Championships/${selectedLeague}.png`} alt={`${selectedLeague}`} layout="fill" objectFit='contain' objectPosition="left" />
                                </span>
                                <span>{selectedLeague}</span>
                            </div>
                            <svg viewBox="0 0 19 13" xmlns="http://www.w3.org/2000/svg" className={isLeagueSelectorPopupOpened ? "rotate" : ""}>
                                <path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fillRule="nonzero" />
                            </svg>
                        </button>
                        <div className={`vertical-flex popup ${!isLeagueSelectorPopupOpened ? "hide" : ""}`} id="league-selector-popup">
                            <div className="content">
                                <ul>
                                    {allLeagues.map((league) => {
                                        return <li key={league} className={(selectedLeague == league) ? "flex active" : "flex"} onClick={() => { setSelectedLeague(league); setIsLeagueSelectorPopupOpened(false); }}>
                                            <span>
                                                <Image src={`/images/Championships/${league}.png`} alt={league} layout="fill" objectFit='contain' objectPosition="left" />
                                            </span>
                                            <span>Premier League</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <button id="user" onClick={() => { setIsUserPopupOpened(!isUserPopupOpened); setIsLeagueSelectorPopupOpened(false); }} className={selectedMenu == "User" ? "active" : ""}>
                            <FontAwesomeIcon icon={faUser} className="avatar" />
                        </button>
                        <div className={`vertical-flex popup ${!isUserPopupOpened ? "hide" : ""}`} id="user-menu">
                            <div className="content">
                                <ul>
                                    <li id="sign_in">
                                        <Link href="/users/sign-in">
                                            <a><span>Sign In</span></a>
                                        </Link>
                                    </li>
                                    <li id="register">
                                        <Link href="/users/register">
                                            <a><span>Register</span></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/users/feedback">
                                            <a><span>Feedback</span></a>
                                        </Link>
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
            <main className="container">{children}</main>
            <footer className="flex">
                <div>
                    <Link href="/">
                        <a className="flex logo">
                            <span>
                                <Image src="/images/logo.png" alt="logo" layout="fill" objectFit='contain' objectPosition="left" />
                            </span>
                            <h1>SoccerLogic</h1>
                        </a>
                    </Link>
                </div>
                <div>A GitHub <a href="https://github.com/NhatTanVu/soccer-logic" target="_blank">project</a></div>
                <div>Developed by: <a href="https://www.linkedin.com/in/tanvu/" target="_blank">Nhat Tan Vu</a></div>
            </footer>
        </>
    )
}