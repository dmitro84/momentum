import userPlayList from "./playList";

const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');




userPlayList.forEach((el) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    playListContainer.append(li);
});



const audio = new Audio();



export default function turnPlayer() {
    let isPlay = false;
    let playNum = 0;


    function playAudio() {
        if (isPlay) {
            isPlay = false;
            toggleBtn();
            return audio.pause();
        }

        audio.src = userPlayList[playNum].src;
        audio.currentTime = 0;
        toggleBtn();
        audio.play();
        isPlay = true;
        document.querySelectorAll('.play-item')[playNum].classList.add('item-active')

    }

    function toggleBtn() {
        playBtn.classList.toggle('pause');
    }

    function onClickPlayPrev() {
        removeClassActive();
        if (playNum <= 0) {
            playNum = userPlayList.length - 1;
        } else {
            playNum--;

        }

        if (isPlay) {
            playAudio();
        }

        playAudio();


    }

    function onClickPlayNext() {
        removeClassActive();
        if (playNum >= userPlayList.length - 1) {
            playNum = 0;
        } else {
            playNum++;
        }

        if (isPlay) {
            playAudio();
        }

        playAudio();
    }

    function playNextTrack() {
        isPlay = false;
        playNum++;
        toggleBtn();
        playAudio();
        removeClassActive();

    }

    function removeClassActive() {
        document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
    }

    playBtn.addEventListener('click', playAudio)
    playPrevBtn.addEventListener('click', onClickPlayPrev);
    playNextBtn.addEventListener('click', onClickPlayNext);
    audio.addEventListener('ended', playNextTrack);

}

