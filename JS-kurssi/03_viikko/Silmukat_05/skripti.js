// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,
// kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen
// numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
let laskuri=0;
let sum=0;
while (true) {
    let num=parseFloat(prompt("Syötä luku: "));
    if (num==0){
        break;
    }
   // if (isNaN(num)==false){
        laskuri++;
        sum=sum+num;
       // }
   // else {
     //   break;
   // }
}
console.log("Keski arvo:", sum/laskuri);