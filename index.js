
// photo shuffle
const PhotoShuffleDiv = document.querySelector(".photoshuffle");
const LowerDiv = document.querySelector("#lower-tier");
const ArtistName = LowerDiv.querySelector(".name");
const NOF = LowerDiv.querySelector(".number-of-listeners");
const RightDiv = PhotoShuffleDiv.querySelector(".right");
let info = RightDiv.querySelector(".play");
const Youtube = RightDiv.querySelector(".youtube")

let BackgroundImages = [
   "/static/images/1.png",
   "/static/images/2.png",
   "/static/images/3.png",
   "/static/images/4.png",
   "/static/images/5.png",
];

//PhotoShuffleDiv.style.backgroundImage = `url(${BackgroundImages[4]})`;

let index = 0;

let interval = setInterval(()=>{
    PhotoShuffleDiv.style.backgroundImage = `url(${BackgroundImages[index]})`;

    PhotoShuffleDiv.classList.remove('fadein');

    PhotoShuffleDiv.style.backgroundImage = `url(${BackgroundImages[index]})`;

    //if statements to change the info from photo shuffle 
    if(BackgroundImages[index] === "/static/images/1.png" ){
       ArtistName.innerHTML = "Doja Cat";
       NOF.innerHTML = "24,542,800";
       info.setAttribute('href', 'https://en.wikipedia.org/wiki/Doja_Cat');
       Youtube.setAttribute('href','https://www.youtube.com/@dojacat');
    }

    else if(BackgroundImages[index] === "/static/images/2.png" ){
        ArtistName.innerHTML = "SZA";
        NOF.innerHTML = "21,333,234";
        info.setAttribute('href', 'https://en.wikipedia.org/wiki/SZA');
        Youtube.setAttribute('href','https://www.youtube.com/@sza');
     }

     else if(BackgroundImages[index] === "/static/images/3.png" ){
        ArtistName.innerHTML = "PartyNDoor";
        NOF.innerHTML = "5,999,435";
        info.setAttribute('href', 'https://en.wikipedia.org/wiki/PartyNextDoor');
        Youtube.setAttribute('href','https://www.youtube.com/@PARTYOMO');
     }

     else if(BackgroundImages[index] === "/static/images/4.png" ){
        ArtistName.innerHTML = "Tyla";
        NOF.innerHTML = "9,000,531";
        info.setAttribute('href', 'https://en.wikipedia.org/wiki/Tyla_(South_African_singer)');
        Youtube.setAttribute('href','https://www.youtube.com/@Tylaofficial');
     }

     else if(BackgroundImages[index] === "/static/images/5.png" ){
        ArtistName.innerHTML = "DJO";
        NOF.innerHTML = "745,999";
        info.setAttribute('href', 'https://en.wikipedia.org/wiki/Joe_Keery');
        Youtube.setAttribute('href','https://www.youtube.com/channel/UChwJDTqACGvdzI7-BI_BX5w');
     }


    //set timeout for adding the fade-in class
    setTimeout(() => {
        PhotoShuffleDiv.classList.add('fadein');
    }, 10);

    PhotoShuffleDiv.offsetHeight; 

    //incrementing the index
    index++;

    if(index >= BackgroundImages.length){
        //we are resetting the whole loop again
        index = 0;
    }
},7000)