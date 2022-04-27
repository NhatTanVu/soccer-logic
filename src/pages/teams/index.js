import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/teams.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import teamData from '../data/teams.json';
import React, { useState, useEffect } from 'react';

export default function Teams() {
    const allTeamNames = Object.keys(teamData).sort();
    const isDesktop = useMediaQuery({ minWidth: 1023.1 });
    const [teamNames, setTeamNames] = useState([]);
    const [searchText, setSearchText] = useState("");
    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };
    const handleSearchTextKeyPress = (e) => {
        if (e.key === "Enter") {
            searchButtonClick(e);
        }
    };
    const searchButtonClick = (e) => {
        setTeamNames(allTeamNames.filter((value) => {
            return value.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
        }));
    };

    useEffect(() => {
        setTeamNames(allTeamNames);
    }, []);

    return (
        <Layout selectedMenu="Teams">
            <Head>
                <meta name="description" content="SoccerLogic | Teams" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Teams" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Teams</title>
            </Head>
            <header className={`${localStyles["hero"]} hero`}>
                <div className={localStyles["background"]}>
                    {isDesktop ? <Image src="/images/team.jpg" layout="fill" objectFit="cover" objectPosition="50% 30%" />
                        : <Image src="/images/team_mobile.jpg" layout="fill" objectFit="cover" objectPosition="50% 30%" />}
                </div>
                <h1>Teams</h1>
                <div className={localStyles["search_container"]}>
                    <input id={localStyles["search_text"]} type="text" placeholder="Search for a Team" value={searchText} onChange={handleSearchTextChange} onKeyPress={handleSearchTextKeyPress} />
                    <div id={localStyles["search_button"]} role="button" tabIndex="0" onClick={searchButtonClick}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
            </header>
            <section id={localStyles["teams"]}>
                <ul>
                    {teamNames.map((name) => {
                        return <li key={name} className={`${localStyles["card"]} card`}>
                            <Link href={`/teams/details?team=${name}`}>
                                <a>
                                    <div className={localStyles["indexImg"]}>
                                        <div className={localStyles["indexBadge"]}>
                                            <span>
                                                <Image alt={`${name} logo`} src={`/images/Teams/${name}.png`} layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className={localStyles["clubInfo"]}>
                                        <div className={localStyles["nameContainer"]}>
                                            <h4 className={localStyles["clubName"]}>{name}</h4>
                                            <div className={localStyles["stadiumName"]}>{teamData[name].stadium_name}</div>
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                                    </div>
                                </a>
                            </Link>
                        </li>;
                    })}
                </ul>
            </section>
        </Layout>
    )
}