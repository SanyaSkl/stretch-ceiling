
const CalcScript = () => {

// Элементы формы. Квадратура помещения.
    const squareInput = document.querySelector('#square-input')                                //Квадратура Помещения
    const squareRange = document.querySelector('#square-range')

//Элементы формы. Светильники.
    const squareInputLamp = document.querySelector('#square-input-lamp')                       //Квадратура Помещения
    const squareRangeLamp = document.querySelector('#square-range-lamp')

//Элементы формы. Люстры.
    const squareInputChandelier = document.querySelector('#square-input-сhandelier')           //Люстры
    const squareRangeChandelier = document.querySelector('#square-range-сhandelier')

//Элементы формы. Керамогранитная плитка.
    const squareInputPorcelainTiles = document.querySelector('#square-input-porcelain-tiles')  //Керамогранитная плитка
    const squareRangePorcelainTiles = document.querySelector('#square-range-porcelain-tiles')
    const inputs = document.querySelectorAll('input')

//Радиокнопки
    const radioType = document.querySelectorAll('input[name="type"]')
    const radioLamp = document.querySelectorAll('input[name="lamp"]')
    const radioChandelier = document.querySelectorAll('input[name="chandelier"]')

    const chandelierPrice = 1000
    const lampPrice = 400
    const basePrice = 450
    const totalPriceElement = document.querySelector('#total-price')

//Связка range с текстовым полем
//Слушаем событие input
    squareRange.addEventListener('input', function () {                       //Квадратура Помещения
        squareInput.value = squareRange.value
    })

    squareRangeLamp.addEventListener('input', function () {                   //Квадратура Помещения
        squareInputLamp.value = squareRangeLamp.value
    })

    squareRangeChandelier.addEventListener('input', function () {             //Люстры
        squareInputChandelier.value = squareRangeChandelier.value
    })

    squareRangePorcelainTiles.addEventListener('input', function () {         //Керамогранитная плитка
        squareInputPorcelainTiles.value = squareRangePorcelainTiles.value
    })

//Связка текстового поля с range
    squareInput.addEventListener('input', function () {                       //Квадратура Помещения
        squareRange.value = squareInput.value
    })

    squareInputLamp.addEventListener('input', function () {                   //Светильники
        squareRangeLamp.value = squareInputLamp.value
    })

    squareInputChandelier.addEventListener('input', function () {             //Люстры
        squareRangeChandelier.value = squareInputChandelier.value
    })

    squareInputPorcelainTiles.addEventListener('input', function () {         //Керамогранитная плитка
        squareRangePorcelainTiles.value = squareInputPorcelainTiles.value
    })



    function calc() {
        let baseTotalPrice = basePrice * parseInt(squareInput.value)

        for ( const radio of radioType) {
            if (radio.checked) {
                baseTotalPrice *= parseFloat(radio.value)
            }
        }

        let lampTotalPrice = lampPrice * parseInt(squareInputLamp.value)

        for ( const radio of radioLamp) {
            if (radio.checked) {
                lampTotalPrice *= parseFloat(radio.value)
            }
        }

        let chandelierTotalPrice = chandelierPrice * parseInt(squareInputChandelier.value)

        for ( const radio of radioChandelier) {
            if (radio.checked) {
                chandelierTotalPrice *= parseFloat(radio.value)
            }
        }

        let totalPrice = baseTotalPrice + lampTotalPrice + chandelierTotalPrice


        const formatter = new Intl.NumberFormat('ru')
        totalPriceElement.innerText = formatter.format(totalPrice)
    }



    calc()

    for (const input of inputs) {
        input.addEventListener('input', function () {
            calc()
        })
    }

}


export default CalcScript