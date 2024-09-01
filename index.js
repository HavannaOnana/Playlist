const darkMode = document.querySelector(".logo #darkmode");

darkMode.addEventListener("click", function(){
    const body = document.querySelector("body");

    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        
    }
    else{
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
})

// photo shuffle
const PhotoShuffleDiv = document.querySelector(".photoshuffle");
const LowerDiv = document.querySelector("#lower-tier");
const ArtistName = LowerDiv.querySelector(".name");
const NOF = LowerDiv.querySelector(".number-of-listeners");
