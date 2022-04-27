import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/players.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import allPlayers from '../data/players.json';
import React, { useState, useEffect } from 'react';

export default function Players() {
    const isDesktop = useMediaQuery({ minWidth: 1023.1 });
    const [players, setPlayers] = useState([]);
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
        setPlayers(allPlayers.filter((player) => {
            return player.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
        }));
    };

    useEffect(() => {
        setPlayers(allPlayers);
    }, []);

    return (
        <Layout selectedMenu="Players">
            <Head>
                <meta name="description" content="SoccerLogic | Players" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Players" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Players</title>
            </Head>
            <header className={`${localStyles["hero"]} hero`}>
                <div className={localStyles["background"]}>
                    {isDesktop ? <Image src="/images/player.jpg" layout="fill" objectFit="cover" objectPosition="center" />
                        : <Image src="/images/player_mobile.jpg" layout="fill" objectFit="cover" objectPosition="center" />}
                </div>
                <h1>Players</h1>
                <div className={localStyles["search_container"]}>
                    <input id={localStyles["search_text"]} type="text" placeholder="Search for a Player" value={searchText} onChange={handleSearchTextChange} onKeyPress={handleSearchTextKeyPress} />
                    <div id={localStyles["search_button"]} role="button" tabIndex="0" onClick={searchButtonClick}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
            </header>
            <table id={localStyles["players"]} className="card">
                <thead>
                    <tr>
                        <th>
                            Player
                        </th>
                        <th className={localStyles["position"]}>
                            Position
                        </th>
                        <th>
                            Team
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => {
                        return <tr key={player.name}>
                            <td>
                                <Link href={`/players/details?name=${player.name}`}>
                                    <a className={localStyles["playerName"]}>
                                        <span className={localStyles["img"]}>
                                            <Image src={`/images/Players/${player.name}.png`} alt={`Photo for ${player.name}`} layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                        <span>{player.name}</span>
                                    </a>
                                </Link>
                            </td>
                            <td className={localStyles["position"]}>
                                {player.position}
                            </td>
                            <td>
                                <Link href={`/teams/details?team=${player.team}`}>
                                    <a>
                                        {player.team}
                                    </a>
                                </Link>
                            </td>
                        </tr>;
                    })}
                    <tr><td colSpan="3"></td></tr>
                </tbody>
            </table>
        </Layout>
    )
}