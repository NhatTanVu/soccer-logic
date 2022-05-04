import React, { useState, useEffect } from 'react'
import localStyles from '../styles/dialog.module.css'

export default function Dialog({ title, content }) {
    const [isVisible, show] = useState(false);
    useEffect(() => {
        if (title != "" || content != "")
            show(true);
        else
            show(false);
    }, [title, content]);

    return (
        <div className={localStyles["dialog-container"]}>
            <div className={`${localStyles["dialog"]} ${isVisible ? localStyles["show"] : ""}`}>
                <h3 className={localStyles["title"]}>{title}</h3>
                <hr />
                <div className={localStyles["content"]}>{content}</div>
            </div>
            <div className={`${localStyles["overlay"]} ${isVisible ? localStyles["show"] : ""}`}></div>
        </div>
    );
}