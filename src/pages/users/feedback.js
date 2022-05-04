import Head from 'next/head'
import Layout from '../../components/layout'
import Dialog from '../../components/dialog'
import localStyles from '../../styles/feedback.module.css'
import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Router from 'next/router'

export default function Feedback() {
    const [feedback, setFeedback] = useState({
        email: "",
        firstName: "",
        lastName: "",
        rate: "5",
        custExp: ""
    });
    const formRef = useRef(null);
    const [summaryMessage, setSummaryMessage] = useState("");
    const auth = useSelector(state =>
        state.auth
    )
    useEffect(() => {
        if (auth.isAuth) {
            setFeedback({
                ...feedback,
                email: auth.email,
                firstName: auth.firstName,
                lastName: auth.lastName
            });
        }
        else {
            setFeedback({
                ...feedback,
                email: "",
                firstName: "",
                lastName: ""
            });
        }
    }, [auth]);
    const handleEmailChange = (e) => {
        setFeedback({
            ...feedback,
            email: e.target.value
        });
    };
    const handleFirstNameChange = (e) => {
        setFeedback({
            ...feedback,
            firstName: e.target.value
        });
    };
    const handleLastNameChange = (e) => {
        setFeedback({
            ...feedback,
            lastName: e.target.value
        });
    };
    const handleRateChange = (e) => {
        setFeedback({
            ...feedback,
            rate: e.target.value
        });
    };
    const handleCustExpChange = (e) => {
        setFeedback({
            ...feedback,
            custExp: e.target.value
        });
    };
    const handleCancelButtonClick = (e) => {
        Router.push('/');
        e.preventDefault();
    };
    const handleSubmitButtonClick = (e) => {
        if (formRef.current.reportValidity()) {
            console.log(JSON.stringify(feedback));
            //setSummaryMessage("Your feedback was sent. Thanks for contacting us!<br>Redirect in 3s...");
            let timeLeft = 3000;
            let message = "Your feedback was sent. Thanks for contacting us! Redirect in {0}s...";
            showDialog({
                title: "Feedback",
                content: message.replace("{0}", timeLeft / 1000)
            });
            let handle = setInterval(function () {
                if (timeLeft > 0) {
                    timeLeft -= 1000;
                    showDialog({
                        title: "Feedback",
                        content: message.replace("{0}", timeLeft / 1000)
                    });
                }
                else {
                    clearInterval(handle);
                    Router.push('/');
                }
            }, 1000);
        }
        e.preventDefault();
    };
    const [dialog, showDialog] = useState({
        title: "",
        content: ""
    });

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
                <form className="card" ref={formRef}>
                    <div className={`${localStyles["vertical-flex"]} vertical-flex`}>
                        <div className={`${localStyles["flex"]} flex`}>
                            <div className={`${localStyles["flex"]} flex`}>
                                <label className="required" htmlFor="email">Email Address</label>
                                <input type="email" id="email" required value={feedback.email} onChange={handleEmailChange} />
                            </div>
                            <div className={`${localStyles["flex"]} flex`}>
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" id="first_name" value={feedback.firstName} onChange={handleFirstNameChange} />
                            </div>
                            <div className={`${localStyles["flex"]} flex`}>
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" id="last_name" value={feedback.lastName} onChange={handleLastNameChange} />
                            </div>
                        </div>
                        <hr />
                        <div className={`${localStyles["grid"]} grid`}>
                            <label htmlFor="rate" className={`${localStyles["flex"]} flex`}>
                                <span>Rate the overall experience&nbsp;</span><span>(0=poor &#8594; 10=great)</span>
                            </label>
                            <input type="range" step="1" min="0" max="10" id="rate" value={feedback.rate} onChange={handleRateChange} />
                            <label htmlFor="custExp">Tell us more about your experience!</label>
                            <textarea id="custExp" rows="5" value={feedback.custExp} onChange={handleCustExpChange}></textarea>
                        </div>
                        <div id={localStyles["summary_message"]} className="highlight" dangerouslySetInnerHTML={{ __html: summaryMessage }}></div>
                    </div>
                    <div>
                        <button id={localStyles["submit_button"]} className="form-button" onClick={handleSubmitButtonClick}>Submit</button>
                        <button id="cancel_button" className="form-button" onClick={handleCancelButtonClick}>Cancel</button>
                    </div>
                </form>
            </section>
            <Dialog title={dialog.title} content={dialog.content}></Dialog>
        </Layout>
    )
}