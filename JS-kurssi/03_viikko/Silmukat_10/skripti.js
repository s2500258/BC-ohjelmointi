/* 
Kirjoita funktio nimeltä countdownTimer:
- Ota syötteenä luku (esim. 10) ja simuloi lähtölaskenta konsolissa.
- Tulosta jokainen luku laskevassa järjestyksessä nollaan asti
- Lopuksi tulosta: "Aika loppui!".
*/
/*function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
*/

/* let luku=prompt("Kuinka monta?");
for (i=luku;i>0;i--){
   console.log(i);
}
console.log("Aika loppui!"); 
let s="";
function bla(){
    console.log(Math.random());
} */

let luku=prompt("Kuinka monta?");
for (i=0;i<luku;i++){
  (function(num) {
    setTimeout(() => {console.log(luku-num);}, (num)*1000);
  })(i);
}

setTimeout(() => {console.log("Aika loppui!");}, luku*1000);

