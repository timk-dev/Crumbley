import styles from '../Components/style.module.css';

import cook from '../assets/cookMe.png';
import blob from '../assets/blobGroup.svg';

import YouTube from 'react-youtube';

import React, { useState, useEffect } from "react";

const ViewRecpie = ({recipeId, setParentState}) => {
    const [recipeDetails, setRecipeDetails] = useState('');
    const [seeMore, setSeeMore] = useState(true);

    const handleRef = React.useRef(null);
    const opts = {
        height: '200',
        width: '100%',
    };

    //console.log(recipeId);

    const getDetails = async (id) => {
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            
            const response = await fetch(url);
            const data = await response.json();
            if (response.staus !== 200) {
                setRecipeDetails(data);
                //console.log(data, 'recipeDetails');
            } else {
                console.log('Server Error', data.error.message);
            }
        } catch (error) {
            console.log(error.name)
        }
    };

    useEffect(() => {
        getDetails(recipeId);
    }, [])

    return(
        <main className={styles.recipePage}>
            <div className={styles.backArrow}>
                <svg onClick={()=>setParentState('element2')} className={styles.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#E57B07" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.26 15.53L9.73999 12L13.26 8.46997" stroke="#E57B07" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <img rel='preload preconnect' loading='lazy' src={recipeDetails && recipeDetails.meals[0].strMealThumb ? recipeDetails.meals[0].strMealThumb : null} width='100%' height='40%' alt='Cooking Image'>
                    </img>

                    <section className={styles.viewRecipeCont}>
                        <div className={styles.profileTitle}>
                            <h2>{recipeDetails && recipeDetails.meals[0].strMeal}</h2>
                            <span>A delicious {recipeDetails && recipeDetails.meals[0].strArea}-{recipeDetails && recipeDetails.meals[0].strCategory} dish.</span>
                            <span>{recipeDetails && recipeDetails.meals[0].strTags}</span>
                        </div>

                        <div className={styles.ingredientCont}>
                            <h2>Ingredients</h2>

                            {recipeDetails && recipeDetails.meals[0].strIngredient1 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient1 ? recipeDetails.meals[0].strIngredient1 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient1}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure1}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient2 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient2 ? recipeDetails.meals[0].strIngredient2 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient2}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure2}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient3 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient3 ? recipeDetails.meals[0].strIngredient3 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient3}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure3}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient4 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient4 ? recipeDetails.meals[0].strIngredient4 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient4}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure4}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient5 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient5 ? recipeDetails.meals[0].strIngredient5 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient5}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure5}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient6 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient6 ? recipeDetails.meals[0].strIngredient6 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient6}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure6}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient7 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient7 ? recipeDetails.meals[0].strIngredient7 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient7}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure7}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient8 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient8 ? recipeDetails.meals[0].strIngredient8 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient8}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure8}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient9 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient9 ? recipeDetails.meals[0].strIngredient9 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient9}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure9}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient10 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient10 ? recipeDetails.meals[0].strIngredient10 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient10}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure10}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient11 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient11 ? recipeDetails.meals[0].strIngredient11 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient11}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure11}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient12 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient12 ? recipeDetails.meals[0].strIngredient12 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient12}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure12}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient13 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient13 ? recipeDetails.meals[0].strIngredient13 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient13}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure13}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient14 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient14 ? recipeDetails.meals[0].strIngredient14 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient14}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure14}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient15 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient15 ? recipeDetails.meals[0].strIngredient15 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient15}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure15}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient16 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient16 ? recipeDetails.meals[0].strIngredient16 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient16}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure16}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient17 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient17 ? recipeDetails.meals[0].strIngredient17 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient17}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure17}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient18 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient18 ? recipeDetails.meals[0].strIngredient18 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient18}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure18}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient19 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient19 ? recipeDetails.meals[0].strIngredient19 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient19}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure19}</strong>
                                </span>
                                :
                                null
                            }
                            {recipeDetails && recipeDetails.meals[0].strIngredient20 ?
                                <span>
                                    <img rel='preload preconnect' loading='lazy' src={`https://www.themealdb.com/images/ingredients/${recipeDetails && recipeDetails.meals[0].strIngredient20 ? recipeDetails.meals[0].strIngredient20 : null}-Small.png`} width='10px' height='10px' alt='Ingredient Image'>
                                    </img>
                                    {recipeDetails && recipeDetails.meals[0].strIngredient20}
                                    <strong>{recipeDetails && recipeDetails.meals[0].strMeasure20}</strong>
                                </span>
                                :
                                null
                            }
                        </div>

                        <div className={styles.instructionCont}>
                            <h2>Instructions</h2>
                            <p className={seeMore ? styles.truncate : null}>{recipeDetails && recipeDetails.meals[0].strInstructions}</p>
                            {seeMore && seeMore ?
                                <span onClick={()=>setSeeMore(current => !current)}>see more</span>
                                :
                                <span onClick={()=>setSeeMore(current => !current)}>see less</span>
                            }
                        </div>

                        <div className={styles.vidCont}>
                            <h2>Video Guide</h2>
                            <YouTube ref={handleRef} className={styles.youtubeVid} opts={opts} videoId={`${recipeDetails && recipeDetails.meals[0].strYoutube ? recipeDetails.meals[0].strYoutube.split("=")[1] : null}`} />
                        </div>

                    </section>
                </article>
            </section>
        </main>
    );
}

export default ViewRecpie;