//Tee funktio nimeltä logOddNumbers:
// - Se tulostaa konsoliin kaikki parittomat numerot 1 ja 100 välillä.
// Eli 1, 3, 5, 7, 9, 11 jne. lukuun 99 asti.
console.log (" --------- Silmukat 01 --------- ");
let str = "";
let laskuri = 1;
while (laskuri<100){
    str=str+laskuri+" ";
    laskuri=laskuri+2;
}
console.log(str);

// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.
console.log (" --------- Silmukat 02 --------- ");
str = "";
laskuri = 2;
while (laskuri<=50){
    str=str+laskuri+" "+(100-laskuri)+" ";
    laskuri=laskuri+2;
}
console.log(str);
/* Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 ja ajan (tunteina) ja laskee sitten keskinopeuden.
 Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */
// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.
console.log (" --------- Silmukat 03 --------- ");
while (true) {
let distance = prompt("Anna etäisyys");
if (distance==0){
    break;
}
if (isNaN(distance) || distance<0) {
    continue;
}
let time = prompt("Anna aika");
if (isNaN(time) || time<=0) {
    continue;
}
console.log("Keskinopeus on",distance/time);
}