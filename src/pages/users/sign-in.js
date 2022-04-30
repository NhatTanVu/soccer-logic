import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/signin.module.css'
import React, { useState, useEffect } from 'react'

export default function SignIn() {
    return (
        <Layout selectedMenu="User">
            <Head>
                <meta name="description" content="SoccerLogic | Sign In" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Sign In" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Sign In</title>
            </Head>
            <header className="hero">
                <h1>Sign In</h1>
            </header>
            <section className={`${localStyles["flex"]} flex`}>
                <form id={localStyles["sign_in_form"]} className="card" onsubmit="onSubmit.call(this, event);">
                    <div>
                        <div className="form-group vertical-flex">
                            <label className="required row" for="email">Email Address</label>
                            <input className="row" type="email" id="email" required placeholder="i.e. test@gmail.com" />
                        </div>
                        <div className="form-group vertical-flex">
                            <label className="required row" for="password">Password</label>
                            <input className="row" type="password" id="password" required placeholder="i.e. test" />
                        </div>
                    </div>
                    <div className="flex">
                        <div id={localStyles["summary_message"]} className="highlight">&nbsp;</div>
                        <button id={localStyles["sign_in_button"]} className="form-button" type="submit">Sign In</button>
                    </div>
                </form>
                <div id={localStyles["no_account"]} className="vertical-flex card">
                    <h2>Don't have an account?</h2>
                    <hr />
                    <div className="flex">
                        <Link href="/users/register">
                            <a id={localStyles["register_button"]} className="form-button">Register</a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}