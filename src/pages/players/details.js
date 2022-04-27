import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function PlayerDetails() {
    return (
        <Layout selectedMenu="Players">
            <Head>
                <meta name="description" content="SoccerLogic | Player Details" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Player Details" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Player Details</title>
            </Head>
        </Layout>
    )
}