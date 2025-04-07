/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
let jatkaminen="k";
let sum=0;
let laskuri=0;
while (jatkaminen=="k"){
    let num=parseFloat(prompt("Syötä luku:"));
    sum=sum+num;
    laskuri++;
    jatkaminen=prompt('Haluatko jatkaa numeroiden antamista? (k/e):');
}
console.log("Keski arvo:", sum/laskuri);