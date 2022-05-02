import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import localStyles from '../styles/stats.module.css'

export default function Statistics() {
    return (
        <Layout selectedMenu="Statistics">
            <Head>
                <meta name="description" content="SoccerLogic | Statistics" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Statistics" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Statistics</title>
            </Head>
            <header className="hero">
                <h1>Statistics</h1>
            </header>
            <section id={localStyles["player"]}>
                <header>
                    <h2>Player Statistics</h2>
                </header>
                <ul>
                    <li className={`${localStyles["card"]} card`}>
                        <header>
                            <h3>Goals</h3>
                        </header>
                        <ul>
                            <li className={localStyles["statsHero"]}>
                                <div className={localStyles["statsInfo"]}>
                                    <div className={localStyles["pos"]}>1.</div>
                                    <Link href="/players/details?name=Harry%20Kane">
                                        <a className={localStyles["statsName"]}>Harry Kane</a>
                                    </Link>
                                    <Link href="/teams/details?team=Tottenham%20Hotspur">
                                        <a className={localStyles["statsNameSecondary"]}>Tottenham Hotspur</a>
                                    </Link>
                                    <div className={localStyles["statsNum"]}>
                                        23
                                    </div>
                                </div>
                                <div className={localStyles["heroBadgeContainer"]}>
                                    <Link href="/teams/details?team=Tottenham%20Hotspur">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/Tottenham Hotspur.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["imgCropContainer"]}>
                                    <Link href="/players/details?name=Harry%20Kane">
                                        <a>
                                            <span className={localStyles["statsCardImg"]}>
                                                <Image src="/images/Players/Harry Kane.png" layout="fill" objectFit="contain" objectPosition="left" alt="Photo for Harry Kane" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>2.</div>
                                <div className={localStyles["statsBadge"]}>
                                    <Link href="/teams/details?team=Liverpool">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/Liverpool.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/players/details?name=Mohamed%20Salah">
                                        <a className={localStyles["statsName"]}>
                                            Mohamed Salah
                                        </a>
                                    </Link>
                                    <Link href="/teams/details?team=Liverpool">
                                        <a className={localStyles["statsNameSecondary"]}>
                                            Liverpool
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    22
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>3.</div>
                                <div className={localStyles["statsBadge"]}>
                                    <Link href="/teams/details?team=Manchester%20United">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/Manchester United.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/players/details?name=Bruno%20Fernandes">
                                        <a className={localStyles["statsName"]}>
                                            Bruno Fernandes
                                        </a>
                                    </Link>
                                    <Link href="/teams/details?team=Manchester%20United">
                                        <a className={localStyles["statsNameSecondary"]}>
                                            Manchester United
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    18
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="card">
                        <header>
                            <h3>Yellow Cards</h3>
                        </header>
                        <ul>
                            <li className={localStyles["statsHero"]}>
                                <div className={localStyles["statsInfo"]}>
                                    <div className={localStyles["pos"]}>1.</div>
                                    <Link href="/players/details?name=John%20McGinn">
                                        <a className={localStyles["statsName"]}>John McGinn</a>
                                    </Link>
                                    <Link href="/teams/details?team=Aston%20Villa">
                                        <a className={localStyles["statsNameSecondary"]}>Aston Villa</a>
                                    </Link>
                                    <div className={localStyles["statsNum"]}>
                                        12
                                    </div>
                                </div>
                                <div className={localStyles["heroBadgeContainer"]}>
                                    <Link href="/teams/details?team=Aston%20Villa">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/Aston Villa.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["imgCropContainer"]}>
                                    <Link href="/players/details?name=John%20McGinn">
                                        <a>
                                            <span className={localStyles["statsCardImg"]}>
                                                <Image src="/images/Players/John McGinn.png" layout="fill" objectFit="contain" objectPosition="left" alt="Photo for John McGinn" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>2.</div>
                                <div className={localStyles["statsBadge"]}>
                                    <Link href="/teams/details?team=Crystal%20Palace">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/Crystal Palace.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/players/details?name=Conor%20Gallagher">
                                        <a className={localStyles["statsName"]}>
                                            Conor Gallagher
                                        </a>
                                    </Link>
                                    <Link href="/teams/details?team=Crystal%20Palace">
                                        <a className={localStyles["statsNameSecondary"]}>
                                            Crystal Palace
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    11
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>2.</div>
                                <div className={localStyles["statsBadge"]}>
                                    <Link href="/teams/details?team=Manchester%20United">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/Manchester United.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/players/details?name=Harry%20Maguire">
                                        <a className={localStyles["statsName"]}>
                                            Harry Maguire
                                        </a>
                                    </Link>
                                    <Link href="/teams/details?team=Manchester%20United">
                                        <a className={localStyles["statsNameSecondary"]}>
                                            Manchester United
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    11
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="card">
                        <header>
                            <h3>Red Cards</h3>
                        </header>
                        <ul>
                            <li className={localStyles["statsHero"]}>
                                <div className={localStyles["statsInfo"]}>
                                    <div className={localStyles["pos"]}>1.</div>
                                    <Link href="/players/details?name=Raúl%20Jiménez">
                                        <a className={localStyles["statsName"]}>Raúl Jiménez</a>
                                    </Link>
                                    <Link href="/teams/details?team=Wolverhampton%20Wanderers">
                                        <a className={localStyles["statsNameSecondary"]}>Wolverhampton Wanderers</a>
                                    </Link>
                                    <div className={localStyles["statsNum"]}>
                                        2
                                    </div>
                                </div>
                                <div className={localStyles["heroBadgeContainer"]}>
                                    <Link href="/teams/details?team=Wolverhampton%20Wanderers">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/Wolverhampton Wanderers.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["imgCropContainer"]}>
                                    <Link href="/players/details?name=Raúl%20Jiménez">
                                        <a>
                                            <span className={localStyles["statsCardImg"]}>
                                                <Image src="/images/Players/Raúl Jiménez.png" layout="fill" objectFit="contain" objectPosition="left" alt="Photo for Raúl Jiménez" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>1.</div>
                                <div className={localStyles["statsBadge"]}>
                                    <Link href="/teams/details?team=Aston%20Villa">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/Aston Villa.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/players/details?name=Ezri%20Konsa">
                                        <a className={localStyles["statsName"]}>
                                            Ezri Konsa
                                        </a>
                                    </Link>
                                    <Link href="/teams/details?team=Aston%20Villa">
                                        <a className={localStyles["statsNameSecondary"]}>
                                            Aston Villa
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    2
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>3.</div>
                                <div className={localStyles["statsBadge"]}>
                                    <Link href="/teams/details?team=West%20Ham%20United">
                                        <a>
                                            <span className={localStyles["badge-image"]}>
                                                <Image src="/images/Teams/West Ham United.png" layout="fill" objectFit="contain" objectPosition="left" />
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/players/details?name=Michail%20Antonio">
                                        <a className={localStyles["statsName"]}>
                                            Michail Antonio
                                        </a>
                                    </Link>
                                    <Link href="/teams/details?team=West%20Ham%20United">
                                        <a className={localStyles["statsNameSecondary"]}>
                                            West Ham United
                                        </a>
                                    </Link>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    1
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <hr />
            <section id={localStyles["team"]}>
                <header>
                    <h2>Team Statistics</h2>
                </header>
                <ul>
                    <li className="card">
                        <header>
                            <h3>Wins</h3>
                        </header>
                        <ul>
                            <li className={localStyles["statsHero"]}>
                                <div className={localStyles["statsInfo"]}>
                                    <div className={localStyles["pos"]}>1.</div>
                                    <Link href="/teams/details?team=Manchester%20City">
                                        <a className={localStyles["statsName"]} title="Manchester City">
                                            Manchester City
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        Etihad Stadium
                                    </div>
                                    <div className={localStyles["statsNum"]}>27</div>
                                </div>
                                <Link href="/teams/details?team=Manchester%20City">
                                    <a>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/Manchester City.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>2.</div>
                                <Link href="/teams/details?team=Manchester%20United">
                                    <a title="Manchester United" className={localStyles["statsBadge"]}>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/Manchester United.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/teams/details?team=Manchester%20United">
                                        <a className={localStyles["statsName"]}>
                                            Manchester United
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        Old Trafford
                                    </div>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    21
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>3.</div>
                                <Link href="/teams/details?team=Leicester%20City">
                                    <a title="Leicester City" className={localStyles["statsBadge"]}>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/Leicester City.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/teams/details?team=Leicester%20City">
                                        <a className={localStyles["statsName"]}>
                                            Leicester City
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        King Power Stadium
                                    </div>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    20
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="card">
                        <header>
                            <h3>Goals</h3>
                        </header>
                        <ul>
                            <li className={localStyles["statsHero"]}>
                                <div className={localStyles["statsInfo"]}>
                                    <div className={localStyles["pos"]}>1.</div>
                                    <Link href="/teams/details?team=Manchester%20City">
                                        <a className={localStyles["statsName"]} title="Manchester City">
                                            Manchester City
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        Etihad Stadium
                                    </div>
                                    <div className={localStyles["statsNum"]}>83</div>
                                </div>
                                <Link href="/teams/details?team=Manchester%20City">
                                    <a>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/Manchester City.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>2.</div>
                                <Link href="/teams/details?team=Manchester%20United">
                                    <a title="Manchester United" className={localStyles["statsBadge"]}>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/Manchester United.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/teams/details?team=Manchester%20United">
                                        <a className={localStyles["statsName"]}>
                                            Manchester United
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        Old Trafford
                                    </div>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    73
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>3.</div>
                                <Link href="/teams/details?team=Leicester%20City">
                                    <a title="Leicester City" className={localStyles["statsBadge"]}>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/Leicester City.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/teams/details?team=Leicester%20City">
                                        <a className={localStyles["statsName"]}>
                                            Leicester City
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        King Power Stadium
                                    </div>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    68
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="card">
                        <header>
                            <h3>Losses</h3>
                        </header>
                        <ul>
                            <li className={localStyles["statsHero"]}>
                                <div className={localStyles["statsInfo"]}>
                                    <div className={localStyles["pos"]}>1.</div>
                                    <Link href="/teams/details?team=Sheffield%20United">
                                        <a className={localStyles["statsName"]} title="Sheffield United">
                                            Sheffield United
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        Bramall Lane
                                    </div>
                                    <div className={localStyles["statsNum"]}>29</div>
                                </div>
                                <Link href="/teams/details?team=Sheffield%20United">
                                    <a>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/Sheffield United.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>2.</div>
                                <Link href="/teams/details?team=West%20Bromwich%20Albion">
                                    <a title="West Bromwich Albion" className={localStyles["statsBadge"]}>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/West Bromwich Albion.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/teams/details?team=West%20Bromwich%20Albion">
                                        <a className={localStyles["statsName"]}>
                                            West Bromwich Albion
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        The Hawthorns
                                    </div>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    22
                                </div>
                            </li>
                            <li className={localStyles["statsRow"]}>
                                <div className={localStyles["pos"]}>3.</div>
                                <Link href="/teams/details?team=Fulham">
                                    <a title="Fulham" className={localStyles["statsBadge"]}>
                                        <span className={localStyles["badge-image"]}>
                                            <Image src="/images/Teams/Fulham.png" layout="fill" objectFit="contain" objectPosition="left" />
                                        </span>
                                    </a>
                                </Link>
                                <div className={localStyles["teamInfo"]}>
                                    <Link href="/teams/details?team=Fulham">
                                        <a className={localStyles["statsName"]}>
                                            Fulham
                                        </a>
                                    </Link>
                                    <div className={localStyles["statsNameSecondary"]}>
                                        Craven Cottage
                                    </div>
                                </div>
                                <div className={localStyles["statsNum"]}>
                                    20
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}