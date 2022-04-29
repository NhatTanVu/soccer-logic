import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/teams.details.module.css'
import localMatchesStyles from '../../styles/matches.module.css'
import teamsData from '../../data/teams.json'
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

export default function TeamDetails() {
    const [activeTab, setActiveTab] = useState("overview");
    const {query, isReady} = useRouter();
    const [team, setTeam] = useState();
    const [teamDetails, setTeamDetails] = useState();

    useEffect(() => {
        if (isReady) {
            if (teamsData[query.team]) {
                setTeam(query.team);
                setTeamDetails(teamsData[query.team]);
            }
            else {
                Router.push('/teams');
            }
        }
    }, [query]);

    return (
        <Layout selectedMenu="Teams">
            <Head>
                <meta name="description" content={`SoccerLogic | Teams | ${team}`} />
                <meta
                    property="og:description"
                    content={`SoccerLogic | Teams | ${team}`} />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>{`SoccerLogic | Teams | ${team}`}</title>
            </Head>
            <header className={`hero ${localStyles["hero"]}`}>
                <div className={localStyles["imgContainer"]}>
                    <span className={localStyles["club_photo"]}>
                        {team && <Image src={`/images/Teams/${team}.png`} layout="fill" objectFit="contain" objectPosition="left" />}
                    </span>
                </div>
                <div className={localStyles["club_info"]}>
                    <span className={localStyles["club_name"]}>{team}</span>
                    <div id={localStyles["stadium_name"]}>{teamDetails ? teamDetails.stadium_name : ""}</div>
                    <div>
                        <span>Official website: </span>
                        <h4>
                            <Link href={teamDetails ? teamDetails.official_website.href : ""}>
                                <a className={localStyles["official_website"]} target="_blank">
                                    {teamDetails ? teamDetails.official_website.textContent : ""}
                                </a>
                            </Link>
                        </h4>
                    </div>
                    <ul className={`${localStyles["socialOptions"]} ${localStyles["flex"]} flex`}>
                        <li>
                            <a id={localStyles["club_facebook"]} target="_blank" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a id={localStyles["club_twitter"]} target="_blank" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20"><path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a id={localStyles["club_instagram"]} target="_blank" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <span className={localStyles["club_photo"]}>
                    {team && <Image src={`/images/Teams/${team}.png`} layout="fill" objectFit="contain" objectPosition="left" />}
                </span>
            </header>
            <ul className={`${localStyles["tab-list"]} tab-list`} role="tablist">
                <li role="tab" tabIndex="0" className={activeTab == "overview" ? "active" : ""}
                    onClick={() => { setActiveTab("overview"); }}>
                    <span>Overview</span>
                </li>
                <li role="tab" tabIndex="0" className={activeTab == "squad" ? "active" : ""}
                    style={{ display: team == "Arsenal" ? "block" : "none" }}
                    onClick={() => { setActiveTab("squad"); }}>
                    <span>Squad</span>
                </li>
                <li role="tab" tabIndex="0" className={activeTab == "results" ? "active" : ""}
                    style={{ display: team == "Arsenal" || team == "Fulham" ? "block" : "none" }}
                    onClick={() => { setActiveTab("results"); }}>
                    <span>Results</span>
                </li>
            </ul>
            <div className={`${localStyles["tab-content"]} tab-content`}>
                <div className={`${localStyles["overview"]} ${localStyles["grid"]} grid`} style={{ display: activeTab == "overview" ? "grid" : "none" }}>
                    <div className={localStyles["left-upper"]}>
                        <h2>Visit <span className={localStyles["club_name"]}>{team}</span> website</h2>
                        <div>
                            <Link href={teamDetails ? teamDetails.official_website.href : ""}>
                                <a className={localStyles["official_website"]} target="_blank">
                                    {teamDetails ? teamDetails.official_website.textContent : ""}
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={localStyles["left-lower"]}>
                        <h2>Standing</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Pos
                                    </th>
                                    <th>
                                        Team
                                    </th>
                                    <th>
                                        Pl
                                    </th>
                                    <th>
                                        GD
                                    </th>
                                    <th>
                                        Pts
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamDetails && teamDetails.previous_standing && <tr>
                                    <td>
                                        {teamDetails.previous_standing[0]}
                                    </td>
                                    <td>
                                        {teamDetails.previous_standing[1]}
                                    </td>
                                    <td>
                                        {teamDetails.previous_standing[2]}
                                    </td>
                                    <td>
                                        {teamDetails.previous_standing[3]}
                                    </td>
                                    <td>
                                        {teamDetails.previous_standing[4]}
                                    </td>
                                </tr>}
                                {teamDetails && teamDetails.current_standing && <tr id={localStyles["current_standing"]}>
                                    <td>
                                        {teamDetails.current_standing[0]}
                                    </td>
                                    <td>
                                        {teamDetails.current_standing[1]}
                                    </td>
                                    <td>
                                        {teamDetails.current_standing[2]}
                                    </td>
                                    <td>
                                        {teamDetails.current_standing[3]}
                                    </td>
                                    <td>
                                        {teamDetails.current_standing[4]}
                                    </td>
                                </tr>}
                                {teamDetails && teamDetails.next_standing && <tr>
                                    <td>
                                        {teamDetails.next_standing[0]}
                                    </td>
                                    <td>
                                        {teamDetails.next_standing[1]}
                                    </td>
                                    <td>
                                        {teamDetails.next_standing[2]}
                                    </td>
                                    <td>
                                        {teamDetails.next_standing[3]}
                                    </td>
                                    <td>
                                        {teamDetails.next_standing[4]}
                                    </td>
                                </tr>}
                            </tbody>
                        </table>
                        <Link href="/table">
                            <a>View Table</a>
                        </Link>
                    </div>
                    <div className={localStyles["right"]}>
                        <h2>Latest Goals</h2>
                        {team != "Arsenal" && <div id={localStyles["no_latest_goals"]}>N/A</div>}
                        {team == "Arsenal" && <table id={localStyles["latest_goals"]}>
                            <thead>
                                <tr>
                                    <th>
                                        Match
                                    </th>
                                    <th>
                                        Player
                                    </th>
                                    <th>
                                        Time
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link href="/matches/details">
                                            <a>Fulham - Arsenal</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href="/players/details?name=Pierre-Emerick%20Aubameyang">
                                            <a className={`${localStyles["playerName"]} ${localStyles["flex"]} flex`}>
                                                <span className={localStyles["img"]}>
                                                    <Image src="/images/Players/Pierre-Emerick Aubameyang.png" alt="Photo for Pierre-Emerick Aubameyang" layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="highlight">Pierre-Emerick Aubameyang</span>
                                            </a>
                                        </Link>
                                    </td>
                                    <td className="time">
                                        57'
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="/matches/details">
                                            <a>Fulham - Arsenal</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href="/players/details?name=Gabriel%20Magalhães">
                                            <a className={`${localStyles["playerName"]} ${localStyles["flex"]} flex`}>
                                                <span className={localStyles["img"]}>
                                                    <Image src="/images/Players/Gabriel Magalhães.png" alt="Photo for Gabriel Magalhães" layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="highlight">Gabriel Magalhães</span>
                                            </a>
                                        </Link>
                                    </td>
                                    <td>
                                        49'
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="/matches/details">
                                            <a>Fulham - Arsenal</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href="/players/details?name=Alexandre%20Lacazette">
                                            <a className={`${localStyles["playerName"]} ${localStyles["flex"]} flex`}>
                                                <span className={localStyles["img"]}>
                                                    <Image src="/images/Players/Alexandre Lacazette.png" alt="Photo for Alexandre Lacazette" layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="highlight">Alexandre Lacazette</span>
                                            </a>
                                        </Link>
                                    </td>
                                    <td>
                                        8'
                                    </td>
                                </tr>
                            </tbody>
                        </table>}
                        <h2>Latest Matches</h2>
                        {(team != "Arsenal" && team != "Fulham") && <div id={localStyles["no_matches"]}>N/A</div>}
                        {(team == "Arsenal" || team == "Fulham") && <section className={`${localStyles["matches"]} ${localMatchesStyles["matches"]}`}>
                            <time>
                                Saturday 12 September 2020
                            </time>
                            <ul className="vertical-flex">
                                <li>
                                    <Link href="/matches/details">
                                        <a className="flex">
                                            <div className="flex">
                                                <div className="flex">
                                                    <span>Fulham</span>
                                                    <span>
                                                        <Image src="/images/Teams/Fulham.png" alt="Fulham logo" layout="fill" objectFit="contain" objectPosition="left" />
                                                    </span>
                                                </div>
                                                <div className={`${localMatchesStyles["score"]} flex ${localMatchesStyles["flex"]}`}><span>0</span><span>3</span></div>
                                                <div className="flex">
                                                    <span>
                                                        <Image src="/images/Teams/Arsenal.png" alt="Arsenal logo" layout="fill" objectFit="contain" objectPosition="left" />
                                                    </span>
                                                    <span>Arsenal</span>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <span>
                                                    <Image src="/images/field.png" alt="Craven Cottage, London" layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span>Craven Cottage, <strong>London</strong></span>
                                            </div>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </section>}
                        <Link href="/matches">
                            <a>View All Matches</a>
                        </Link>
                    </div>
                </div>
                <div className={localStyles["squad"]} style={{ display: activeTab == "squad" ? "block" : "none" }}>
                    <h2>Goalkeepers</h2>
                    <ul className={`${localStyles["squad-list"]} ${localStyles["grid"]} grid`}>
                        <li>
                            <Link href="/players/details?name=Bernd%20Leno">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>1.</div>
                                            <h4>Bernd Leno</h4>
                                            <div>Goalkeeper</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Bernd Leno.png" alt="Photo for Bernd Leno" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Germany</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <h2>Defenders</h2>
                    <ul className={`${localStyles["squad-list"]} ${localStyles["grid"]} grid`}>
                        <li>
                            <Link href="/players/details?name=Hector%20Bellerin">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>2.</div>
                                            <h4>Hector Bellerin</h4>
                                            <div>Defender</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Hector Bellerin.png" alt="Photo for Hector Bellerin" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Spain</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Kieran%20Tierney">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>3.</div>
                                            <h4>Kieran Tierney</h4>
                                            <div>Defender</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Kieran Tierney.png" alt="Photo for Kieran Tierney" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Scotland</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Gabriel%20Magalhães">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>6.</div>
                                            <h4>Gabriel Magalhães</h4>
                                            <div>Defender</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Gabriel Magalhães.png" alt="Photo for Gabriel Magalhães" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Brazil</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">1</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Rob%20Holding">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>16.</div>
                                            <h4>Rob Holding</h4>
                                            <div>Defender</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Rob Holding.png" alt="Photo for Rob Holding" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">England</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <h2>Midfielders</h2>
                    <ul className={`${localStyles["squad-list"]} ${localStyles["grid"]} grid`}>
                        <li>
                            <Link href="/players/details?name=Dani%20Ceballos">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>8.</div>
                                            <h4>Dani Ceballos</h4>
                                            <div>Midfielder</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Dani Ceballos.png" alt="Photo for Dani Ceballos" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Spain</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Ainsley%20Maitland-Niles">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>15.</div>
                                            <h4>Ainsley Maitland-Niles</h4>
                                            <div>Midfielder</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Ainsley Maitland-Niles.png" alt="Photo for Ainsley Maitland-Niles" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">England</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Mohamed%20Elneny">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>25.</div>
                                            <h4>Mohamed Elneny</h4>
                                            <div>Midfielder</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Mohamed Elneny.png" alt="Photo for Mohamed Elneny" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Egypt</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Granit%20Xhaka">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>34.</div>
                                            <h4>Granit Xhaka</h4>
                                            <div>Midfielder</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Granit Xhaka.png" alt="Photo for Granit Xhaka" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Switzerland</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <h2>Forwards</h2>
                    <ul className={`${localStyles["squad-list"]} ${localStyles["grid"]} grid`}>
                        <li>
                            <Link href="/players/details?name=Alexandre%20Lacazette">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>9.</div>
                                            <h4>Alexandre Lacazette</h4>
                                            <div>Forward</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Alexandre Lacazette.png" alt="Photo for Alexandre Lacazette" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">France</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">1</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Willian">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>12.</div>
                                            <h4>Willian</h4>
                                            <div>Forward</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Willian.png" alt="Photo for Willian" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Brazil</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Pierre-Emerick%20Aubameyang">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>14.</div>
                                            <h4>Pierre-Emerick Aubameyang</h4>
                                            <div>Forward</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Pierre-Emerick Aubameyang.png" alt="Photo for Pierre-Emerick Aubameyang" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Gabon</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">1</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Nicolas%20Pépé">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>19.</div>
                                            <h4>Nicolas Pépé</h4>
                                            <div>Forward</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Nicolas Pépé.png" alt="Photo for Nicolas Pépé" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">Cote D’Ivoire</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/players/details?name=Eddie%20Nketiah">
                                <a>
                                    <header>
                                        <div>
                                            <div className={localStyles["pos"]}>30.</div>
                                            <h4>Eddie Nketiah</h4>
                                            <div>Forward</div>
                                        </div>
                                        <span className={localStyles["img"]}>
                                            <Image src="/images/Players/Eddie Nketiah.png" alt="Photo for Eddie Nketiah" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </header>
                                    <div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Nationality</span>
                                            <span className="highlight">England</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Appearances</span>
                                            <span className="highlight">38</span>
                                        </div>
                                        <div className={`${localStyles["flex"]} flex`}>
                                            <span>Goals</span>
                                            <span className="highlight">0</span>
                                        </div>
                                        <div className="highlight">
                                            <span>View Player</span>
                                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={localStyles["results"]} style={{ display: activeTab == "results" ? "block" : "none" }}>
                    <section className={`${localMatchesStyles["matches"]} ${localStyles["matches"]}`}>
                        <time>
                            Saturday 12 September 2020
                        </time>
                        <ul className="vertical-flex">
                            <li>
                                <Link href="/matches/details">
                                    <a className="flex">
                                        <div className="flex">
                                            <div className="flex">
                                                <span>Fulham</span>
                                                <span>
                                                    <Image src="/images/Teams/Fulham.png" alt="Fulham logo" layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                            </div>
                                            <div className={`${localMatchesStyles["score"]} flex ${localMatchesStyles["flex"]}`}><span>0</span><span>3</span></div>
                                            <div className="flex">
                                                <span>
                                                    <Image src="/images/Teams/Arsenal.png" alt="Arsenal logo" layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span>Arsenal</span>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span>
                                                <Image src="/images/field.png" alt="Craven Cottage, London" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                            <span>Craven Cottage, <strong>London</strong></span>
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <Link href="/matches">
                        <a>View All Matches</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}