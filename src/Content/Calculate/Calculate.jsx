import './Calculate.css'
import React from "react";
import calcScript from "./CalcScript";



const Calculate = () => {
    return (
        <div className="calc-wrapper">
            <div className="container">
                <form id="form">

                    <div className="heading">
                        <h1 className="heading-title">Калькулятор стоимости натяжного потолка</h1>
                        <p className="heading-desc">Базовая цена: 1 м² = 450 рублей</p>
                    </div>

                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title .section-title--vertical-center">
                            <span className="title__inline">Площадь квартиры:</span>
                            <input type="number" min="0" max="200" defaultValue="0" id="square-input"
                                   className="title__inline input-short" onClick={calcScript}/>
                            <span className="title__inline">м²</span>
                        </label>
                        <input type="range" id="square-range" className="range-input" min="0" max="200" defaultValue="0"
                               step="1" onClick={calcScript}/>
                    </div>

                    <div className="calc-section">
                        <h4 className="checkbox-wrapper title-bold section-title">Тип полотна</h4>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1" defaultChecked
                                   onClick={calcScript}/>
                            <div className="title-lite">Матовый/Глянцевый/Сатин (Белый)</div>
                        </label>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1.156"
                                   onClick={calcScript}
                            />
                            <div className="title-lite">
                                Цветной
                                <span className="note">+15% к стоимости</span>
                            </div>
                        </label>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1.5" onClick={calcScript}/>
                            <div className="title-lite" onClick={calcScript}>
                                "BAUF"(Безопасно для здоровья)
                                <span className="note">+50% к стоимости</span>
                            </div>
                        </label>
                    </div>

                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title"> Тип помещения </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="building" defaultValue="1" defaultChecked onClick={calcScript}/>
                            <div className="title-lite">Без мебели</div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="building" defaultValue="1.1" onClick={calcScript}/>
                            <div className="title-lite">
                                С мебелью
                                <span className="note">+10% к стоимости</span>
                            </div>
                        </label>
                    </div>

                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title .section-title--vertical-center">
                            <span className="title__inline">Колличество светильников:</span>
                            <input type="number" min="0" max="150" defaultValue="0" id="square-input-lamp"
                                   className="title__inline input-short" onClick={calcScript}/>
                            <span className="title__inline">Шт</span>
                        </label>
                        <input type="range" id="square-range-lamp" className="range-input" min="0" max="150" defaultValue="0"
                               step="1" onClick={calcScript}/>
                    </div>

                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title"> Дополнительные опции </label>
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" name="ceiling" defaultValue="900"/>
                            <div className="title-lite">
                                Освещение (Люстра)
                                <span className="note">1000р за шт..</span>
                            </div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" name="walls" defaultValue="1.1"/>
                            <div className="title-lite">
                                Светильники
                                <span className="note">+400р за шт</span>
                            </div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" name="floor" defaultValue="1.1"/>
                            <div className="title-lite">
                                Обвод трубы
                                <span className="note">+200р за шт</span>
                            </div>
                        </label>
                    </div>
                    <div className="calc-price">
                        <div className="calc-price-title">Стоимость ремонта:</div>
                        <div className="calc-price-value">
                            <span id="total-price">0</span>
                            рублей
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}




export default Calculate;




