import './Calculate.css'
import React from "react";



const Calculate = () => {
    return (
        <div className="calc-wrapper">
            <div className="container">
                <form id="form">
                    <div className="heading">
                        <h1 className="heading-title">Калькулятор стоимости ремонта</h1>
                        <p className="heading-desc">Базовая цена: 1 м² = 450 рублей</p>
                    </div>
                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title .section-title--vertical-center">
                            <span className="title__inline">Площадь квартиры:</span>
                            <input type="number" min="0" max="200" defaultValue="50" id="square-input"
                                   className="title__inline input-short"/>
                            <span className="title__inline">м²</span>
                        </label>
                        <input type="range" id="square-range" className="range-input" min="0" max="200" defaultValue="50"
                               step="1"/>
                    </div>
                    <div className="calc-section">
                        <h4 className="checkbox-wrapper title-bold section-title">Тип ремонта</h4>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1"/>
                            <div className="title-lite">Косметический</div>
                        </label>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1.3" defaultChecked
                            />
                            <div className="title-lite">
                                Капитальный
                                <span className="note">+30% к стоимости</span>
                            </div>
                        </label>
                        <label className="radio-wrapper" data-name="mobile">
                            <input type="radio" className="radio" name="type" defaultValue="1.5"/>
                            <div className="title-lite">
                                Под ключ
                                <span className="note">+50% к стоимости</span>
                            </div>
                        </label>
                    </div>
                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title"> Тип дома </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="building" defaultValue="1" defaultChecked/>
                            <div className="title-lite">Новострой</div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="radio" className="radio" name="building" defaultValue="1.1"/>
                            <div className="title-lite">
                                Вторичка
                                <span className="note">+10% к стоимости</span>
                            </div>
                        </label>
                    </div>
                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title"> Количество комнат </label>
                        <div className="rooms-wrapper">
                            <label className="rooms-label">
                                <input className="rooms-radio-real" type="radio" name="rooms" defaultValue="0.8"/>
                                <span className="rooms-radio-fake">C</span>
                            </label>

                            <label className="rooms-label">
                                <input className="rooms-radio-real" type="radio" name="rooms" defaultValue="1" defaultChecked/>
                                <span className="rooms-radio-fake">1</span>
                            </label>

                            <label className="rooms-label">
                                <input className="rooms-radio-real" type="radio" name="rooms" defaultValue="1"/>
                                <span className="rooms-radio-fake">2</span>
                            </label>

                            <label className="rooms-label">
                                <input className="rooms-radio-real" type="radio" name="rooms" defaultValue="1.05"/>
                                <span className="rooms-radio-fake">3</span>
                            </label>

                            <label className="rooms-label">
                                <input className="rooms-radio-real" type="radio" name="rooms" defaultValue="1.05"/>
                                <span className="rooms-radio-fake">4</span>
                            </label>

                            <label className="rooms-label">
                                <input className="rooms-radio-real" type="radio" name="rooms" defaultValue="1.05"/>
                                <span className="rooms-radio-fake">5</span>
                            </label>
                        </div>
                    </div>
                    <div className="calc-section">
                        <label className="checkbox-wrapper title-bold section-title"> Дополнительные опции </label>
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" name="ceiling" defaultValue="900"/>
                            <div className="title-lite">
                                Натяжные потолки
                                <span className="note">900 руб. за м.кв.</span>
                            </div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" name="walls" defaultValue="1.1"/>
                            <div className="title-lite">
                                Покраска стен
                                <span className="note">+10% к стоимости</span>
                            </div>
                        </label>
                        <label className="radio-wrapper">
                            <input type="checkbox" className="radio" name="floor" defaultValue="1.1"/>
                            <div className="title-lite">
                                Теплый пол
                                <span className="note">+10% к стоимости</span>
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




