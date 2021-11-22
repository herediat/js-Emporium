let myNavList = document.querySelectorAll(".nav_link")
console.log(myNavList);

let principalTitle = document.querySelector("h1")
console.log(principalTitle);

let myH2 = document.querySelectorAll("h2")
console.log(myH2);

let brightMode = document.querySelector(".clair");
console.log(brightMode);

let darkMode = document.querySelector(".sombre");
console.log(darkMode);

let connexion = document.querySelector(".connectBtn")
console.log(connexion);

let popups = document.querySelector(".container-popup")
console.log(popups);

let cancelPopup = document.querySelector(".close-btn")
console.log(cancelPopup);

//################################ DARKMODE ###########################################

darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "black"
    principalTitle.style.color = "white"
    myNavList.forEach(el => {
        el.style.color = "white"
    });
});

brightMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "white"
    principalTitle.style.color = "black"
    myNavList.forEach(el => {
        el.style.color = "black"
    });
})



//##################################### Navbar ##############################################
let mainMenu = document.querySelector(".mainMenu")
console.log(mainMenu);
let closeMenu = document.querySelector(".closeMenu")
console.log(closeMenu);
let openMenu = document.querySelector(".openMenu")
console.log(openMenu);


openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);


function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0"
}

function close(){
    mainMenu.style.top = "-100%";
}


//########################## Connexion Btn ##################
connexion.addEventListener("click", popup);
    function popup(){ 
        popups.style.display = "block"

}

cancelPopup.addEventListener("click", cancel)
function cancel(){
    popups.style.display = "none"
}

