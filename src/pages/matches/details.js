import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/matches.details.module.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faMobile, faRotate, faHourglassStart, faHourglassEnd, faCopyright } from '@fortawesome/free-solid-svg-icons'
import playersData from '../../data/players.json'
import { useMediaQuery } from 'react-responsive'

export default function MatchDetails() {
    const isDesktop = useMediaQuery({ minWidth: 1023.1 });
    const [isDesktopRendered, setIsDesktopRendered] = useState(false);
    const [activeTab, setActiveTab] = useState("details");
    const [activeTeam, setActiveTeam] = useState(""); // 3 values: "", "home-team", "away-team"

    const homeTeam = "Fulham";
    const homeTeamGoalKeeperNumbers = [12];
    const [homeTeamGoalKeeper, setHomeTeamGoalKeeper] = useState([]);
    const homeTeamDefenderNumbers = [3, 4, 13, 23];
    const [homeTeamDefenders, setHomeTeamDefenders] = useState([]);
    const homeTeamMidfielderNumbers = [21, 7, 10, 25, 17];
    const [homeTeamMidfielders, setHomeTeamMidfielders] = useState([]);
    const homeTeamForwardNumbers = [47];
    const [homeTeamForwards, setHomeTeamForwards] = useState([]);
    const homeTeamSubstituteNumbers = [29, 9, 14];
    const [homeTeamSubstitutes, setHomeTeamSubstitutes] = useState([]);
    const captainHomePlayer = [10];
    const goalHomePlayers = [];
    const yellowCardHomePlayers = [3, 10];
    const substitutedOutHomePlayers = [{ number: 7, time: 63 }, { number: 25, time: 75 }, { number: 47, time: 63 }];
    const substitutedInHomePlayers = [{ number: 29, time: 63 }, { number: 9, time: 63 }, { number: 14, time: 75 }];

    const awayTeam = "Arsenal";
    const awayTeamGoalKeeperNumbers = [1];
    const [awayTeamGoalKeeper, setAwayTeamGoalKeeper] = useState([]);
    const awayTeamDefenderNumbers = [3, 6, 16];
    const [awayTeamDefenders, setAwayTeamDefenders] = useState([]);
    const awayTeamMidfielderNumbers = [2, 15, 25, 34];
    const [awayTeamMidfielders, setAwayTeamMidfielders] = useState([]);
    const awayTeamForwardNumbers = [9, 12, 14];
    const [awayTeamForwards, setAwayTeamForwards] = useState([]);
    const awayTeamSubstituteNumbers = [8, 19, 30];
    const [awayTeamSubstitutes, setAwayTeamSubstitutes] = useState([]);
    const captainAwayPlayer = [14];
    const goalAwayPlayers = [6, 9, 14];
    const yellowCardAwayPlayers = [2, 14];
    const substitutedOutAwayPlayers = [{ number: 34, time: 78 }, { number: 9, time: 87 }, { number: 12, time: 75 }];
    const substitutedInAwayPlayers = [{ number: 8, time: 78 }, { number: 19, time: 75 }, { number: 30, time: 87 }];

    const MAX_NUM_1 = 5;
    const MAX_NUM_2 = 3;

    useEffect(() => {
        setHomeTeamGoalKeeper(playersData.filter(p => (p.team == homeTeam) && homeTeamGoalKeeperNumbers.includes(p.number)));
        setHomeTeamDefenders(playersData.filter(p => (p.team == homeTeam) && homeTeamDefenderNumbers.includes(p.number)));
        setHomeTeamMidfielders(playersData.filter(p => (p.team == homeTeam) && homeTeamMidfielderNumbers.includes(p.number)));
        setHomeTeamForwards(playersData.filter(p => (p.team == homeTeam) && homeTeamForwardNumbers.includes(p.number)));
        setHomeTeamSubstitutes(playersData.filter(p => (p.team == homeTeam) && homeTeamSubstituteNumbers.includes(p.number)));

        setAwayTeamGoalKeeper(playersData.filter(p => (p.team == awayTeam) && awayTeamGoalKeeperNumbers.includes(p.number)));
        setAwayTeamDefenders(playersData.filter(p => (p.team == awayTeam) && awayTeamDefenderNumbers.includes(p.number)));
        setAwayTeamMidfielders(playersData.filter(p => (p.team == awayTeam) && awayTeamMidfielderNumbers.includes(p.number)));
        setAwayTeamForwards(playersData.filter(p => (p.team == awayTeam) && awayTeamForwardNumbers.includes(p.number)));
        setAwayTeamSubstitutes(playersData.filter(p => (p.team == awayTeam) && awayTeamSubstituteNumbers.includes(p.number)));

        setIsDesktopRendered(isDesktop);
        if (!isDesktop) setActiveTeam("home-team");
    }, []);

    return (
        <Layout selectedMenu="Matches">
            <Head>
                <meta name="description" content="SoccerLogic | Matches | Fulham vs Arsenal, 2020-2021" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Matches | Fulham vs Arsenal, 2020-2021" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Matches | Fulham vs Arsenal, 2020-2021</title>
            </Head>
            <header className={`hero ${localStyles["hero"]}`}>
                <Link href="/teams/details?team=Fulham">
                    <a className={`${localStyles["home-team"]} ${localStyles["main-row"]} flex`}>
                        <span className={localStyles["img"]}>
                            <Image src="/images/Teams/Fulham.png" layout="fill" objectFit="contain" objectPosition="left" />
                        </span>
                        <h1>
                            <span className="full">Fulham</span>
                            <span className="short">FUL</span>
                        </h1>
                    </a>
                </Link>
                <div className={`${localStyles["score-board"]} ${localStyles["main-row"]} flex ${localStyles["middle-column"]}`}>
                    <h1>0 - 3</h1>
                </div>
                <Link href="/teams/details?team=Arsenal">
                    <a className={`${localStyles["away-team"]} ${localStyles["main-row"]} flex`}>
                        <h1>
                            <span className="full">Arsenal</span>
                            <span className="short">ARS</span>
                        </h1>
                        <span className={localStyles["img"]}>
                            <Image src="/images/Teams/Arsenal.png" layout="fill" objectFit="contain" objectPosition="left" />
                        </span>
                    </a>
                </Link>
                <div className={localStyles["row-2"]}></div>
                <div className={`${localStyles["row-2"]} ${localStyles["middle-column"]}`}>
                    <span>Half Time</span>
                    <br />
                    <span className={`${localStyles["highlight"]} highlight`}>0 - 1</span>
                </div>
                <div className={localStyles["row-2"]}></div>
                <div className={`${localStyles["home-team"]} ${localStyles["row-3"]}`}>
                </div>
                <div className={`${localStyles["kick-off"]} ${localStyles["row-3"]} ${localStyles["middle-column"]}`}>
                    <span>Kick Off</span>
                    <br />
                    <span>04 : 30</span>
                </div>
                <div className={`${localStyles["away-team"]} ${localStyles["row-3"]}`}>
                    <div className="flex">
                        <FontAwesomeIcon icon={faFutbol} />
                        <Link href="/players/details?name=Alexandre%20Lacazette">
                            <a>Alexandre Lacazette</a>
                        </Link>
                        <span>8'</span>
                    </div>
                    <div className="flex">
                        <FontAwesomeIcon icon={faFutbol} />
                        <Link href="/players/details?name=Gabriel%20Magalhães">
                            <a>Gabriel Magalhães</a>
                        </Link>
                        <span>49'</span>
                    </div>
                    <div className="flex">
                        <FontAwesomeIcon icon={faFutbol} />
                        <Link href="/players/details?name=Pierre-Emerick%20Aubameyang">
                            <a>Pierre-Emerick Aubameyang</a>
                        </Link>
                        <span>57'</span>
                    </div>
                </div>
                <div className={`${localStyles["home-team"]} ${localStyles["row-4"]}`}>
                </div>
                <div className={`${localStyles["row-4"]} ${localStyles["middle-column"]}`}>
                    Assists
                </div>
                <div className={`${localStyles["row-4"]} ${localStyles["away-team"]}`}>
                    <div className="flex">
                        <Link href="/players/details?name=Willian">
                            <a>Willian</a>
                        </Link>
                        <span>49', 57'</span>
                    </div>
                </div>
                <div className={localStyles["timeline"]}>
                    <Link href="/teams/details?team=Fulham">
                        <a className="flex">
                            <span className={localStyles["img"]}>
                                <Image src="/images/Teams/Fulham.png" layout="fill" objectFit="contain" objectPosition="left" />
                            </span>
                            FUL
                        </a>
                    </Link>
                    <div className={localStyles["line"]}>
                        <div className={localStyles["ko"]}>KO</div>
                        <div className={localStyles["ht"]}>HT</div>
                        <div className={localStyles["ft"]}>FT</div>

                        <div style={{ left: "8%" }}>
                            8
                            <FontAwesomeIcon icon={faFutbol} className={localStyles["away-team"]} />
                        </div>
                        <div style={{ left: "26%" }}>
                            26
                            <FontAwesomeIcon icon={faMobile} className={`${localStyles["home-team"]} ${localStyles["yellow-card"]}`} />
                        </div>
                        <div style={{ left: "39%" }}>
                            39
                            <FontAwesomeIcon icon={faMobile} className={`${localStyles["away-team"]} ${localStyles["yellow-card"]}`} />
                        </div>
                        <div style={{ left: "49%" }}>
                            49
                            <FontAwesomeIcon icon={faFutbol} className={localStyles["away-team"]} />
                        </div>
                        <div style={{ left: "55%" }}>
                            55
                            <FontAwesomeIcon icon={faMobile} className={`${localStyles["away-team"]} ${localStyles["yellow-card"]}`} />
                        </div>
                        <div style={{ left: "57%" }}>
                            57
                            <FontAwesomeIcon icon={faFutbol} className={localStyles["away-team"]} />
                        </div>
                        <div style={{ left: "61%" }}>
                            61
                            <FontAwesomeIcon icon={faMobile} className={`${localStyles["home-team"]} ${localStyles["yellow-card"]}`} />
                        </div>
                        <div style={{ left: "63%" }}>
                            63
                            <FontAwesomeIcon icon={faRotate} className={`${localStyles["home-team"]}`} />
                        </div>
                        <div style={{ left: "65%" }}>
                            63
                            <FontAwesomeIcon icon={faRotate} className={`${localStyles["home-team"]}`} />
                        </div>
                        <div style={{ left: "77%" }}>
                            75
                            <FontAwesomeIcon icon={faRotate} className={`${localStyles["home-team"]}`} />
                        </div>
                        <div style={{ left: "77%" }}>
                            75
                            <FontAwesomeIcon icon={faRotate} className={`${localStyles["away-team"]}`} />
                        </div>
                        <div style={{ left: "80%" }}>
                            78
                            <FontAwesomeIcon icon={faRotate} className={`${localStyles["away-team"]}`} />
                        </div>
                        <div style={{ left: "89%" }}>
                            87
                            <FontAwesomeIcon icon={faRotate} className={`${localStyles["away-team"]}`} />
                        </div>
                    </div>
                    <Link href="/teams/details?team=Arsenal">
                        <a className="flex">
                            <span className={localStyles["img"]}>
                                <Image src="/images/Teams/Arsenal.png" layout="fill" objectFit="contain" objectPosition="left" />
                            </span>
                            ARS
                        </a>
                    </Link>
                </div>
                <div className={localStyles["filler-row"]}></div>
            </header>
            <ul className={`${localStyles["tab-list"]} tab-list`} role="tablist">
                <li role="tab" tabIndex="0" className={activeTab == "details" ? "active" : ""}
                    onClick={() => { setActiveTab("details"); }}>
                    <span>Details</span>
                </li>
                <li role="tab" tabIndex="0" className={activeTab == "line-ups" ? "active" : ""}
                    onClick={() => { setActiveTab("line-ups"); }}>
                    <span>Line-ups</span>
                </li>
            </ul>
            <div className={`${localStyles["tab-content"]} tab-content`}>
                <div className={`${localStyles["details"]} flex`} style={{ display: activeTab == "details" ? "flex" : "none" }}>
                    <ul>
                        <li className={localStyles["ko"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faHourglassStart} />
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Kick Off!</h3>
                                <div>First Half begins.</div>
                            </div>
                        </li>
                        <li className={localStyles["goal"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faFutbol} />
                                <div>8'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Goal!</h3>
                                <div>Fulham 0, Arsenal 1. <br />For: Alexandre Lacazette (Arsenal).</div>
                            </div>
                        </li>
                        <li className={localStyles["yellow-card"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faMobile} />
                                <div>26'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Yellow Card!</h3>
                                <div>For: Michael Hector (Fulham).</div>
                            </div>
                        </li>
                        <li className={localStyles["yellow-card"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faMobile} />
                                <div>39'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Yellow Card!</h3>
                                <div>For: Pierre-Emerick Aubameyang (Arsenal).</div>
                            </div>
                        </li>
                        <li className={localStyles["ht"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faHourglassEnd} />
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Half-time</h3>
                                <div>First Half ends.<br />Fulham 0, Arsenal 1.</div>
                            </div>
                        </li>
                    </ul>
                    <ul id={localStyles["second-half"]}>
                        <li className={localStyles["ht"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faHourglassEnd} />
                                <FontAwesomeIcon icon={faHourglassStart} />
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Kick Off!</h3>
                                <div>Second Half begins. Fullham 0, Arsenal 1.</div>
                            </div>
                        </li>
                        <li className={localStyles["goal"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faFutbol} />
                                <div>49'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Goal!</h3>
                                <div>Fulham 0, Arsenal 2. <br />For: Gabriel Magalhães (Arsenal).</div>
                            </div>
                        </li>
                        <li className={localStyles["yellow-card"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faMobile} />
                                <div>55'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Yellow Card!</h3>
                                <div>For: Héctor Bellerín (Arsenal).</div>
                            </div>
                        </li>
                        <li className={localStyles["goal"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faFutbol} />
                                <div>57'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Goal!</h3>
                                <div>Fulham 0, Arsenal 3. <br />For: Pierre-Emerick Aubameyang (Arsenal).</div>
                            </div>
                        </li>
                        <li className={localStyles["yellow-card"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faMobile} />
                                <div>61'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Yellow Card!</h3>
                                <div>For: Tom Cairney (Fulham).</div>
                            </div>
                        </li>
                        <li>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faRotate} />
                                <div>63'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Substitution</h3>
                                <div>Substitution, Fulham. <br />Aleksandar Mitrovic replaces Aboubakar Kamara.</div>
                            </div>
                        </li>
                        <li>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faRotate} />
                                <div>63'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Substitution</h3>
                                <div>Substitution, Fulham. <br />André-Frank Zambo Anguissa replaces Neeskens Kebano.</div>
                            </div>
                        </li>
                        <li>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faRotate} />
                                <div>75'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Substitution</h3>
                                <div>Substitution, Fulham. <br />Bobby De Cordova-Reid replaces Josh Onomah.</div>
                            </div>
                        </li>
                        <li>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faRotate} />
                                <div>75'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Substitution</h3>
                                <div>Substitution, Arsenal. <br />Nicolas Pépé replaces Willian.</div>
                            </div>
                        </li>
                        <li>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faRotate} />
                                <div>78'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Substitution</h3>
                                <div>Substitution, Arsenal. <br />Dani Ceballos replaces Granit Xhaka.</div>
                            </div>
                        </li>
                        <li>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faRotate} />
                                <div>87'</div>
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Substitution</h3>
                                <div>Substitution, Arsenal. <br />Eddie Nketiah replaces Alexandre Lacazette.</div>
                            </div>
                        </li>
                        <li className={localStyles["ft"]}>
                            <div className={`${localStyles["meta"]} flex`}>
                                <FontAwesomeIcon icon={faHourglassEnd} />
                                <FontAwesomeIcon icon={faHourglassEnd} />
                            </div>
                            <div className={`${localStyles["content"]} vertical-flex`}>
                                <h3>Full-time</h3>
                                <div>Match ends.<br />Fulham 0, Arsenal 3.</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`${localStyles["line-ups"]} vertical-flex`} style={{ display: activeTab == "line-ups" ? "flex" : "none" }}>
                    <div className={`${localStyles["row-1"]} flex`}>
                        <button className={`form-button ${activeTeam == "home-team" ? "active": ""}`} disabled={isDesktopRendered ? "disabled" : null} onClick={() => { setActiveTeam("home-team"); }}>
                            <span className={localStyles["img"]}>
                                <Image src="/images/Teams/Fulham.png" layout="fill" objectFit="contain" objectPosition="left" />
                            </span>
                        </button>
                        <button className={`form-button ${activeTeam == "away-team" ? "active" : ""}`} disabled={isDesktopRendered ? "disabled" : null} onClick={() => { setActiveTeam("away-team"); }}>
                            <span className={localStyles["img"]}>
                                <Image src="/images/Teams/Arsenal.png" layout="fill" objectFit="contain" objectPosition="left" />
                            </span>
                        </button>
                    </div>
                    <div className={`${localStyles["row-2"]} flex`}>
                        <div className={localStyles["home-team"]} style={{ display: activeTeam == "away-team" ? "none" : "block" }}>
                            <h2>Goalkeeper</h2>
                            <ul>
                                {homeTeamGoalKeeper.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainHomePlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                            </ul>
                            <h2>Defenders</h2>
                            <ul>
                                {homeTeamDefenders.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainHomePlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                                {Array.apply(null, Array(MAX_NUM_1 - homeTeamDefenders.length)).map(() => {
                                    return <li key={Math.random()}></li>;
                                })}
                            </ul>
                            <h2>Midfielders</h2>
                            <ul>
                                {homeTeamMidfielders.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainHomePlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                                {Array.apply(null, Array(MAX_NUM_1 - homeTeamMidfielders.length)).map(() => {
                                    return <li key={Math.random()}></li>;
                                })}
                            </ul>
                            <h2>Forward</h2>
                            <ul>
                                {homeTeamForwards.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainHomePlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                                {Array.apply(null, Array(MAX_NUM_2 - homeTeamForwards.length)).map(() => {
                                    return <li key={Math.random()}></li>;
                                })}
                            </ul>
                            <h2>Substitutes</h2>
                            <ul>
                                {homeTeamSubstitutes.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardHomePlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainHomePlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInHomePlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInHomePlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                            </ul>
                        </div>
                        <div className={localStyles["away-team"]} style={{ display: activeTeam == "home-team" ? "none" : "block" }}>
                            <h2>Goalkeeper</h2>
                            <ul>
                                {awayTeamGoalKeeper.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainAwayPlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                            </ul>
                            <h2>Defenders</h2>
                            <ul>
                                {awayTeamDefenders.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainAwayPlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                                {Array.apply(null, Array(MAX_NUM_1 - awayTeamDefenders.length)).map(() => {
                                    return <li key={Math.random()}></li>;
                                })}
                            </ul>
                            <h2>Midfielders</h2>
                            <ul>
                                {awayTeamMidfielders.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainAwayPlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                                {Array.apply(null, Array(MAX_NUM_1 - awayTeamMidfielders.length)).map(() => {
                                    return <li key={Math.random()}></li>;
                                })}
                            </ul>
                            <h2>Forward</h2>
                            <ul>
                                {awayTeamForwards.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainAwayPlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                                {Array.apply(null, Array(MAX_NUM_2 - awayTeamForwards.length)).map(() => {
                                    return <li key={Math.random()}></li>;
                                })}
                            </ul>
                            <h2>Substitutes</h2>
                            <ul>
                                {awayTeamSubstitutes.map((player) => {
                                    return <li key={player.name}>
                                        <Link href={`/players/details?name=${player.name}`}>
                                            <a className="flex">
                                                <div className={localStyles["number"]}>{player.number}</div>
                                                <span className={localStyles["img"]}>
                                                    <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                                </span>
                                                <span className="flex highlight">
                                                    <span className={localStyles["name"]}>{player.name}</span>
                                                    <span className="flex">
                                                        {goalAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faFutbol} />}
                                                        {yellowCardAwayPlayers.includes(player.number) && <FontAwesomeIcon icon={faMobile} className={localStyles["yellow-card"]} />}
                                                        {captainAwayPlayer.includes(player.number) && <FontAwesomeIcon icon={faCopyright} className={localStyles["captain"]} />}
                                                        {substitutedOutAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-out"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedOutAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                        {substitutedInAwayPlayers.find(p => p.number == player.number) && <span className={`vertical-flex ${localStyles["substitute-in"]}`}>
                                                            <FontAwesomeIcon icon={faRotate} />
                                                            <span>{substitutedInAwayPlayers.find(p => p.number == player.number).time}'</span>
                                                        </span>}
                                                    </span>
                                                </span>
                                                <hr />
                                            </a>
                                        </Link>
                                    </li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}