import styles from '../Components/style.module.css';

import cook from '../assets/cookMe.png';
import blob from '../assets/blobGroup.svg';

import React, { useState, useEffect } from "react";

const RecipePage = ({foundRecipeId, foundData, setParentState}) => {
    const [value, setValue] = useState('');
    const [allCategories, setCategories] = useState('');
    const [getCitySate, setGetCityState] = useState('');
    const [splits, setSplit] = useState('');
    const [chickenBreast, setChickenBreast] = useState('');
    const [japanese, setJapanese] = useState('');
    const [tdSpecial, setTdSpecial] = useState('');
    const [byCategory, setByCategory] = useState('');

    const [searchQuery, setGetSearchQuery] = useState('');
    const [searchedRecipe, setSearchedRecipe] = useState('');

    const [blank, setBlank] = useState('');

    const [randomRecipe, setRandomRecipe] = useState('');

    const butFirst = () => {
        foundData(getCitySate.split(","));
        setParentState('element2');
    }

    async function setParent(){
        butFirst();
    }

    const handleSubmit = async (e) => {        
        e.preventDefault();

        await setParent();
    }

    const getRecipeApi = async () => {
        try {
            const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
            
            const response = await fetch(url);
            const data = await response.json();
            if (response.staus !== 200) {
                setRandomRecipe(data);
                //console.log(data, 'recipe random');
            } else {
                console.log('Server Error', data.error.message);
            }
        } catch (error) {
            console.log(error.name)
        }
    };

    const getCategories = async () => {
        try {
            const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
            
            const response = await fetch(url);
            const data = await response.json();
            if (response.staus !== 200) {
                setCategories(data);
                //console.log(data, 'categories');
            } else {
                console.log('Server Error', data.error.message);
            }
        } catch (error) {
            console.log(error.name)
        }
    };

    const getMainIngredient = async () => {
        try {
            const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=Avocado'
            
            const response = await fetch(url);
            const data = await response.json();
            if (response.staus !== 200) {
                setChickenBreast(data);
                //console.log(data, 'main ingredient');
            } else {
                console.log('Server Error', data.error.message);
            }
        } catch (error) {
            console.log(error.name)
        }
    };

    const getJapanese = async () => {
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=japanese`
            
            const response = await fetch(url);
            const data = await response.json();
            if (response.staus !== 200) {
                setJapanese(data);
                //console.log(data, 'japan cuisine');
            } else {
                console.log('Server Error', data.error.message);
            }
        } catch (error) {
            console.log(error.name)
        }
    };

    const getTodaySpecial = async () => {
        try {
            const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
            
            const response = await fetch(url);
            const data = await response.json();
            if (response.staus !== 200) {
                setTdSpecial(data);
                setSplit(data.meals[0].strTags.split(","));
                //console.log(data, 'Todays Special');
            } else {
                console.log('Server Error', data.error.message);
            }
        } catch (error) {
            console.log(error.name)
        }
    };

    const getByCategory = async (cat) => {
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
            
            const response = await fetch(url);
            const data = await response.json();
            if (response.staus !== 200) {
                setByCategory(data);
                //console.log(data, 'Category');
            } else {
                console.log('Server Error', data.error.message);
            }
        } catch (error) {
            console.log(error.name)
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();

        try {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedRecipe}`
            
            const response = await fetch(url);
            const data = await response.json();
            if (response.staus !== 200) {
                setGetSearchQuery(data);
                //console.log(data, 'Search Query');
            } else {
                setGetSearchQuery("0 results Found");
                console.log('Server Error', data.error.message);
            }
        } catch (error) {
            setGetSearchQuery("0 results Found");
            console.log(error.name)
        }
    };

    var s = ['Japanese', 'American', 'Mexican'];
    let index = 0;
    const primtMe = (value, i) => {
        if (i < s.length) {
            setTimeout(() => {
                console.log(i + ' value = ' + value)
                primtMe(s[i + 1], i + 1)
            }, 5000);
            return s[0];
        } else {
            return;
        }
    }

    const openRecipe = () => {
        foundRecipeId(`${tdSpecial.meals[0].idMeal}`);
        setParentState('element5');
    }

    const openRecipeFromCard = (getId) => {
        foundRecipeId(getId);
        setParentState('element5');
    }

    //primtMe(s[index], index);

    useEffect(() => {
        getRecipeApi();
        getCategories();
        getMainIngredient();
        getJapanese();
        getTodaySpecial();
    }, [])

    //console.log(splits)
    //console.log(searchQuery, 'search')

    return(
        <main className={styles.recipePage}>
            <section className={styles.content}>
                <article className={styles.scrollCont}>
                    <section className={styles.recipeCont}>
                        <div className={styles.searchComp}>
                            <section className={styles.avatar}>
                                <img rel='preload preconnect' loading='lazy' src={"https://randomuser.me/api/portraits/men/30.jpg"} width='50px' height='50px' alt='User Avatar'>
                                </img>
                                <div>
                                    <span>Welcome,</span>
                                    <p>Anonymous User</p>
                                </div>

                                <svg width="15px" height="15px" className={styles.h5} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0357 2.91003C8.72571 2.91003 6.03571 5.60003 6.03571 8.91003V11.8C6.03571 12.41 5.77571 13.34 5.46571 13.86L4.31571 15.77C3.60571 16.95 4.09571 18.26 5.39571 18.7C9.70571 20.14 14.3557 20.14 18.6657 18.7C19.8757 18.3 20.4057 16.87 19.7457 15.77L18.5957 13.86C18.2957 13.34 18.0357 12.41 18.0357 11.8V8.91003C18.0357 5.61003 15.3357 2.91003 12.0357 2.91003Z" stroke="black" strokeWidth="1.5" strokemeterlimit="10" strokeLinecap="round"/>
                                    <path d="M13.8855 3.19994C13.5755 3.10994 13.2555 3.03994 12.9255 2.99994C11.9655 2.87994 11.0455 2.94994 10.1855 3.19994C10.4755 2.45994 11.1955 1.93994 12.0355 1.93994C12.8755 1.93994 13.5955 2.45994 13.8855 3.19994Z" stroke="black" strokeWidth="1.5" strokemeterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.0356 19.0601C15.0356 20.7101 13.6856 22.0601 12.0356 22.0601C11.2156 22.0601 10.4556 21.7201 9.91564 21.1801C9.37564 20.6401 9.03564 19.8801 9.03564 19.0601" stroke="black" strokeWidth="1.5" strokemeterlimit="10"/>
                                </svg>
                            </section>

                            <form onSubmit={handleSearch} className={styles.form}>
                                <label htmlFor="search">
                                    <input className={styles.searchInput} type="text" required placeholder="What do you want to eat?" id="search" value={searchedRecipe} onInput={(e)=>setSearchedRecipe(e.target.value)} />
                                    <div className={styles.fancyBg} />
                                    <div value={""} onClick={()=>setGetSearchQuery(value)} className={styles.searchIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <button title='Submit' type="submit" className={styles.searchBtn}>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.r14}>
                                            <g>
                                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                                            </g>
                                        </svg>
                                    </button>
                                </label>
                            </form> 

                            {searchQuery ?
                                <div className={styles.searchResults}>
                                    <p>We found: {searchQuery ? <span>{searchQuery.meals.length && searchQuery.meals.length} recipe{'(s)'}</span>: null}</p>
                                    {searchQuery && searchQuery.meals.map((id) => {
                                        return(
                                            <article key={id.idMeal} className={styles.recipePick} onClick={()=>openRecipeFromCard(id.idMeal)}>
                                                <div>
                                                    <img rel='preload preconnect' loading='lazy' src={id.strMealThumb ? id.strMealThumb: null} width='50px' height='50px' alt='Recipe Image'>
                                                    </img>
                                                    <h2>{id.strMeal}</h2>
                                                </div>
                                                <div style={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
                                                    <span><strong>Cuisine: </strong>{id.strArea}</span>
                                                    <span><strong>Type: </strong>{id.strTags}</span>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                                :
                                null
                            }
                        </div>

                        <div className={styles.feedContent} onClick={openRecipe}>
                            <h2>Today's Special</h2>
                            <div className={styles.tdSpec}>
                                <img rel='preload preconnect' loading='lazy' src={tdSpecial && tdSpecial.meals[0].strMealThumb ? tdSpecial.meals[0].strMealThumb : null} width='100%' height='100%' alt='Random Recipe'>
                                </img>

                                <div className={styles.typeCont}>
                                    <p>{tdSpecial && tdSpecial.meals[0].strCategory}</p>
                                    <p>{tdSpecial && tdSpecial.meals[0].strArea}</p>
                                </div>

                                <div className={styles.titleCont}>
                                    <h2>{tdSpecial && tdSpecial.meals[0].strMeal}</h2>

                                    <div className={styles.tagCont}>
                                        {splits && splits.map((id) => {
                                            return(
                                                <span key={id}>{id}</span>
                                            );
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={styles.feedContent}>
                            <h2>Categories {byCategory ? <span><strong>Results: </strong>{byCategory && byCategory.meals.length} recipe{'(s)'}</span>: null}</h2>
                            <div className={styles.categor}>
                                {allCategories && allCategories.categories.map((id) => {
                                    return(
                                        <div key={id.idCategory} className={styles.categorCont} onClick={()=>getByCategory(id.strCategory)}>
                                            <img rel='preload preconnect' loading='lazy' src={id.strCategoryThumb ? id.strCategoryThumb: null} width='50px' height='35px' alt='Category Icon'>
                                            </img>
                                            <p>{id.strCategory}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            {byCategory ?
                                <div className={styles.categor}>
                                    {byCategory && byCategory.meals.map((id) => {
                                        return(
                                            <div key={id.idMeal} className={styles.quickDisplay} onClick={()=>openRecipeFromCard(id.idMeal)}>
                                                <img rel='preload preconnect' loading='lazy' src={id.strMealThumb ? id.strMealThumb: null} width='50px' height='35px' alt='Category Icon'>
                                                </img>
                                                <p>{id.strMeal}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                :
                                null
                            }
                        </div>

                        <div className={styles.feedContent}>
                            <h2>Recipes that star: <strong>Avocados.</strong></h2>
                            <div className={styles.categor}>
                                {chickenBreast && chickenBreast.meals.map((id) => {
                                    return(
                                        <div key={id.idMeal} className={styles.quickDisplay} onClick={()=>openRecipeFromCard(id.idMeal)}>
                                            <img rel='preload preconnect' loading='lazy' src={id.strMealThumb ? id.strMealThumb: null} width='50px' height='35px' alt='Category Icon'>
                                            </img>
                                            <p>{id.strMeal}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className={styles.feedContent}>
                            <div className={styles.banner} onClick={()=>openRecipeFromCard(randomRecipe && randomRecipe.meals[0].idMeal)} style={{  backgroundImage: `linear-gradient(270deg, rgba(229,123,7,0) 0%, rgba(229,123,7,1) 60%), url(${randomRecipe && randomRecipe.meals[0].strMealThumb})`, backgroundRepeat: "no-repeat" }}>
                                <span>Try this tonight!</span>
                                <h2>{randomRecipe && randomRecipe.meals[0].strMeal}</h2>
                                <div className={styles.typeCont}>
                                    <p><strong>Category:</strong> {randomRecipe && randomRecipe.meals[0].strCategory}</p>
                                    <p><strong>Origin:</strong> {randomRecipe && randomRecipe.meals[0].strArea}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.feedContent}>
                            <h2><strong>Japanese</strong> Cuisine</h2>
                            <div className={styles.categor}>
                                {japanese && japanese.meals.map((id) => {
                                    return(
                                        <div key={id.idMeal} className={styles.quickDisplay} onClick={()=>openRecipeFromCard(id.idMeal)}>
                                            <img rel='preload preconnect' loading='lazy' src={id.strMealThumb ? id.strMealThumb: null} width='50px' height='35px' alt='Category Icon'>
                                            </img>
                                            <p>{id.strMeal}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        <article className={styles.footerPadding}></article>

                    </section>
                </article>
            </section>
        </main>
    );
}

export default RecipePage;