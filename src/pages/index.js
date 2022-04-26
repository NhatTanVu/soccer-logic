import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import localStyles from '../styles/index.module.css'
import Layout from '../components/layout'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
    const isDesktop = useMediaQuery({ minWidth: 1023.1 });

    return (
        <Layout>
            <Head>
                <meta name="description" content="SoccerLogic - View latest Soccer Match updates" />
                <meta
                    property="og:description"
                    content="SoccerLogic - View latest Soccer Match updates" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic - View latest Soccer Match updates</title>
            </Head>
            <header className={`hero ${localStyles["hero"]}`}>
                <div className={localStyles["background"]}>
                    {isDesktop ? <Image src="/images/match.jpg" layout="fill" objectFit="cover" objectPosition="center" />
                        : <Image src="/images/match_mobile.jpg" layout="fill" objectFit="cover" objectPosition="center" />}
                </div>
                <div className={localStyles["content"]}>
                    <h1>Matches</h1>
                    <hr />
                    <h4>Keep up to date with latest match news from top soccer leagues.</h4>
                    <Link href="/matches">
                        <a className="form-button">View All Matches</a>
                    </Link>
                </div>
            </header>
            <header className={`hero ${localStyles["hero"]}`}>
                <div className={localStyles["background"]}>
                    {isDesktop ? <Image src="/images/team.jpg" layout="fill" objectFit="cover" objectPosition="center" />
                        : <Image src="/images/team_mobile.jpg" layout="fill" objectFit="cover" objectPosition="center" />}
                </div>
                <div className={localStyles["content"]}>
                    <h1>Teams</h1>
                    <hr />
                    <h4>Search for your favourite teams, buy their tickets and merchandise.</h4>
                    <Link href="/teams">
                        <a className="form-button">View All Teams</a>
                    </Link>
                </div>
            </header>
            <header className={`hero ${localStyles["hero"]}`}>
                <div className={localStyles["background"]}>
                    {isDesktop ? <Image src="/images/player.jpg" layout="fill" objectFit="cover" objectPosition="center" />
                        : <Image src="/images/player_mobile.jpg" layout="fill" objectFit="cover" objectPosition="center" />}
                </div>
                <div className={localStyles["content"]}>
                    <h1>Players</h1>
                    <hr />
                    <h4>Find and follow your favourite players on social media.</h4>
                    <Link href="/players">
                        <a className="form-button">View All Players</a>
                    </Link>
                </div>
            </header>
        </Layout>
    )
}
