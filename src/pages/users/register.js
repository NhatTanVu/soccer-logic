import Head from 'next/head'
import Layout from '../../components/layout'
import localStyles from '../../styles/register.module.css'
import React, { useState, useRef } from 'react'
import Router from 'next/router'
import { login } from '../_redux/authSlice'
import { useDispatch } from 'react-redux'

export default function Register() {
    const dispatch = useDispatch();

    const handleCancelButtonClick = (e) => {
        Router.push('/');
        e.preventDefault();
    };
    const formRef = useRef(null);
    const handleSubmitButtonClick = (e) => {
        if (formRef.current.reportValidity()) {
            console.log(JSON.stringify(registerInfo));
            dispatch(login(true, registerInfo.email, registerInfo.firstName, registerInfo.lastName));
            setSummaryMessage("Registered & Signed In. Redirect in 3s...");
            setTimeout(function () {
                Router.push('/');
            }, 3000);
        }
        e.preventDefault();
    };
    const [registerInfo, setRegisterInfo] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: "",
        dob: ""
    });
    const [summaryMessage, setSummaryMessage] = useState("");
    const handleChange = (e) => {
        if (e.target.id == "email") {
            setRegisterInfo({
                ...registerInfo,
                email: e.target.value
            });
        }
        else if (e.target.id == "password") {
            setRegisterInfo({
                ...registerInfo,
                password: e.target.value
            });
        }
        else if (e.target.id == "first_name") {
            setRegisterInfo({
                ...registerInfo,
                firstName: e.target.value
            });
        }
        else if (e.target.id == "last_name") {
            setRegisterInfo({
                ...registerInfo,
                lastName: e.target.value
            });
        }
        else if (e.target.id == "gender_male") {
            setRegisterInfo({
                ...registerInfo,
                gender: "male"
            });
        }
        else if (e.target.id == "gender_female") {
            setRegisterInfo({
                ...registerInfo,
                gender: "female"
            });
        }
        else if (e.target.id == "gender_unspecified") {
            setRegisterInfo({
                ...registerInfo,
                gender: "unspecified"
            });
        }
        else if (e.target.id == "dob") {
            setRegisterInfo({
                ...registerInfo,
                dob: e.target.value
            });
        }
    };

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
                <form id={localStyles["register_form"]} className="card" ref={formRef}>
                    <div>
                        <div className="flex">
                            <div className="left">
                                <div className={`flex ${localStyles["row"]} form-group`}>
                                    <label className="required" htmlFor="email">Email Address</label>
                                    <input type="email" id="email" required value={registerInfo.email} onChange={handleChange} />
                                </div>
                                <div className={`flex ${localStyles["row"]} form-group`}>
                                    <label className="required" htmlFor="password">Password</label>
                                    <input type="password" id="password" required value={registerInfo.password} onChange={handleChange} />
                                </div>
                                <div className={`flex ${localStyles["row"]}`}>
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" id="first_name" value={registerInfo.firstName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="right">
                                <div className={`flex ${localStyles["row"]} form-group`}>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" id="last_name" value={registerInfo.lastName} onChange={handleChange} />
                                </div>
                                <div className={`flex ${localStyles["row"]} form-group`}>
                                    <label>Gender</label>
                                    <div id={localStyles["gender-group"]} className="flex">
                                        <div className="flex">
                                            <input type="radio" id="gender_male" name="gender" onChange={handleChange} />
                                            <span htmlFor="gender_male">Male</span>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" id="gender_female" name="gender" onChange={handleChange} />
                                            <span htmlFor="gender_female">Female</span>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" id="gender_unspecified" name="gender" onChange={handleChange} />
                                            <span htmlFor="gender_unspecified">Unspecified</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex ${localStyles["row"]}`}>
                                    <label htmlFor="dob">Date of Birth</label>
                                    <input type="date" id="dob" value={registerInfo.dob} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div id={localStyles["summary_message"]} className="highlight">{summaryMessage}</div>
                    </div>
                    <div>
                        <button id={localStyles["submit_button"]} className="form-button" onClick={handleSubmitButtonClick}><span>Register</span><span className="hideMed hideSmall"> &#8594; Sign In</span></button>
                        <button id="cancel_button" className="form-button" onClick={handleCancelButtonClick}>Cancel</button>
                    </div>
                </form>
            </section>
        </Layout>
    )
}