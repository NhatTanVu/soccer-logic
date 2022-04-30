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
            <section className={`flex ${localStyles["flex"]}`}>
                <form id={localStyles["register_form"]} className="card" onsubmit="onSubmit.call(this, event);">
                    <div>
                        <div className="flex">
                            <div className="left">
                                <div className={`flex ${localStyles["row"]} form-group`}>
                                    <label className="required" for="email">Email Address</label>
                                    <input type="email" id="email" required />
                                </div>
                                <div className={`flex ${localStyles["row"]} form-group`}>
                                    <label className="required" for="password">Password</label>
                                    <input type="password" id="password" required />
                                </div>
                                <div className={`flex ${localStyles["row"]}`}>
                                    <label for="first_name">First Name</label>
                                    <input type="text" id="first_name" />
                                </div>
                            </div>
                            <div className="right">
                                <div className={`flex ${localStyles["row"]} form-group`}>
                                    <label for="last_name">Last Name</label>
                                    <input type="text" id="last_name" />
                                </div>
                                <div className={`flex ${localStyles["row"]} form-group`}>
                                    <label>Gender</label>
                                    <div id={localStyles["gender-group"]} className="flex">
                                        <div className="flex">
                                            <input type="radio" id="gender_male" name="gender" />
                                            <span for="gender_male">Male</span>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" id="gender_female" name="gender" />
                                            <span for="gender_female">Female</span>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" id="gender_unspecified" name="gender" />
                                            <span for="gender_unspecified">Unspecified</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex ${localStyles["row"]}`}>
                                    <label for="dob">Date of Birth</label>
                                    <input type="date" id="dob" />
                                </div>
                            </div>
                        </div>
                        <div id={localStyles["summary_message"]} className="highlight">&nbsp;</div>
                    </div>
                    <div>
                        <button id={localStyles["submit_button"]} className="form-button" type="submit"><span>Register</span><span className="hideMed hideSmall"> &#8594; Sign In</span></button>
                        <button id="cancel_button" className="form-button" onclick="onCancel.call(this, event);">Cancel</button>
                    </div>
                </form>
            </section>
        </Layout>
    )
}