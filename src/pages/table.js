import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import localStyles from '../styles/table.module.css'

export default function Table() {
    return (
        <Layout selectedMenu="Table">
            <Head>
                <meta name="description" content="SoccerLogic | Table" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Table" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Table</title>
            </Head>
            <header className="hero">
                <h1>Table</h1>
            </header>
            <table className={`${localStyles["card"]} card`}>
                <thead>
                    <tr>
                        <th>
                            <div className="full">Position</div>
                            <div className="short">Pos</div>
                        </th>
                        <th className={localStyles["team"]}>
                            Team
                        </th>
                        <th>
                            <div className="full">Played</div>
                            <div className="short">Pl</div>
                        </th>
                        <th className="hideSmall">
                            <div className="full">Won</div>
                            <div className="short">W</div>
                        </th>
                        <th className="hideSmall">
                            <div className="full">Draw</div>
                            <div className="short">D</div>
                        </th>
                        <th className="hideSmall">
                            Lost
                        </th>
                        <th className="hideSmall">
                            GF
                        </th>
                        <th className="hideSmall">
                            GA
                        </th>
                        <th>
                            GD
                        </th>
                        <th>
                            <div className="full">Points</div>
                            <div className="short">Pts</div>
                        </th>
                        <th className="hideMed hideSmall">
                            Form
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Manchester%20City">
                                <a>
                                    <span>
                                        <Image alt="Manchester City logo" src="/images/Teams/Manchester City.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Manchester City
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            27
                        </td>
                        <td className="hideSmall">
                            5
                        </td>
                        <td className="hideSmall">
                            6
                        </td>
                        <td className="hideSmall">
                            83
                        </td>
                        <td className="hideSmall">
                            32
                        </td>
                        <td>
                            51
                        </td>
                        <td className={localStyles["point"]}>
                            86
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Manchester%20United">
                                <a>
                                    <span>
                                        <Image alt="Manchester United logo" src="/images/Teams/Manchester United.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Manchester United
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            21
                        </td>
                        <td className="hideSmall">
                            11
                        </td>
                        <td className="hideSmall">
                            6
                        </td>
                        <td className="hideSmall">
                            73
                        </td>
                        <td className="hideSmall">
                            44
                        </td>
                        <td>
                            29
                        </td>
                        <td className={localStyles["point"]}>
                            74
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Liverpool">
                                <a>
                                    <span>
                                        <Image alt="Liverpool logo" src="/images/Teams/Liverpool.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Liverpool
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            20
                        </td>
                        <td className="hideSmall">
                            9
                        </td>
                        <td className="hideSmall">
                            9
                        </td>
                        <td className="hideSmall">
                            68
                        </td>
                        <td className="hideSmall">
                            42
                        </td>
                        <td>
                            26
                        </td>
                        <td className={localStyles["point"]}>
                            69
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Chelsea">
                                <a>
                                    <span>
                                        <Image alt="Chelsea logo" src="/images/Teams/Chelsea.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Chelsea
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            19
                        </td>
                        <td className="hideSmall">
                            10
                        </td>
                        <td className="hideSmall">
                            9
                        </td>
                        <td className="hideSmall">
                            58
                        </td>
                        <td className="hideSmall">
                            36
                        </td>
                        <td>
                            22
                        </td>
                        <td className={localStyles["point"]}>
                            67
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Leicester%20City">
                                <a>
                                    <span>
                                        <Image alt="Leicester City logo" src="/images/Teams/Leicester City.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Leicester City
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            20
                        </td>
                        <td className="hideSmall">
                            6
                        </td>
                        <td className="hideSmall">
                            12
                        </td>
                        <td className="hideSmall">
                            68
                        </td>
                        <td className="hideSmall">
                            50
                        </td>
                        <td>
                            18
                        </td>
                        <td className={localStyles["point"]}>
                            66
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=West%20Ham%20United">
                                <a>
                                    <span>
                                        <Image alt="West Ham United logo" src="/images/Teams/West Ham United.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    West Ham United
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            19
                        </td>
                        <td className="hideSmall">
                            8
                        </td>
                        <td className="hideSmall">
                            11
                        </td>
                        <td className="hideSmall">
                            62
                        </td>
                        <td className="hideSmall">
                            47
                        </td>
                        <td>
                            15
                        </td>
                        <td className={localStyles["point"]}>
                            65
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            7
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Tottenham%20Hotspur">
                                <a>
                                    <span>
                                        <Image alt="Tottenham Hotspur logo" src="/images/Teams/Tottenham Hotspur.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Tottenham Hotspur
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            18
                        </td>
                        <td className="hideSmall">
                            8
                        </td>
                        <td className="hideSmall">
                            12
                        </td>
                        <td className="hideSmall">
                            68
                        </td>
                        <td className="hideSmall">
                            45
                        </td>
                        <td>
                            23
                        </td>
                        <td className={localStyles["point"]}>
                            62
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            8
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Arsenal">
                                <a>
                                    <span>
                                        <Image alt="Arsenal logo" src="/images/Teams/Arsenal.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Arsenal
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            18
                        </td>
                        <td className="hideSmall">
                            7
                        </td>
                        <td className="hideSmall">
                            13
                        </td>
                        <td className="hideSmall">
                            55
                        </td>
                        <td className="hideSmall">
                            39
                        </td>
                        <td>
                            16
                        </td>
                        <td className={localStyles["point"]}>
                            61
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            9
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Leeds%20United">
                                <a>
                                    <span>
                                        <Image alt="Leeds United logo" src="/images/Teams/Leeds United.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Leeds United
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            18
                        </td>
                        <td className="hideSmall">
                            5
                        </td>
                        <td className="hideSmall">
                            15
                        </td>
                        <td className="hideSmall">
                            62
                        </td>
                        <td className="hideSmall">
                            54
                        </td>
                        <td>
                            8
                        </td>
                        <td className={localStyles["point"]}>
                            59
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            10
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Everton">
                                <a>
                                    <span>
                                        <Image alt="Everton logo" src="/images/Teams/Everton.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Everton
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            17
                        </td>
                        <td className="hideSmall">
                            8
                        </td>
                        <td className="hideSmall">
                            13
                        </td>
                        <td className="hideSmall">
                            47
                        </td>
                        <td className="hideSmall">
                            48
                        </td>
                        <td>
                            -1
                        </td>
                        <td className={localStyles["point"]}>
                            59
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            11
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Aston%20Villa">
                                <a>
                                    <span>
                                        <Image alt="Aston Villa logo" src="/images/Teams/Aston Villa.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Aston Villa
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            16
                        </td>
                        <td className="hideSmall">
                            7
                        </td>
                        <td className="hideSmall">
                            15
                        </td>
                        <td className="hideSmall">
                            55
                        </td>
                        <td className="hideSmall">
                            46
                        </td>
                        <td>
                            9
                        </td>
                        <td className={localStyles["point"]}>
                            55
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            12
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Newcastle%20United">
                                <a>
                                    <span>
                                        <Image alt="Newcastle United logo" src="/images/Teams/Newcastle United.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Newcastle United
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            12
                        </td>
                        <td className="hideSmall">
                            9
                        </td>
                        <td className="hideSmall">
                            17
                        </td>
                        <td className="hideSmall">
                            46
                        </td>
                        <td className="hideSmall">
                            62
                        </td>
                        <td>
                            -16
                        </td>
                        <td className={localStyles["point"]}>
                            45
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            13
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Wolverhampton%20Wanderers">
                                <a>
                                    <span>
                                        <Image alt="Wolverhampton Wanderers logo" src="/images/Teams/Wolverhampton Wanderers.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Wolverhampton Wanderers
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            12
                        </td>
                        <td className="hideSmall">
                            9
                        </td>
                        <td className="hideSmall">
                            17
                        </td>
                        <td className="hideSmall">
                            36
                        </td>
                        <td className="hideSmall">
                            52
                        </td>
                        <td>
                            -16
                        </td>
                        <td className={localStyles["point"]}>
                            45
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            14
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Crystal%20Palace">
                                <a>
                                    <span>
                                        <Image alt="Crystal Palace logo" src="/images/Teams/Crystal Palace.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Crystal Palace
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            12
                        </td>
                        <td className="hideSmall">
                            8
                        </td>
                        <td className="hideSmall">
                            18
                        </td>
                        <td className="hideSmall">
                            41
                        </td>
                        <td className="hideSmall">
                            66
                        </td>
                        <td>
                            -25
                        </td>
                        <td className={localStyles["point"]}>
                            44
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            15
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Southampton">
                                <a>
                                    <span>
                                        <Image alt="Southampton logo" src="/images/Teams/Southampton.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Southampton
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            12
                        </td>
                        <td className="hideSmall">
                            7
                        </td>
                        <td className="hideSmall">
                            19
                        </td>
                        <td className="hideSmall">
                            47
                        </td>
                        <td className="hideSmall">
                            68
                        </td>
                        <td>
                            -21
                        </td>
                        <td className={localStyles["point"]}>
                            43
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            16
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Brighton%20and%20Hove%20Albion">
                                <a>
                                    <span>
                                        <Image alt="Brighton and Hove Albion logo" src="/images/Teams/Brighton and Hove Albion.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Brighton and Hove Albion
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            9
                        </td>
                        <td className="hideSmall">
                            14
                        </td>
                        <td className="hideSmall">
                            15
                        </td>
                        <td className="hideSmall">
                            40
                        </td>
                        <td className="hideSmall">
                            46
                        </td>
                        <td>
                            -6
                        </td>
                        <td className={localStyles["point"]}>
                            41
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            17
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Burnley">
                                <a>
                                    <span>
                                        <Image alt="Burnley logo" src="/images/Teams/Burnley.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Burnley
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            10
                        </td>
                        <td className="hideSmall">
                            9
                        </td>
                        <td className="hideSmall">
                            19
                        </td>
                        <td className="hideSmall">
                            33
                        </td>
                        <td className="hideSmall">
                            55
                        </td>
                        <td>
                            -22
                        </td>
                        <td className={localStyles["point"]}>
                            39
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            18
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Fulham">
                                <a>
                                    <span>
                                        <Image alt="Fulham logo" src="/images/Teams/Fulham.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Fulham
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            5
                        </td>
                        <td className="hideSmall">
                            13
                        </td>
                        <td className="hideSmall">
                            20
                        </td>
                        <td className="hideSmall">
                            27
                        </td>
                        <td className="hideSmall">
                            53
                        </td>
                        <td>
                            -26
                        </td>
                        <td className={localStyles["point"]}>
                            28
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            19
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=West%20Bromwich%20Albion">
                                <a>
                                    <span>
                                        <Image alt="West Bromwich Albion logo" src="/images/Teams/West Bromwich Albion.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    West Bromwich Albion
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            5
                        </td>
                        <td className="hideSmall">
                            11
                        </td>
                        <td className="hideSmall">
                            22
                        </td>
                        <td className="hideSmall">
                            35
                        </td>
                        <td className="hideSmall">
                            76
                        </td>
                        <td>
                            -41
                        </td>
                        <td className={localStyles["point"]}>
                            26
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["draw"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            20
                        </td>
                        <td className={localStyles["team"]}>
                            <Link href="/teams/details?team=Sheffield%20United">
                                <a>
                                    <span>
                                        <Image alt="Sheffield United logo" src="/images/Teams/Sheffield United.png" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    Sheffield United
                                </a>
                            </Link>
                        </td>
                        <td>
                            38
                        </td>
                        <td className="hideSmall">
                            7
                        </td>
                        <td className="hideSmall">
                            22
                        </td>
                        <td className="hideSmall">
                            29
                        </td>
                        <td className="hideSmall">
                            20
                        </td>
                        <td className="hideSmall">
                            63
                        </td>
                        <td>
                            -43
                        </td>
                        <td className={localStyles["point"]}>
                            23
                        </td>
                        <td className={`${localStyles["form"]} hideMed hideSmall`}>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["lose"]} ${localStyles["bubble"]}`} href="#"></a>
                            <a className={`${localStyles["win"]} ${localStyles["bubble"]}`} href="#"></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    )
}