
const UI_image = document.querySelector("img");
const UI_musicTitle = document.getElementById("title");
const UI_musicArtist = document.getElementById("artist");
const UI_music = document.querySelector("audio");
const UI_currentTime = document.getElementById("current-time");
const UI_totalTime = document.getElementById("total-time");
const UI_progress = document.getElementById("progress-container");
const UI_progressBar = document.getElementById("progress");
const UI_previous = document.getElementById("prev");
const UI_play = document.getElementById("play");
const UI_next = document.getElementById("next");

const musicArray = [
    {
        name:"littleDoYouKnow",
        musicName:"Little Do You Know",
        artistName:"Alex & Seirra"
    },
    {
        name:"heatWaves",
        musicName:"Heat Waves",
        artistName:"Glass Animals"
    },
    {
        name:"mysteryOfLove",
        musicName:"Mystery Of Love",
        artistName:"Sufjan Stevens "
    },
    {
        name:"loveMeLikeYouDo",
        musicName:"Love Me Like YouDo",
        artistName:"Ellie Goulding"
    }
]
let isMusicPlaying = false;
let musicIndex = 0;

function initialMusic(){
    UI_image.src = `./img/${musicArray[musicIndex].name}.jpg`; 
    UI_musicTitle.textContent = `${musicArray[musicIndex].musicName}`;
    UI_musicArtist.textContent = `${musicArray[musicIndex].artistName}`;
    UI_music.src = `./music/${musicArray[musicIndex].name}.mp3`;

    UI_totalTime.textContent = `3:01`;
    UI_currentTime.textContent = `0:00`;

}

function playMusic(e){
    if(isMusicPlaying){
        UI_music.pause();
        UI_play.classList.replace("fa-pause","fa-play");
        isMusicPlaying = false;

    }else{
        UI_music.play();
        UI_play.classList.replace("fa-play","fa-pause");
        isMusicPlaying = true;


    }
}

function previousMusic(e){
    musicIndex--;
    if(musicIndex<0){
        musicIndex = musicArray.length -1;
    }
    UI_image.src = `./img/${musicArray[musicIndex].name}.jpg`; 
    UI_musicTitle.textContent = `${musicArray[musicIndex].musicName}`;
    UI_musicArtist.textContent = `${musicArray[musicIndex].artistName}`;
    UI_music.src = `./music/${musicArray[musicIndex].name}.mp3`;
    UI_music.play();
    UI_play.classList.replace("fa-play","fa-pause");
    isMusicPlaying = true;

}

function nextMusic(e){
    musicIndex++;
    if(musicIndex > musicArray.length -1 ){
        musicIndex = 0;
    }
    UI_image.src = `./img/${musicArray[musicIndex].name}.jpg`; 
    UI_musicTitle.textContent = `${musicArray[musicIndex].musicName}`;
    UI_musicArtist.textContent = `${musicArray[musicIndex].artistName}`;
    UI_music.src = `./music/${musicArray[musicIndex].name}.mp3`;
    UI_music.play();
    UI_play.classList.replace("fa-play","fa-pause");
    isMusicPlaying = true;

}


function updateProgressBar(e){
    // console.log((e.srcElement.currentTime/e.srcElement.duration)*100);
    UI_progressBar.style.width = `${(e.srcElement.currentTime/e.srcElement.duration)*100}%`;
    // console.log(UI_music.currentTime,UI_music.duration);
    let totalMinutes = Math.floor(UI_music.duration/60);
    let totalSeconds = Math.floor(UI_music.duration%60);
    if (UI_music.duration%60 < 10){
        totalSeconds = `0${Math.floor(UI_music.duration%60)}`;
    }
    let currentMinutes = Math.floor(UI_music.currentTime/60);
    let currentSeconds = Math.floor(UI_music.currentTime%60);
    if (UI_music.currentTime%60 < 10){
        currentSeconds = `0${Math.floor(UI_music.currentTime%60)}`;
    }
    if(totalMinutes){
        UI_totalTime.textContent = `${totalMinutes}:${totalSeconds}`;

    }
    UI_currentTime.textContent = `${currentMinutes}:${currentSeconds}`;
}

function showProgress(e){
    // console.log(e.offsetX,e.srcElement.clientWidth)
    console.log((e.offsetX/this.clientWidth)*100);
    // console.log(this)
    let percent = (e.offsetX/this.clientWidth)*100;
    let time = (e.offsetX/this.clientWidth)*UI_music.duration;
    UI_progressBar.style.width = `${percent}%`;
    UI_music.currentTime = `${time}`;
    
}


// Initializing
initialMusic();

UI_play.addEventListener("click",playMusic);
UI_next.addEventListener("click",nextMusic);
UI_previous.addEventListener("click",previousMusic);
UI_music.addEventListener("timeupdate",updateProgressBar)
UI_progress.addEventListener("click",showProgress);
