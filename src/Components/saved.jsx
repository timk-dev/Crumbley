import styles from '../Components/style.module.css';

import cook from '../assets/cookMe.png';
import blob from '../assets/blobGroup.svg';

import React, { useState, useEffect } from "react";

const Saved = ({setParentState}) => {
    const [activeElement, setActiveElement] = useState('element1');

    useEffect(() => {
    }, [])

    return(
        <main className={styles.recipePage}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <section className={styles.savedCont}>
                        <div className={styles.profileTitle}>
                            <h2>Saved Recipes</h2>
                        </div>

                        <div className={styles.userName}>
                            <p>Anonymous User</p>
                            <span>@userAnon</span>
                        </div>

                        <div>
                            <p>No saved recipes...</p>
                        </div>

                        <article className={styles.footerPadding}></article>

                    </section>
                </article>
            </section>
        </main>
    );
}

export default Saved;