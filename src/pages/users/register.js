import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/register.module.css'
import React, { useState, useEffect } from 'react'

export default function SignIn() {
    return (
        <Layout selectedMenu="User">
            <Head>
                <meta name="description" content="SoccerLogic | Register" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Register" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Register</title>
            </Head>
            <header className="hero">
                <h1>Register</h1>
            </header>
        </Layout>
    )
}