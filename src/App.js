import React from "react";
import classes from "./App.module.css"
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import HomePage from "./Content/HomePage";
import {Routes, Route} from "react-router-dom";
import Catalog from "./Content/Catalog/Catalog";
import Calculate from "./Content/Calculate/Calculate";
import Matte from "./Content/Catalog/TypesCellings/Matte";
import Glossy from "./Content/Catalog/TypesCellings/Glossy";
import Satin from "./Content/Catalog/TypesCellings/Satin";
import Soaring from "./Content/Catalog/TypesCellings/Soaring";
import TwoLevel from "./Content/Catalog/TypesCellings/TwoLevel";
import LightLines from "./Content/Catalog/TypesCellings/LightLines";


const App = () => {
    return (
            <div className={classes.appWrapper}>
                <Header/>
                <Navbar/>
               <Routes>
                   {/*<Route path="/" element={<HomePage />} />*/}
                   <Route path="/catalog" element={<Catalog />} />
                   <Route path="/homepage" element={<HomePage />} />
                   <Route path="/calculate" element={<Calculate />} />
                   <Route path="/matte" element={<Matte />} />
                   <Route path="/glossy" element={<Glossy />} />
                   <Route path="/satin" element={<Satin />} />
                   <Route path="/soaring" element={<Soaring />} />
                   <Route path="/twoLevel" element={<TwoLevel />} />
                   <Route path="/lightLines" element={<LightLines />} />

               </Routes>
            </div>
    )
}


export default App