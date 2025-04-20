import styles from '../Components/style.module.css';

import React, { useState, useEffect } from "react";
import classNames from 'classnames';

import home from "../assets/home.svg";
import save from "../assets/save.svg";
import profile from "../assets/profile.svg";
 
import AppStart from '../Components/appStart';

import { Link } from 'react-router-dom';

import { ErrorBoundary } from "react-error-boundary";
import RecipePage from './recipePage';
import Profile from './profile';
import Saved from './saved';
import ViewRecpie from './viewRecipe';

const Home = () => {
    const [show, setShow] = useState(false);
    const [mealId, setMealId] = useState('');
    const [activeElement, setActiveElement] = useState('element1');
    const [returnedData, setGetReturnedData] = useState('');

    const [visible, setVisible] = useState(false);
    /*
    const [showUser, setUserShown] = useState(false);
    const [showInbox, setInboxShown] = useState(false);
    const [showNotif, setNotifShown] = useState(false);
    */

    //console.log(returnedData, 'home token');

    function Fallback({ error, resetErrorBoundary }) {
        // Call resetErrorBoundary() to reset the error boundary and retry the render.
    
        return (
            <div className={styles.cantFind} role="alert">
                <article>
                    <h1>What's that?</h1>

                    <div>
                        <p>Something went wrong:<br/> <span style={{ color: "red", textAlign: 'center' }}>Couldn't find recipe name</span></p>
                        <span style={{ color: "red", textAlign: 'center' }}>{error.message}</span>
                    </div>

                    <svg onClick={()=>setActiveElement('element3')} className={styles.svg} width="1.5em" height="1.5em" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.888 27.024L0.448 13.584L13.888 0.143998V7.488H34.672V19.68H13.888V27.024ZM12.448 23.52V18.24H33.232V8.928H12.448V3.648L2.512 13.584L12.448 23.52Z" fill="#e57b07"/>
                    </svg>
                </article>
            </div>
        );
    }
    
    return(
        <main>
            <section className={styles.landing}>
                <article className={styles.comingSoon}>
                    {activeElement === 'element1' &&
                        <>                        
                            <h1>
                                Crumbley App <span>v1</span>
                                <br/><span>A World of Recipes, Just for You!</span>
                            </h1>
                            <h1><span>📹 Video Tutorials <br/> - Integrated how-to videos for each recipe.</span></h1>

                            <h1><span>📖 Recipe Library <br/> - A database of recipes with filtered by cuisine, categories, and ingredients.</span></h1>

                            <h1><span>🥑 Smart Ingredient Search <br/> - Find recipes based on available ingredients.</span></h1>
                        </>
                    }
                    {activeElement !== 'element1' &&
                        <>                        
                            <h1>
                                Crumbley App <span>v1</span>
                                <br/><span>A World of Recipes, Just for You!</span>
                            </h1>
                        </>
                    }
                </article>

                <article className={styles.appCont}>
                    <div className={styles.island}>
                        <span>SATRMbl</span>

                        <article>

                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.91016 11.8401C9.21016 8.5201 14.8002 8.5201 19.1002 11.8401" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 8.3601C8.06 3.6801 15.94 3.6801 22 8.3601" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.79004 15.4902C9.94004 13.0502 14.05 13.0502 17.2 15.4902" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.3999 19.1501C10.9799 17.9301 13.0299 17.9301 14.6099 19.1501" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="#79C803" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.37988 10C6.70988 11.31 6.70988 12.69 6.37988 14" stroke="#79C803" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.87988 10C10.2099 11.31 10.2099 12.69 9.87988 14" stroke="#79C803" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.3799 10C13.7099 11.31 13.7099 12.69 13.3799 14" stroke="#79C803" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z" stroke="#79C803" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </article>

                    </div>
                    {activeElement === 'element1' && <AppStart foundData={setGetReturnedData} setParentState={setActiveElement}/>}
                    {activeElement === 'element2' && 
                        <ErrorBoundary  fallbackRender={Fallback}>
                            <RecipePage foundRecipeId={setMealId} transferData={returnedData} setParentState={setActiveElement}/>
                        </ErrorBoundary>
                    }
                    {activeElement === 'element3' && 
                        //<ErrorBoundary  FallbackComponent={Fallback}>
                            <Profile transferData={returnedData} setParentState={setActiveElement}/>
                        //</ErrorBoundary>
                    }
                    {activeElement === 'element4' && 
                        //<ErrorBoundary  FallbackComponent={Fallback}>
                            <Saved transferData={returnedData} setParentState={setActiveElement}/>
                        //</ErrorBoundary>
                    }
                    {activeElement === 'element5' && 
                        //<ErrorBoundary  FallbackComponent={Fallback}>
                            <ViewRecpie recipeId={mealId} transferData={returnedData} setParentState={setActiveElement}/>
                        //</ErrorBoundary>
                    }

                    {activeElement === "element2" || activeElement === "element3" || activeElement === "element4" || activeElement === "element5" ? 
                        <div className={styles.bottomFooter}>
                            <input type="checkbox" id="theme-mode" className={styles.mode} hidden />
                            <div className={styles.container}>
                                <div className={styles.wrap}>
                                    <input defaultChecked onClick={() => setActiveElement('element2')} /*onClick={() => setShow(!show)}*/ type="radio" id="rd-1" name="radio" className={styles.rd1} hidden />
                                    <label htmlFor="rd-1" className={styles.label} style={{index: "0"}}>
                                        <img rel='preload preconnect' loading='lazy' src={home} width='25px' height='15px' alt='Home Icon'>
                                        </img>
                                        <span>
                                            Home
                                        </span>
                                    </label>
                                    <input onClick={() => setActiveElement('element4')} type="radio" id="rd-2" name="radio" className={styles.rd2} hidden />
                                    <label htmlFor="rd-2" className={styles.label} style={{index: "1"}}>
                                        <img rel='preload preconnect' loading='lazy' src={save} width='25px' height='15px' alt='Saved Icon'>
                                        </img>
                                        <span>Saved</span>
                                    </label>
                                    <input onClick={() => setActiveElement('element3')} /*onClick={() => setNotifShown(!showNotif)}*/ type="radio" id="rd-3" name="radio" className={styles.rd3} hidden />
                                    <label htmlFor="rd-3" className={styles.label} style={{index: "2"}}>
                                        <img rel='preload preconnect' loading='lazy' src={profile} width='25px' height='15px' alt='Profile Icon'>
                                        </img>
                                        <span>Profile</span>
                                    </label>
                                    <div className={styles.bar} />
                                    <div className={styles.slidebar} />
                                </div>
                            </div>
                        </div>
                        :
                        null
                    }                
                </article>
                    
                <div className={styles.moreDetails}>
                    {activeElement === 'element1' &&
                        <>  
                            <h2>Color Pallete</h2>
                            <article className={styles.palleteGrid}>
                                <div style={{background: "#000"}} className={styles.circleColor}><span>#000</span></div>
                                <div style={{background: "#fff"}} className={styles.circleColor}><span>#fff</span></div>
                                <div style={{background: "#d7d7d787"}} className={styles.circleColor}><span>#d7d7d787</span></div>
                                <div style={{background: "#474747"}} className={styles.circleColor}><span>#474747</span></div>
                                <div style={{background: "#b3b4b4"}} className={styles.circleColor}><span>#b3b4b4</span></div>
                                <div style={{background: "#efaf00"}} className={styles.circleColor}><span>#efaf00</span></div>
                                <div style={{background: "#e57b07"}} className={styles.circleColor}><span>#e57b07</span></div>
                                <div style={{background: "#f7f3ef"}} className={styles.circleColor}><span>#f7f3ef</span></div>
                            </article>
                            <h2>Fonts</h2>
                            <article className={styles.fontCont}>
                                <div className={styles.fontType}><h1>H1: Header - Montserrat</h1></div>
                                <div className={styles.fontType}><h2>H2: SubHeader - Montserrat</h2></div>
                                <div className={styles.fontType}><p>P: Body - Roboto</p></div>
                                <div className={styles.fontType}><span>Span: Label - Roboto</span></div>
                            </article>
                            <h2>API's & Attributions</h2>
                            <article className={styles.fontCont}>
                                <Link style={{textDecoration: "none", color: "#000"}} target="_blank" rel="noopener noreferrer" to={"https://www.themealdb.com/api.php"}><p>TheMealDb</p></Link>
                            </article>
                        </>
                    }
                    {activeElement !== 'element1' &&
                        <>  
                            <h2>Color Pallete</h2>
                            <article className={styles.palleteGrid}>
                                <div style={{background: "#000"}} className={styles.circleColor}><span>#000</span></div>
                                <div style={{background: "#fff"}} className={styles.circleColor}><span>#fff</span></div>
                                <div style={{background: "#d7d7d787"}} className={styles.circleColor}><span>#d7d7d787</span></div>
                                <div style={{background: "#474747"}} className={styles.circleColor}><span>#474747</span></div>
                                <div style={{background: "#b3b4b4"}} className={styles.circleColor}><span>#b3b4b4</span></div>
                                <div style={{background: "#efaf00"}} className={styles.circleColor}><span>#efaf00</span></div>
                                <div style={{background: "#e57b07"}} className={styles.circleColor}><span>#e57b07</span></div>
                                <div style={{background: "#f7f3ef"}} className={styles.circleColor}><span>#f7f3ef</span></div>
                            </article>
                        </>
                    }
                </div>
            </section>
        </main>
    );
}

export default Home;