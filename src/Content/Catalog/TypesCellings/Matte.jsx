import classes from "./TypesCellings.module.css"
import matHall from "./../../../assets/Images/matte/matHall.jpg"
import matBedroom from "./../../../assets/Images/matte/matBedroom.jpg"
import matHallway from "./../../../assets/Images/matte/matHallway.jpg"
import matKitchen from "./../../../assets/Images/matte/matKitchen.jpg"

const Matte = () => {
    return (
        <div className={classes.matteWrap}>
            <div className={classes.containerText}>
                <h1 className={classes.headerText}>Матовые натяжные потолки</h1>
                <br/>
                <h3>Матовые потолки внешне похожи на традиционные побеленные потолки без бликов.
                    Благодаря своей нейтральности, легко вписываются в любой интерьер.</h3>
                <br/>
                <p>Зрительно такие потолки напоминают традиционную побелку или финишную штукатурку,
                    только без единого изъяна. Фактура – слегка шероховатая.
                    Бесшовная поверхность лишена неровностей, стыков, прочих дефектов.
                    Отличие таких полотен от других видов материалов – в практическом отсутствии отражательной
                    способности.
                    Пленка мягко рассеивает свет, не поглощая его, создавая атмосферу комфорта и уюта.
                    Изготавливаются из поливинилхлоридной пленки, по текстуре схожи с полиэтиленовой пленкой.
                    Они отличаются приятной фактурой и гладкой поверхностью</p>
            </div>
            <br/>
            <div>
                <div className={classes.cardsWrap}>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={matHall} alt={"matHall"}/>
                        <h3>Матовый натяжной потолок в зале</h3>
                        <p>площадь - 19 м2; обработка угла - 4 шт.; профиль - 18 м;
                            заготовка под люстру и установка люстры - 1 шт.; цвет - белый;
                            труба отопления - 2 шт</p>
                        <br/>
                        <h4>Общая стоимость: 7850 руб.</h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={matBedroom} alt={"matBedroom"}/>
                        <h3>Матовый натяжной потолок в спальне</h3>
                        <p>площадь - 11 м2; обработка угла - 4 шт.; профиль - 13 м;
                            заготовка под люстру и установка люстры - 1 шт.; цвет - белый;</p>
                        <br/>
                        <h4>Общая стоимость: 4950 руб.</h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={matHallway} alt={"matHallway"}/>
                        <h3>Матовый натяжной потолок в коридоре</h3>
                        <p>площадь - 6.3 м2; обработка угла - 4 шт.; профиль - 12 м;
                            установка точечных светильников - 4 шт.; цвет - белый;</p>
                        <br/>
                        <h4>Общая стоимость: 4500 </h4>
                    </div>
                    <div className={classes.card}>
                        <img className={classes.cardImg} src={matKitchen} alt={"matKitchen"}/>
                        <h3>Матовый натяжной потолок в кухне</h3>
                        <p>площадь - 9 м2; обработка угла - 4 шт.; профиль - 11.6 м;
                            заготовка под люстру и установка люстры - 1 шт.;
                            установка точечных светильников - 4 шт цвет - белый;</p>
                        <br/>
                        <h4 className={classes.totalСost}>Общая стоимость: 6650 руб.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Matte;