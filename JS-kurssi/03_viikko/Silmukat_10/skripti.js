/* 
Kirjoita funktio nimeltä countdownTimer:
- Ota syötteenä luku (esim. 10) ja simuloi lähtölaskenta konsolissa.
- Tulosta jokainen luku laskevassa järjestyksessä nollaan asti
- Lopuksi tulosta: "Aika loppui!".
*/
let luku=prompt("Kuinka monta?");
for (i=luku;i>=0;i--){
    console.log(i);
    //sleep(1);
}