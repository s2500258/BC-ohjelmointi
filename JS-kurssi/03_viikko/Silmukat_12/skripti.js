/* 
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/
let listi="";
let item="";
do {
item=prompt("Anna ostos:");
listi=listi+item+", ";
} while (item!="valmis");

listi=listi.replace(", valmis,","");
console.log(listi);