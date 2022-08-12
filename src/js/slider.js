import { getTimeOfDay } from "./greeting";

const btnNext = document.querySelector('.slide-next');
const btnPrev = document.querySelector('.slide-prev');

const timeOfDay = getTimeOfDay(new Date().getHours());


function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let bgNum = getRandomNum(1, 20);

function setBg(timeOfDay, num) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/kuzmich84/stage1-tasks/assets/images/${timeOfDay}/${String(num).padStart(2, 0)}.jpg`;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`
    };
}

function getSlideNext() {
    bgNum++
    if (bgNum > 20) {
        bgNum = 1
    }

    setBg(timeOfDay, bgNum);
}

function getSlidePrev() {
    bgNum--
    if (bgNum <= 0) {
        bgNum = 20
    }

    setBg(timeOfDay, bgNum);
}

btnNext.addEventListener('click', getSlideNext);
btnPrev.addEventListener('click', getSlidePrev);


setBg(timeOfDay, bgNum);