import calculate from "../../assets/Images/Clipboard02.jpg";
import React from "react";
import classes from "./Calculate.module.css"

const Calculate = () => {
    return (
        <div className={classes.onlineCalculate}>
            <img src={calculate} alt={"calculate"}/>
            <h2 className={classes.calculateText}>Онлайн - калькулятор<br/>
            Получите предварительный расчет натяжного потолка</h2>
            <button className={classes.calculateButton}>Получите расчет</button>
        </div>
    )
}


export default Calculate;