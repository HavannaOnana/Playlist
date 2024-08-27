const darkMode = document.querySelector(".logo #darkmode");

darkMode.addEventListener("click", function(){
    const body = document.querySelector("body");
    //const navLinks = document.querySelectorAll("a");

    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'beige';
        body.style.color = 'black';
        //navLinks.forEach(link => link.style.color = "black");
        
    }
    else{
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        //navLinks.forEach(link => link.style.color = "white");
    }
})