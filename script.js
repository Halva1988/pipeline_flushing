'use strict';

` Программа получает два параметра:
      1) Условный диаметр трубопровода
      2) Длину трубопровода (в метрах)
      и выдаёт объём воды для промывки
      в 3х кратном размере
`

const button = document.querySelector('.btn');
const btnTheme = document.querySelector('.change');
const body = document.querySelector('.body');
const form = document.querySelector('.form-wrapper');
const diameterLabel = document.querySelector('.diameter-label');
const diameter = document.querySelector('.diameter');
const lengthLabel = document.querySelector('.length-label');
const lengthUp = document.querySelector('.length-up');

// Для сохранения темы в LocalStorage

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark');
    form.classList.add('dark');
}

// Подсказка при наведении на label с вводом диаметра

diameterLabel.addEventListener('mouseover', () => {
    diameter.style = 'display: block'
});

diameterLabel.addEventListener('mouseout', () => {
    diameter.style = 'display: none'
});

// Подсказка при наведении на label с вводом длины

lengthLabel.addEventListener('mouseover', () => {
    lengthUp.style = 'display: block'
});

lengthLabel.addEventListener('mouseout', () => {
    lengthUp.style = 'display: none'
});

// Поменять тему и сохранить в localStorage

btnTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    form.classList.toggle('dark');
    let theme = 'light';
    if (body.classList.contains('dark')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

// Вычисление по нажатию на кнопку

button.addEventListener('click', (event) => {
    event.preventDefault();

    const inputDiameter = Number(document.getElementById('diameter').value);
    const inputLength = Number(document.getElementById('length').value);
    const result = document.querySelector('.result');
    let value;

    function getValue(inputDiameter) {
        const diameterDate = {
            '700': '0.390',
            '600': '0.300',
            '500': '0.210',
            '450': '0.135',
            '400': '0.135',
            '350': '0.101',
            '300': '0.075',
            '273': '0.053',
            '250': '0.053',
            '219': '0.034',
            '200': '0.034',
            '159': '0.018',
            '150': '0.018',
            '133': '0.012',
            '125': '0.012',
            '108': '0.008',
            '100': '0.008',
            '89': '0.0053',
            '80': '0.0053',
            '76': '0.0039',
            '70': '0.0039',
            '57': '0.0014',
            '50': '0.0014',
            '0': '0'
        };
        return value = +diameterDate[inputDiameter];
    };

    getValue(inputDiameter);

    if (!value) {
        result.textContent = 'Введите верный диаметр!';
    } else {
        if (!inputLength) {
            result.textContent = 'Введите длину трубопровода!'
        } else {
            result.textContent = Math.round(((value * (inputLength * 2)) * 3), 4) + ' Куба';
        }
    }
});
