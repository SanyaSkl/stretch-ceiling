/*
const CalcScript = () => {

// Элементы формы
    const squareInput = document.querySelector('#square-input');
    const squareRange = document.querySelector('#square-range');
    const inputs = document.querySelectorAll('input');

// Радиокнопки
    const radioType = document.querySelectorAll('input[name="type"]');
    const radioBuilding = document.querySelectorAll('input[name="building"]');
    const radioRooms = document.querySelectorAll('input[name="rooms"]');

// Чекбоксы
    const ceilings = document.querySelector('input[name="ceiling"]');
    const walls = document.querySelector('input[name="walls"]');
    const floor = document.querySelector('input[name="floor"]');

    const basePrice = 450;
    const totalPriceElement = document.querySelector('#total-price');


    function calculate() {
        let totalPrice = basePrice * parseInt(squareInput.value); // 450

        for (const radio of radioType) {
            if (radio.checked) {
                totalPrice = totalPrice * parseFloat(radio.value); // 450 * 1.15
            }
        }

        for (const radio of radioBuilding) {
            if (radio.checked) {
                totalPrice = totalPrice * parseFloat(radio.value); // 450 * 1.5 = 675
            }
        }

        for (const radio of radioRooms) {
            if (radio.checked) {
                totalPrice = totalPrice * parseFloat(radio.value);
            }
        }

        if (ceilings.checked) {
            totalPrice = totalPrice + parseFloat(ceilings.value) * parseInt(squareInput.value);
        }

        if (walls.checked) {
            totalPrice = totalPrice * parseFloat(walls.value); // ---
        }

        if (floor.checked) {
            totalPrice = totalPrice * parseFloat(floor.value); // ---
        }

        const formatter = new Intl.NumberFormat('ru');
        totalPriceElement.innerText = formatter.format(totalPrice);
    }

    // Связка range c тектовым полем
// Слушаем событие input
    squareRange.addEventListener('input', function () {
        squareInput.value = squareRange.value;
    });

// Связка текстового поля с range
    squareInput.addEventListener('input', function () {
        squareRange.value = squareInput.value;
    });

    calculate()

    for (const input of inputs) {
        input.addEventListener('input', function () {
        });


    }
}

export default CalcScript;

*/
const CalcScript = () => {

// Элементы формы. Квадратура помещения.
    const squareInput = document.querySelector('#square-input')
    const squareRange = document.querySelector('#square-range')

//Элементы формы. Светильники.
    const squareInputLamp = document.querySelector('#square-input-lamp')
    const squareRangeLamp = document.querySelector('#square-range-lamp')

//Связка range с текстовым полем
//Слушаем событие input
    squareRange.addEventListener('input', function () {                 //Квадратура Помещения
        squareInput.value = squareRange.value
    })

    squareRangeLamp.addEventListener('input', function () {             //Светильники
        squareInputLamp.value = squareRangeLamp.value
    })

//Связка текстового поля с range
    squareInput.addEventListener('input', function () {                 //Квадратура Помещения
        squareRange.value = squareInput.value
    })

    squareInputLamp.addEventListener('input', function () {             //Светильники
        squareRangeLamp.value = squareInputLamp.value
    })
}


export default CalcScript