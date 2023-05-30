console.log("Working");
let position = 1;
let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("mainplaybutton");
let masterPause = document.getElementById("mainpausebutton");
let myProgressBar = document.getElementById("progressbar");
let trackname = document.getElementById("trackname");
let tracklogo = document.getElementById("tracklogo");
let gifOpacity = document.getElementById("giphy");
let playicon = document.getElementById("mainplaybutton");
let pauseicon = document.getElementById("mainpausebutton");
let songItems = Array.from(document.getElementsByClassName("SONGITEMS"));


let songs = [
    {"songName":"Baari_by_Bilal_Saeed", "filePath":"songs/1.mp3", "coverPath":"images/track1.png"},
    {"songName":"Chan_Vekhya", "filePath":"songs/2.mp3", "coverPath":"images/track2.png"},
    {"songName":"Feelings_Vatsala", "filePath":"songs/3.mp3", "coverPath":"images/track3.png"},
    {"songName":"Girl_I_Need_You", "filePath":"songs/4.mp3", "coverPath":"images/track4.png"},
    {"songName":"DJ_Snake_ft.", "filePath":"songs/5.mp3", "coverPath":"images/track5.png"},
    {"songName":"Elektronomia", "filePath":"songs/6.mp3", "coverPath":"images/track6.png"},
    {"songName":"Without_Me", "filePath":"songs/7.mp3", "coverPath":"images/track7.png"},
    {"songName":"Channa_Ve", "filePath":"songs/8.mp3", "coverPath":"images/track8.png"},
    {"songName":"i_hate_u_i_love_u", "filePath":"songs/9.mp3", "coverPath":"images/track9.png"},
    {"songName":"Head_In_The_Clouds", "filePath":"songs/10.mp3", "coverPath":"images/track10.png"},
    {"songName":"Raabta", "filePath":"songs/11.mp3", "coverPath":"images/track11.png"},
    {"songName":"Death_Bed", "filePath":"songs/12.mp3", "coverPath":"images/track12.png"},
    {"songName":"Comethru", "filePath":"songs/13.mp3", "coverPath":"images/track13.png"},
    {"songName":"Desires", "filePath":"songs/14.mp3", "coverPath":"images/track14.png"},
    {"songName":"Mi-Amor", "filePath":"songs/15.mp3", "coverPath":"images/track15.png"},
    {"songName":"Taarefan", "filePath":"songs/16.mp3", "coverPath":"images/track16.png"},
    {"songName":"Jag_Ghoomeya", "filePath":"songs/17.mp3", "coverPath":"images/track17.png"},
    {"songName":"Dil_Royi_Jaye", "filePath":"songs/18.mp3", "coverPath":"images/track18.png"},
    {"songName":"Mera_Safar", "filePath":"songs/19.mp3", "coverPath":"images/track19.png"},
    {"songName":"Maan_Meri_Jaan", "filePath":"songs/20.mp3", "coverPath":"images/track20.png"},
]

songItems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
}) 

audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        gifOpacity.style.opacity = 1;
        pauseicon.style.opacity = 1;
        playicon.style.opacity = 0.1;
    } 
})

masterPause.addEventListener('click', ()=>{
    if(audioElement.play || audioElement.currentTime >0)
    {
        audioElement.pause();
        gifOpacity.style.opacity = 0;
        pauseicon.style.opacity = 0.1;
        playicon.style.opacity = 1;
    } 
})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

Array.from(document.getElementsByClassName('song_logo')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        position = parseInt(e.target.id);
        pauseicon.style.opacity = 1;
        playicon.style.opacity = 0.1;
        audioElement.src = `songs/${position}.mp3`;
        trackname.innerText = songs[position-1].songName;
        tracklogo.src = songs[position-1].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        gifOpacity.style.opacity = 1;
    })
})


document.getElementById("previousbutton").addEventListener('click',()=>{
    if(position<2)
    {
        position=20
    }
    else
    {
        position = position - 1;
    }
    pauseicon.style.opacity = 1;
    playicon.style.opacity = 0.1;
    audioElement.src = `songs/${position}.mp3`;
    trackname.innerText = songs[position-1].songName;
    tracklogo.src = songs[position-1].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    gifOpacity.style.opacity = 1;
})

document.getElementById("nextbutton").addEventListener('click',()=>{
    if(position>19)
    {
        position=1
    }
    else
    {
        position = position + 1;
    }
    pauseicon.style.opacity = 1;
    playicon.style.opacity = 0.1;
    audioElement.src = `songs/${position}.mp3`;
    trackname.innerText = songs[position-1].songName;
    tracklogo.src = songs[position-1].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    gifOpacity.style.opacity = 1;
})

