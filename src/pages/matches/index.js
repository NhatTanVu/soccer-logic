import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/matches.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'

export default function Matches() {
    const isDesktop = useMediaQuery({ minWidth: 1023.1 });

    return (
        <Layout selectedMenu="Matches">
            <Head>
                <meta name="description" content="SoccerLogic | Matches" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Matches" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Matches</title>
            </Head>
            <header className={`${localStyles["hero"]} hero`}>
                <div className={localStyles["background"]}>
                    {isDesktop ? <Image src="/images/match.jpg" layout="fill" objectFit="cover" objectPosition="bottom" />
                        : <Image src="/images/match_mobile.jpg" layout="fill" objectFit="cover" objectPosition="bottom" />}
                </div>
                <h1>Matches</h1>
            </header>
            <section className={`${localStyles["matches"]} card`}>
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
                                            <Image src="/images/Teams/Fulham.png" alt="Fulham logo" layout="fill" objectFit="contains" objectPosition="left" />
                                        </span>
                                    </div>
                                    <div className={`${localStyles["score"]} flex ${localStyles["flex"]}`}><span>0</span><span>3</span></div>
                                    <div className="flex">
                                        <span>
                                            <Image src="/images/Teams/Arsenal.png" alt="Arsenal logo" layout="fill" objectFit="contains" objectPosition="left" />
                                        </span>
                                        <span>Arsenal</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <span>
                                        <Image src="/images/field.png" alt="Craven Cottage, London" layout="fill" objectFit="contains" objectPosition="left" />
                                    </span>
                                    <span>Craven Cottage, <strong>London</strong></span>
                                </div>
                                <FontAwesomeIcon icon={faArrowRightToBracket} />
                            </a>
                        </Link>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}