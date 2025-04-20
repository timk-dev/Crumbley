import styles from '../Components/style.module.css';

import cook from '../assets/cookMe.png';
import blob from '../assets/blobGroup.svg';

import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/themes/soho-light/theme.css';
import 'primereact/resources/primereact.min.css';

import React, { useState, useEffect } from "react";

const Profile = ({setParentState}) => {
    const [activeElement, setActiveElement] = useState('element1');

    useEffect(() => {
    }, [])

    return(
        <main className={styles.recipePage}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <section className={styles.recipeCont}>
                        <div className={styles.sun}>
                            <img rel='preload preconnect' loading='lazy' src={blob} width='100%' height='100%' alt='Cooking Image'>
                            </img>
                        </div>
                        <div className={styles.profileTitle}>
                            <h2>Profile</h2>
                        </div>

                        <div className={styles.userName}>
                            <p>Anonymous User</p>
                            <span>@userAnon</span>
                        </div>

                        <div className={styles.userProfile}>
                            <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/30.jpg"} width='75px' height='75px' alt='User Avatar'>
                            </img>
                            <article>
                                <p>1</p>
                                <span>Reviews</span>
                            </article>
                            <article>
                                <p>5</p>
                                <span>Saved</span>
                            </article>
                            <article>
                                <p>0</p>
                                <span>Cookbooks</span>
                            </article>
                        </div>

                        <div className={styles.buttonCont}>
                            <button onClick={() => setParentState('element2')} className={styles.followBtn}>
                              <h2>Edit Profile</h2>
                            </button>   
                        </div>

                        <div className={styles.tabCont}>
                            <div className={styles.tabButtons}>
                                <span onClick={()=>setActiveElement("element1")} className={activeElement === 'element1' ? styles.active : styles.none}>Recipe Picks</span>
                                <span onClick={()=>setActiveElement("element2")} className={activeElement === 'element2' ? styles.active : styles.none}>Reviews</span>
                                <span onClick={()=>setActiveElement("element3")} className={activeElement === 'element3' ? styles.active : styles.none}>Cookbook</span>
                            </div>

                            {activeElement === 'element1' &&
                                <section className={styles.recipePicksCont}>
                                    <article>
                                        <h2>@userAnon Picks</h2>
                                    </article>

                                    <article className={styles.recipePick}>
                                        <div>
                                            <img rel='preload preconnect' loading='lazy' src={"https://www.tasteofhome.com/wp-content/uploads/2022/07/Copycat-Cheesecake-Factory-Shrimp-Scampi_EXPS_FT22_269940_ST_07_19_1.jpg?fit=700,700"} width='50px' height='50px' alt='Recipe Image'>
                                            </img>
                                            <h2>Copycat Cheesecake Factory Shrimp Scampi</h2>
                                        </div>
                                        <div>
                                            <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/30.jpg"} width='25px' height='25px' alt='User Avatar'>
                                            </img>
                                            <span>Anonymous User</span>
                                        </div>
                                    </article>
                                </section>
                            }

                            {activeElement === 'element2' &&
                                <section className={styles.reviews}>
                                    <article>
                                        <h2>Reviews</h2>
                                    </article>

                                    <article className={styles.reviewCont}>
                                        <div>
                                            <img rel='preload preconnect' loading='lazy' src={"https://www.tasteofhome.com/wp-content/uploads/2022/07/Copycat-Cheesecake-Factory-Shrimp-Scampi_EXPS_FT22_269940_ST_07_19_1.jpg?fit=700,700"} width='35px' height='35px' alt='Recipe Image'>
                                            </img>
                                            <p>Copycat Cheesecake Factory Shrimp Scampi</p>
                                        </div>
                                        <span className={styles.indent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere cum quod doloribus. Molestias mollitia odio, velit perferendis quas dicta provident nostrum molestiae quaerat. Maiores quidem cumque earum molestias nulla.</span>
                                        <div>
                                            <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/30.jpg"} width='25px' height='25px' alt='User Avatar'>
                                            </img>
                                            <span>Anonymous User</span>
                                        </div>
                                    </article>
                                </section>
                            }

                            {activeElement === 'element3' &&
                                <section className={styles.cookbook}>
                                    <article>
                                        <h2>Their Cookbooks</h2>
                                    </article>

                                    <article>
                                        <span>No cookbooks available</span>
                                    </article>
                                </section>
                            }
                        </div>

                        <article className={styles.footerPadding}></article>

                    </section>
                </article>
            </section>
        </main>
    );
}

export default Profile;