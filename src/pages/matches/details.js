import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function MatchDetails() {
    return (
        <Layout selectedMenu="Matches">
            <Head>
                <meta name="description" content="SoccerLogic | Match Details" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Match Details" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Match Details</title>
            </Head>
        </Layout>
    )
}