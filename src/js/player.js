import userPlayList from "./playList";

const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const songTitle = document.querySelector('.song-title');
const duration = document.querySelector('.duration');
const timerHeader = document.querySelector('.timer-header');
const muteBtn = document.querySelector('.mute-button');
const volumeControl = document.querySelector('.volume-control');
const curerentProgress = document.querySelector('.current-progress');
const progressLine = document.querySelector('.duration-player');



userPlayList.forEach((el, index) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    li.setAttribute('data-idx', index);
    playListContainer.append(li);
});



function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}




const audio = new Audio();



export default function turnPlayer() {
    let isPlay = false;

    let playNum = 0;

    songTitle.textContent = userPlayList[playNum].title;

    function playAudio() {
        if (isPlay) {
            isPlay = false;
            toggleBtn();
            changeButtonPlayList();
            return pauseAudio();
        }

        audio.src = userPlayList[playNum].src;
        audio.volume = 0.75;
        audio.currentTime = 0;
        toggleBtn();
        audio.play();
        isPlay = true;
        document.querySelectorAll('.play-item')[playNum].classList.add('item-active');
        songTitle.textContent = userPlayList[playNum].title;
        changeButtonPlayList();

    }

    function pauseAudio() {
        audio.pause();
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

    function removeClassActive() {
        document.querySelectorAll('.play-item')[playNum].classList.remove('item-active');
        document.querySelectorAll('.play-item')[playNum].style.setProperty("--display-pause", 'none');
        document.querySelectorAll('.play-item')[playNum].style.setProperty("--display-play", 'block');
    }

    function setTrackDuration() {
        duration.textContent = getTimeCodeFromNum(audio.duration);
    }

    function setTrackCurrentTime() {
        timerHeader.textContent = getTimeCodeFromNum(audio.currentTime);
        curerentProgress.style.width = audio.currentTime / audio.duration * 100 + "%";
    }

    function onClickMute() {
        if (!audio.muted) {
            audio.muted = true;
            muteBtn.classList.toggle('muted');
        } else {
            audio.muted = false;
            muteBtn.classList.toggle('muted');
        }
    }

    function onChangeVolume() {
        audio.volume = volumeControl.value;
        audio.muted = false;
        if (+volumeControl.value === 0) {
            muteBtn.classList.add('muted');
            muteBtn.disabled = true;
        } else {
            muteBtn.classList.remove('muted');
            muteBtn.disabled = false;
        }


        setVolumeProgress(+volumeControl.value)

    }
    function setVolumeProgress(progress) {
        const value = `${progress * 100}%`
        volumeControl.style.setProperty('--progress', value)
    }
    function onClickChangeTime(e) {
        const timelineWidth = window.getComputedStyle(progressLine).width.slice(0, -2);
        const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
        audio.currentTime = timeToSeek;
    }

    function onClickChangeTrack(evt) {
        removeClassActive();
        playNum = +evt.target.dataset.idx;
        if (isPlay) {
            removeClassActive();
            pauseAudio();
        } else {
            evt.target.style.setProperty("--display-play", 'none');
            evt.target.style.setProperty("--display-pause", 'block');
        }
        playAudio();

    }

    function changeButtonPlayList() {
        const playItem = document.querySelectorAll('.play-item')[playNum];
        if (isPlay) {
            playItem.style.setProperty("--display-pause", 'block');
            playItem.style.setProperty("--display-play", 'none');
        } else {
            playItem.style.setProperty("--display-pause", 'none');
            playItem.style.setProperty("--display-play", 'block');
        }
    }

    document.querySelectorAll('.play-item').forEach((el) => {
        el.addEventListener('click', onClickChangeTrack);
    })



    playBtn.addEventListener('click', playAudio);
    playPrevBtn.addEventListener('click', onClickPlayPrev);
    playNextBtn.addEventListener('click', onClickPlayNext);
    audio.addEventListener('ended', onClickPlayNext);
    audio.addEventListener("loadeddata", setTrackDuration);
    audio.addEventListener("timeupdate", setTrackCurrentTime);
    muteBtn.addEventListener('click', onClickMute)
    volumeControl.addEventListener('input', onChangeVolume);
    progressLine.addEventListener('click', onClickChangeTime)



}

