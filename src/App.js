import React from "react";
import "./App.css"
import logo from "./assets/Images/1477128283192211030.png"
import content from "./assets/Images/0dc24dafe4a27699604c95824e671863.jpg"
import calculate from "./assets/Images/Clipboard02.jpg"

const App = () => {
    return (
        <div className="app-wrapper">
            <header>
                <div className="header-wrap">
                    <a className="header-img" href="">
                        <img className="logo" src={logo} alt={"logo"}/>
                    </a>
                    <h2 className="text-header">НАТЯЖНЫЕ ПОТОЛКИ Мы едем к вашим соседям</h2>
                </div>
            </header>
            <nav>
                <div className="nav-wrap">
                    <div className="number">
                        8980-321-55-41
                        8915-560-20-26
                    </div>
                    <div className="button-nav">
                        <button className="catalog">Каталог</button>
                        <button className="services">Услуги</button>
                        <button className="calculator">Калькулятор</button>
                        <button className="photo">Фото</button>
                    </div>
                </div>
            </nav>
            <div>
                <div className="container">
                    <img className="content" src={content} alt={"content"}/>
                    <div className="centered">
                        <h1>
                            Закажите Натяжные Потолки<br/>
                            в Старом осколе<br/>
                            от 270р/м2<br/>
                            замер бесплатный!!!<br/>
                            +7980 - 321 - 55 - 41<br/>
                            +7904 - 535 - 60 - 60
                        </h1>
                    </div>
                </div>
                <div className="online-calculate">
                    <img src={calculate} alt={"calculate"}/>
                    <h2>Онлайн - калькулятор</h2>
                    <h2>Получите предварительный расчет натяжного потолка</h2>
                    <button>Получите расчет</button>
                </div>
                <h2>Каталог натяжных потолков</h2>
                <div className="card-wrap">
                    <div className="card">
                        <h3>матовые</h3>
                        <img src=" " alt={"matte"}/>
                    </div>
                    <div className="card">
                        <h3>глянцевые</h3>
                        <img src=" " alt={"glossy"}/>
                    </div>
                    <div className="card">
                        <h3>сатиновые</h3>
                        <img src=" " alt={"satin"}/>
                    </div>
                    <div className="card">
                        <h3>парящие</h3>
                        <img src=" " alt={"soaring"}/>
                    </div>
                    <div className="card">
                        <h3>двухуровневые</h3>
                        <img src=" " alt={"two-level"}/>
                    </div>
                    <div className="card">
                        <h3>световые линии</h3>
                        <img src=" " alt={"light lines"}/>
                    </div>
                    <button>перейти в каталог</button>
                </div>
            </div>
        </div>
    )
}


export default App