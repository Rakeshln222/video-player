const video = document.getElementById('main-video');
const playPauseBtn = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const seekBar = document.getElementById('seek-bar');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
const muteBtn = document.getElementById('mute');
const muteIcon = document.getElementById('mute-icon');
const unmuteIcon = document.getElementById('unmute-icon');
const volumeBar = document.getElementById('volume-bar');
const fullscreenBtn = document.getElementById('fullscreen');
const theaterBtn = document.getElementById('theater');
const pipBtn = document.getElementById('pip');
const progressBar = document.querySelector('.progress');

const fileInput = document.getElementById('video-file-input');
fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        video.src = url;
        video.load();
        video.play();
    }
});

// Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
video.addEventListener('play', () => {
    playIcon.style.display = 'none';
    pauseIcon.style.display = '';
});
video.addEventListener('pause', () => {
    playIcon.style.display = '';
    pauseIcon.style.display = 'none';
});

// Seek Bar
video.addEventListener('timeupdate', () => {
    seekBar.value = (video.currentTime / video.duration) * 100 || 0;
    currentTimeElem.textContent = formatTime(video.currentTime);
    progressBar.style.width = ((video.currentTime / video.duration) * 100 || 0) + '%';
});
seekBar.addEventListener('input', () => {
    video.currentTime = (seekBar.value / 100) * video.duration;
});

// Duration
video.addEventListener('loadedmetadata', () => {
    durationElem.textContent = formatTime(video.duration);
});

// Mute/Unmute
muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    updateMuteIcon();
});
function updateMuteIcon() {
    if (video.muted || video.volume === 0) {
        muteIcon.style.display = 'none';
        unmuteIcon.style.display = '';
    } else {
        muteIcon.style.display = '';
        unmuteIcon.style.display = 'none';
    }
}
volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value;
    video.muted = video.volume === 0;
    updateMuteIcon();
});

// Fullscreen
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.parentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Theater Mode
let isTheater = false;
theaterBtn.addEventListener('click', () => {
    isTheater = !isTheater;
    document.body.style.background = isTheater ? '#000' : 'linear-gradient(120deg, #232526, #414345)';
});

// Picture-in-Picture
pipBtn.addEventListener('click', async () => {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
        try {
            await video.requestPictureInPicture();
        } catch (e) {
            alert('Picture-in-Picture not supported!');
        }
    }
});

// Utility
function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}

// Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case ' ': // Spacebar
            playPauseBtn.click();
            e.preventDefault();
            break;
        case 'f':
            fullscreenBtn.click();
            break;
        case 'm':
            muteBtn.click();
            break;
        case 'ArrowRight':
            video.currentTime += 5;
            break;
        case 'ArrowLeft':
            video.currentTime -= 5;
            break;
        case 'ArrowUp':
            video.volume = Math.min(video.volume + 0.05, 1);
            volumeBar.value = video.volume;
            updateMuteIcon();
            break;
        case 'ArrowDown':
            video.volume = Math.max(video.volume - 0.05, 0);
            volumeBar.value = video.volume;
            updateMuteIcon();
            break;
    }
});