import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import localStyles from '../../styles/signin.module.css'
import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../_redux/authSlice'
import Router from 'next/router'

export default function SignIn() {
    const [signInInfo, setSignInInfo] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const [summaryMessage, setSummaryMessage] = useState("");
    const signInButtonClick = (e) => {
        if (formRef.current.reportValidity()) {
            if (signInInfo.email == "test@gmail.com" && signInInfo.password == "test") {
                dispatch(login(true, "test@gmail.com", "Test", "User"));
                setSummaryMessage("Signed In. Redirect in 3s...");
                setTimeout(function () {
                    Router.push('/');
                }, 3000);
            }
            else {
                setSummaryMessage("<span style='color: var(--errors-color);'>Invalid email or password!</span>");
            }
        }
        e.preventDefault();
    };
    const handleChange = (e) => {
        if (e.target.id == "email") {
            setSignInInfo({
                ...signInInfo,
                email: e.target.value
            });
        }
        else if (e.target.id == "password") {
            setSignInInfo({
                ...signInInfo,
                password: e.target.value
            });
        }
    };

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
                <form id={localStyles["sign_in_form"]} className="card" ref={formRef}>
                    <div>
                        <div className="form-group vertical-flex">
                            <label className="required row" htmlFor="email">Email Address</label>
                            <input className="row" type="email" id="email" required placeholder="i.e. test@gmail.com" value={signInInfo.email} onChange={handleChange} />
                        </div>
                        <div className="form-group vertical-flex">
                            <label className="required row" htmlFor="password">Password</label>
                            <input className="row" type="password" id="password" required placeholder="i.e. test" value={signInInfo.password} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex">
                        <div id={localStyles["summary_message"]} className="highlight" dangerouslySetInnerHTML={{ __html: summaryMessage }}></div>
                        <button id={localStyles["sign_in_button"]} className="form-button" onClick={signInButtonClick}>Sign In</button>
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