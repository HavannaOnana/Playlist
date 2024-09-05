
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

//code for the javascript code for the songs and playlist
let SongPlaylist = document.querySelector(".songplaylist");
const Audio = document.querySelector("#myAudio");

//the artist variables
let Asake = SongPlaylist.querySelector("#asake");
let DojaCat = SongPlaylist.querySelector("#dojacat");
let PartyNDoor = SongPlaylist.querySelector("#partynextdoor");
let Sujal = SongPlaylist.querySelector("#sujal");
let Winny = SongPlaylist.querySelector("#winny");
let PostMalone = SongPlaylist.querySelector("#postmalone");

//music source
const MusicSource = document.querySelector("#source");

//artis image
let ArtistImage = document.querySelector(".artist_image")

//artist name
let SelectedArtistName = document.querySelector(".artist_name");
let Title = document.querySelector(".title");

//description text
let DescriptionText = document.querySelector(".description_text");
let Year = document.querySelector(".year");


//time for eventlisteners
Asake.addEventListener("click",function(){
   MusicSource.setAttribute("src","/music/Asake, Wizkid - MMS (Official Visualizer)(1).mp3")
   Audio.load();
   Audio.play();

   //changing the image
   ArtistImage.src = "/static/images/asake.png";

   //changing the details
   SelectedArtistName.innerHTML = "Asake X Wizkid";
   Title.innerHTML = "MMS";
   DescriptionText.innerHTML = "For this incredible soundtrack, Asake teamed up with<br> the legendary Afrobeats sensation, Wizkid, whose influence adds<br> a dynamic layer to the song’s<br> production";
   Year.innerHTML = "2024";

})

DojaCat.addEventListener("click",function(){
   MusicSource.setAttribute("src","/music/Doja Cat - So High (Official Audio).mp3")
   Audio.load();
   Audio.play();

   //changing the image
   ArtistImage.src = "/static/images/dojacat.png";

   //changing the details
   SelectedArtistName.innerHTML = "Doja Cat";
   Title.innerHTML = "So High";
   DescriptionText.innerHTML = "So High is the debut single by American rapper<br> and singer Doja Cat. She originally self-published an early version of the song<br> exclusively to SoundCloud on November 8";
   Year.innerHTML = "2012";

})

PartyNDoor.addEventListener("click",function(){
   MusicSource.setAttribute("src","/music/PARTYNEXTDOOR - FOR CERTAIN.mp3")
   Audio.load();
   Audio.play();

   //changing the image
   ArtistImage.src = "/static/images/partynextdoor.png";

   //changing the details
   SelectedArtistName.innerHTML = "PartyNextDoor";
   Title.innerHTML = "For Certain";
   DescriptionText.innerHTML = "Jahron Anthony PartyNextDoor was born to a Jamaican mother<br> and a Trinidadian father in Mississauga, Ontario.";
   Year.innerHTML = "2024";

})

PostMalone.addEventListener("click",function(){
   MusicSource.setAttribute("src","/music/Post Malone - Laugh It Off (Official Lyric Video)(1).mp3")
   Audio.load();
   Audio.play();

   //changing the image
   ArtistImage.src = "/static/images/postmalone.png";

   //changing the details
   SelectedArtistName.innerHTML = "Post Malone";
   Title.innerHTML = "Laugh It Off";
   DescriptionText.innerHTML = "Austin Richard Post, known professionally as Post Malone, is an American rapper,<br> singer, songwriter and record producer..";
   Year.innerHTML = "2023";

})


Sujal.addEventListener("click",function(){
   MusicSource.setAttribute("src","/music/Rushy - Pressure [Music Video].mp3")
   Audio.load();
   Audio.play();

   //changing the image
   ArtistImage.src = "/static/images/sujal.png";

   //changing the details
   SelectedArtistName.innerHTML = "Rushy";
   Title.innerHTML = "Pressure";
   DescriptionText.innerHTML = "Recording “Trippidy Trap” in 2017, Rushy is now coming into himself as an artist<br> and understanding what pockets he fills, I’m<br> in the studio with him a lot and he gets tighter<br> and tighter with every session.";
   Year.innerHTML = "2023";

})


Winny.addEventListener("click",function(){
   MusicSource.setAttribute("src","/music/Winny - Pretty (Short Film) [Lyric Video].mp3")
   Audio.load();
   Audio.play();

   //changing the image
   ArtistImage.src = "/static/images/winny.png";

   //changing the details
   SelectedArtistName.innerHTML = "Winny";
   Title.innerHTML = "Pretty";
   DescriptionText.innerHTML = "With a beautifully distinct vocal tone and texture,<br> the impressive young artist seeks to communicate compassion,<br> self awareness and belonging in her music";
   Year.innerHTML = "2022";

})







