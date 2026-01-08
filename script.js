let numero = 0
// lien html et js 
let modeBtn = document.querySelector("#modeBtn");
let colorCode = document.querySelector("#colorCode");

// def actions exécutées lorsque je clique sur le bouton
let couleurs = [
    "red",
    "pink",
    "yellow",
    "green",
    "blue",
    "purple",
    "orange"
]
modeBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = couleurs[numero];     // changer le fond
    numero = numero + 1

    if (numero >= couleurs.length){
        numero = 0
    }
});



