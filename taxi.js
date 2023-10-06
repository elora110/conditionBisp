"use strict"

let feurouge = 30;
let sons = ["anissa", "greedy", "mexico", "revolution", "here"];
let perso = "john";
let santemental = 10;
let changementtaxi = 0;
// boucle 
//tant que i différent de 30(i!)
//i++ = i+1
let sonchoisi;
for (let i=0; i<30;i++){
    // Générer un nombre aléatoire entre 0 et 4 pour choisir un son
sonchoisi = Math.floor(Math.random() * 5);
if (santemental<=0){
    console.log("john a epuisé sa santé mental");
    i=30;
};
//santé mental < 0 = john est mort 
//i=30 pour arreter la boucle 
if (sonchoisi===0) {
    //=== test si deux valeurs sont egals
   santemental -=1;
   changementtaxi +=1;
   console.log("john a perdu 1 point de sante mental");
   console.log("john change de taxi");
};
//le son fait baisser la sante mental 
console.log(sonchoisi); 
};
if (santemental>0){
    console.log(`john est arrivé chez lui en changeant ${changementtaxi} fois de taxi`);
//santé mental > 0 =john est arrivé chez lui 
};