const music = new Audio("audio/1.mp3");
//music varibale of type audio abhi initialize 1.mp3 se kia hai
// music.play();

const songs = [
  {
    id: 1,
    songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `faded <br><div class="subtitle">Alan Walker</div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `On and On <br><div class="subtitle">Cartoon</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `Warriyo <br><div class="subtitle">Mortals</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `Ertugrul Ghazi <br><div class="subtitle">Ertugrul</div>`,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: `Electroic Music <br><div class="subtitle">Electro</div>`,
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `Agar Tum sath ho <br><div class="subtitle">Alka Yagnik</div>`,
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: `Suna hai <br><div class="subtitle">Neha kakkar</div>`,
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: `Dilbar <br><div class="subtitle">Neha kakkar</div>`,
    poster: "img/9.jpg",
  },
  {
    id: 10,
    songName: `Duniya <br><div class="subtitle">Akhil</div>`,
    poster: "img/10.jpg",
  },
  {
    id: 11,
    songName: `Lagdi Lahore di <br><div class="subtitle">Guru Randha</div>`,
    poster: "img/11.jpg",
  },
  {
    id: 12,
    songName: `Putt jatt da <br><div class="subtitle">Putt jatt da</div>`,
    poster: "img/12.jpg",
  },
  {
    id: 13,
    songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
    poster: "img/13.jpg",
  },
  {
    id: 14,
    songName: `Baarishen <br><div class="subtitle">Atif Aslam</div>`,
    poster: "img/14.jpg",
  },
  {
    id: 15,
    songName: `Lut gaye<br><div class="subtitle">Jubin nautiyal</div>`,
    poster: "img/15.jpg",
  },
  {
    id: 16,
    songName: `Meri zindagi hai Tu <br><div class="subtitle">Jubin nautiyal</div>`,
    poster: "img/16.jpg",
  },
  {
    id: 17,
    songName: `Jab wo dil churaya tha <br><div class="subtitle">Rahat Fateh ali khan</div>`,
    poster: "img/17.jpg",
  },
  {
    id: 18,
    songName: `Pasoori <br><div class="subtitle">Ali sethi,Shae gill</div>`,
    poster: "img/18.jpg",
  },
  {
    id: 19,
    songName: `Ek Munde pagal ne saare <br><div class="subtitle">Ap dhillon</div>`,
    poster: "img/19.jpg",
  },
  {
    id: 20,
    songName: `Dunny 2k<br><div class="subtitle">Ap Dhillon</div>`,
    poster: "img/20.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  //pehli image change kar rahe isliye index 0
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
//is button par onclick playmusic
let wave = document.getElementById("wave");

//eventlistner added ki click hone par gana bajao
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    //gana bajo agar pause hai toh
    music.play();
    //wave chalao
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    //agar baj raha hai toh pause wave roko button
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

//background light kar rahe
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(105,105,170,.0)";
  });
};

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

let download_music = document.getElementById("download_music");
let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    //on click id le liya
    //abhi source change kar rahe
    music.src = `audio/${index}.mp3`;
    music.play();
    poster_master_play.src = `img/${index}.jpg`;
    //poster change kia
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    download_music.href = `audio/${index}.mp3`;
    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105,105,170,.2)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});
//time control

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
//set time

let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  // console.log(music_dur);
  //pura duration mil raha hai in seconds
  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  // console.log(seek.value);
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill");
  } else if (vol.value < 50) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
  } else {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index = index - 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `audio/${index}.mp3`;
  music.play();
  poster_master_play.src = `img/${index}.jpg`;
  //poster change kia
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  download_music.href = `audio/${index}.mp3`;
  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105,105,170,.2)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

next.addEventListener("click", () => {
  index = index + 1;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `audio/${index}.mp3`;
  music.play();
  poster_master_play.src = `img/${index}.jpg`;
  //poster change kia
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  download_music.href = `audio/${index}.mp3`;
  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105,105,170,.2)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_artist_left = document.getElementById("pop_artist_left");
let pop_artist_right = document.getElementById("pop_artist_right");
let pop_song = document.getElementsByClassName("pop_song")[0];
let item = document.getElementsByClassName("items")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 400;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 400;
});
pop_artist_right.addEventListener("click", () => {
  item.scrollLeft += 400;
});
pop_artist_left.addEventListener("click", () => {
  item.scrollLeft -= 400;
});

let shuffle = document.getElementsByClassName("shuffle")[0];
shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;
  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;
    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "shuffle";
      break;
    case "shuffle":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
});

music.addEventListener('ended',() => {
    let a = shuffle.innerHTML;
    switch(a){
        case "next" :
            nextMusic();
            break;
        case "repeat" :
            repeatMusic();
            break;
        case "shuffle" :
            randomMusic();
            break;
    }
})

const nextMusic = () =>{
        if(index == songs.length){
            index=1;
        }
        else{
            index++;
        }
        music.src = `audio/${index}.mp3`;
        music.play();
        poster_master_play.src = `img/${index}.jpg`;
        //poster change kia
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    
        let songTitles = songs.filter((els) => {
          return els.id == index;
        });
        download_music.href = `audio/${index}.mp3`;
        songTitles.forEach((elss) => {
          let { songName } = elss;
          title.innerHTML = songName;
          download_music.setAttribute("download", songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName("songItem"))[
          index - 1
        ].style.background = "rgb(105,105,170,.2)";
        makeAllplays();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        wave.classList.add("active1");
}

const repeatMusic = () =>{
    index;
    music.src = `audio/${index}.mp3`;
    music.play();
    poster_master_play.src = `img/${index}.jpg`;
    //poster change kia
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    download_music.href = `audio/${index}.mp3`;
    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105,105,170,.2)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
}

const randomMusic = () =>{
    let ran=Math.floor(Math.random() * 20)+1;
    index=ran;
    music.src = `audio/${index}.mp3`;
    music.play();
    poster_master_play.src = `img/${index}.jpg`;
    //poster change kia
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    download_music.href = `audio/${index}.mp3`;
    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105,105,170,.2)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
}
