console.log('welcome to spotify');
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: 'let me love you', filepath: '/songs/1.mp3', coverpath: '/covers/1.jpg' },
    { songname: 'let me love you2', filepath: '/songs/2.mp3', coverpath: '/covers/2.jpg' },
    { songname: 'let me love you3', filepath: '/songs/3.mp3', coverpath: '/covers/3.jpg' },
    { songname: 'let me love you4', filepath: '/songs/4.mp3', coverpath: '/covers/4.jpg' },
    { songname: 'let me love you5', filepath: '/songs/5.mp3', coverpath: '/covers/5.jpg' },
    { songname: 'let me love you6', filepath: '/songs/6.mp3', coverpath: '/covers/6.jpg' },
    { songname: 'let me love you7', filepath: '/songs/7.mp3', coverpath: '/covers/7.jpg' },
    { songname: 'let me love you8', filepath: '/songs/8.mp3', coverpath: '/covers/8.jpg' },
    { songname: 'let me love you9', filepath: '/songs/9.mp3', coverpath: '/covers/9.jpg' },
    { songname: 'let me love you10', filepath: '/songs/10.mp3', coverpath: '/covers/10.jpg' },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
})

masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate', () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src = `songs/${songindex + 1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0
    }
    else {
        songindex += 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
