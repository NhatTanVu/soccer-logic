import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/feedback.module.css'
import React, { useState, useEffect } from 'react'

export default function SignIn() {
    return (
        <Layout selectedMenu="User">
            <Head>
                <meta name="description" content="SoccerLogic | Feedback" />
                <meta
                    property="og:description"
                    content="SoccerLogic | Feedback" />
                <meta
                    property="og:image"
                    content="https://github.com/NhatTanVu/soccer-logic/blob/main/screenshots/preview.jpg?raw=true" />
                <title>SoccerLogic | Feedback</title>
            </Head>
            <header className="hero">
                <h1>Feedback</h1>
            </header>
            <section className={`${localStyles["flex"]} flex`}>
                <form className="card" onsubmit="onSubmit.call(this, event);">
                    <div className={`${localStyles["vertical-flex"]} vertical-flex`}>
                        <div className={`${localStyles["flex"]} flex`}>
                            <div className={`${localStyles["flex"]} flex`}>
                                <label className="required" for="email">Email Address</label>
                                <input type="email" id="email" required />
                            </div>
                            <div className={`${localStyles["flex"]} flex`}>
                                <label for="first_name">First Name</label>
                                <input type="text" id="first_name" />
                            </div>
                            <div className={`${localStyles["flex"]} flex`}>
                                <label for="last_name">Last Name</label>
                                <input type="text" id="last_name" />
                            </div>
                        </div>
                        <hr />
                        <div className={`${localStyles["grid"]} grid`}>
                            <label for="rate" className={`${localStyles["flex"]} flex`}>
                                <span>Rate the overall experience&nbsp;</span><span>(0=poor &#8594; 10=great)</span>
                            </label>
                            <input type="range" value="5" step="1" min="0" max="10" id="rate" />
                            <label for="commBox">Tell us more about your experience!</label>
                            <textarea name="custExp" id="commBox" rows="5"></textarea>
                        </div>
                        <div id={localStyles["summary_message"]} className="highlight">&nbsp;</div>
                    </div>
                    <div>
                        <button id={localStyles["submit_button"]} className="form-button" type="submit">Submit</button>
                        <button id="cancel_button" className="form-button" onclick="onCancel.call(this, event);">Cancel</button>
                    </div>
                </form>
            </section>
        </Layout>
    )
}