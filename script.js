'use strict';

` Программа получает два параметра:
      1) Условный диаметр трубопровода
      2) Длину трубопровода (в метрах)
      и выдаёт объём воды для промывки
      в 3х кратном размере
`

const button = document.querySelector('.btn');
const btnDark = document.querySelector('.change');
const body = document.querySelector('.body');
const form = document.querySelector('.form-wrapper');
const diameterLabel = document.querySelector('.diameter-label');
const diameter = document.querySelector('.diameter');
const lengthLabel = document.querySelector('.length-label');
const lengthUp = document.querySelector('.length-up');

diameterLabel.addEventListener('mouseover', () => {
    diameter.style = 'display: block'
});

diameterLabel.addEventListener('mouseout', () => {
    diameter.style = 'display: none'
});

lengthLabel.addEventListener('mouseover', () => {
    lengthUp.style = 'display: block'
});

lengthLabel.addEventListener('mouseout', () => {
    lengthUp.style = 'display: none'
});

btnDark.addEventListener('click', () => {
    body.classList.toggle('dark')
    form.classList.toggle('dark')
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    const inputDiameter = Number(document.getElementById('diameter').value);
    const inputLength = Number(document.getElementById('length').value);
    const result = document.querySelector('.result');
    let value;

    switch (inputDiameter) {
        case 700:
            value = 0.390; break;
        case 600:
            value = 0.300; break;
        case 500:
            value = 0.210; break;
        case 450:
            value = 0.135; break;
        case 400:
            value = 0.135; break;
        case 350:
            value = 0.101; break;
        case 300:
            value = 0.075; break;
        case 219:
            value = 0.034; break;
        case 200:
            value = 0.034; break;
        case 250:
            value = 0.053; break;
        case 273:
            value = 0.053; break;
        case 150:
            value = 0.018; break;
        case 159:
            value = 0.018; break;
        case 125:
            value = 0.012; break;
        case 133:
            value = 0.012; break;
        case 100:
            value = 0.008; break;
        case 108:
            value = 0.008; break;
        case 80:
            value = 0.0053; break;
        case 89:
            value = 0.0053; break;
        case 70:
            value = 0.0039; break;
        case 76:
            value = 0.0039; break;
        case 50:
            value = 0.0014; break;
        case 57:
            value = 0.0014; break;
        default:
            value = 0;
            break;
    }

    if (!value) {
        result.textContent = 'Введите верный диаметр!';
    } else {
        if (!inputLength) {
            result.textContent = 'Введите длину трубопровода!'
        } else {
            result.textContent = Math.round((((value * inputLength) * 2) * 3), 4) + ' Куба';
        }
    }
});