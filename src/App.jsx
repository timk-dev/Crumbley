import React from "react";

import { Route, Routes } from "react-router-dom";
 
import reactLazyWithRetry from '@fatso83/retry-dynamic-import/react-lazy';

const LazyAppStart = reactLazyWithRetry(() => import("./Components/appStart"));
const LazyHome = reactLazyWithRetry(() => import("./Components/home"));
const LazyRecipePage = reactLazyWithRetry(() => import("./Components/recipePage"));
const LazyProfile = reactLazyWithRetry(() => import("./Components/profile"));
const LazySaved = reactLazyWithRetry(() => import("./Components/saved"));
const LazyView = reactLazyWithRetry(() => import("./Components/viewRecipe"));

function App() {
  return (
    <>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      
      <main>
        <Routes>
          <Route path="/" exact="true" element={<LazyHome />} />
          <Route path="/start" exact="true" element={<LazyAppStart />} />
          <Route path="/recipe" exact="true" element={<LazyRecipePage />} />
          <Route path="/profile" exact="true" element={<LazyProfile />} />
          <Route path="/saved" exact="true" element={<LazySaved />} />
          <Route path="/view" exact="true" element={<LazyView />} />
        </Routes>
      </main>
    </>
  );
}

export default App

