import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Matches() {
    return (
        <Layout>
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
        </Layout>
    )
}