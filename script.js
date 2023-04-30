let predictions = "";

const button = document.querySelector('.forecast-btn')
const forecastItem = document.querySelector('#forecast-item')
const container = document.querySelector('.forecasts')
const basic = document.querySelector('h1')
const probability = document.querySelector('p')


button.addEventListener('click', function() {

    const card = makeCardByTemplate(predictions, basic);

    if (basic.textContent != "") {
        container.prepend(card);
    }

    probability.textContent = generateRandomValue(0, 100) + "%";

    let number = generateRandomValue(0, 5);

    if (number === 1) {
        predictions = "Ты отправишься в путешествие";
    } else if (number === 2) {
        predictions = "Ты станешь богат";
    } else if (number === 3) {
        predictions = "Завтра будет лучше, чем вчера";
    } else if (number === 4) {
        predictions = "Тебя ждет успех";
    }

    basic.textContent = predictions;


    function generateRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    }

    function makeCardByTemplate(predictions, basic) {
        const myCard = forecastItem.content.cloneNode(true);

        myCard.querySelector('h3').textContent = predictions.textContent;
        myCard.querySelector('p').textContent = basic.textContent;

        return myCard;

    }

})



/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */