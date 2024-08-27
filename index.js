const darkMode = document.querySelector(".logo #darkmode");

darkMode.addEventListener("click", function(){
    const body = document.querySelector("body");

    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'beige';
        body.style.color = 'black';
        
    }
    else{
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
})