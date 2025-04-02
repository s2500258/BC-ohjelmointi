/*  numerot 06 
Luo kaksi muuttujaa:
numString1 arvolla "42".
numString2 arvolla "3.14".
Käytä parseInt()-funktiota muuntaaksesi numString1 kokonaisluvuksi.
Käytä parseFloat()-funktiota muuntaaksesi numString2 liukuluvuksi.
Tulosta tulokset käyttäen console.log() viestien kera:
"Kokonaisluku on 42."
"Liukuluku on 3.14."
*/
let numString1="42";
let numString2="3.14";
console.log (" --------- Numerot 06 --------- ");
console.log ("Kokonaisluku on", parseInt(numString1));
console.log ("Liukuluku on", parseFloat(numString2));

/* Luo muuttuja nimeltä price ja anna sille arvoksi 19.56789.
Käytä .toFixed()-metodia:
Pyöristääksesi hinnan kahden desimaalin tarkkuuteen.
Pyöristääksesi hinnan ilman desimaaleja.
Tulosta molemmat tulokset käyttäen console.log() viestien kera:
"Hinta 2 desimaalilla: 19.57"
"Hinta ilman desimaaleja: 20"
*/
let price=19.56789;
console.log("");
console.log (" --------- Numerot 07 --------- ");
console.log ("Hinta 2 desimaalilla:", price.toFixed(2));
console.log ("Hinta ilman desimaaleja:", price.toFixed());
/* 

Luo kaksi muuttujaa:
num1 arvolla "10".
num2 arvolla "notANumber".
Muunna num1 ja num2 käyttäen parseFloat()-metodia.
Tulosta num1:n ja num2:n summa käyttäen console.log().

(Huom: Jos toinen arvoista on NaN, tulokseksi tulee NaN, joka tulostuu automaattisesti.)
Esimerkkituloste:
NaN (jos yhteenlaskussa on virheellinen syöte).
10 (jos molemmat syötteet ovat kelvollisia numeroita).

*/
console.log("");
console.log (" --------- Numerot 08 --------- ");
let num1="10";
let num2="notANumber";
console.log("Summa =",parseFloat(num1)+parseFloat(num2));
/* 
Luo muuttuja userInput ja anna sille arvo "25.75 omenaa".
Käytä parseFloat() metodia irrottamaan numeerinen arvo muuttujasta.
Käytä .toFixed() tuloksen pyöristämiseen 1 desimaalin tarkkuudella.
Tulosta luku console.log().


(Jos syöte eli input ei ala numerolla, tulos on NaN.)
Esimerkkivastaukset:
"25.8" (kun syöte alkaa numerolla).
"NaN" (kun syöte ei kelpaa).

 */
console.log("");
console.log (" --------- Numerot 09 --------- ");
userInput="25.75 omenaa";
console.log("Tulos =", parseFloat(userInput).toFixed(1));
/* 
1. Luo muuttuja num ja aseta sille arvoksi 5.67.
2. Käytä Math.round() metodia sen pyöristämiseen lähimpään kokonaislukuun. 
3. Käytä Math.floor() metodia sen pyöristämiseen alaspäin edelliseen lähimpään kokonaislukuun.
4. Käytä Math.ceil() metodia sen pyöristämiseen ylöspäin seuraavaan lähimpään kokonaislukuun.
5. Tulosta kaikki saamasi tulokset console.log() avulla ja lisää jokaiselle selittävät teksti.
*/
console.log("");
console.log (" --------- Numerot 10 --------- ");
let num=5.67;
console.log("lähimpään kokonaisluvu =", Math.round(num));
console.log("alaspäin edelliseen lähimpään kokonaisluvu =", Math.floor(num));
console.log("ylöspäin seuraavaan lähimpään kokonaisluvu =", Math.ceil(num));
/* 
1. Käytä Math.random() metodia satunnaisluvun generoimiseen lukujen 0 ja 1 väliltä.
2. Kerro saamasi tulos kymmenellä ja käytä Math.floor()  metodia sen pyöristämiseen lähimpään kokonaislukuun. 
3. Tulosta lopputulos console.log() avulla, jossa viesti on esimerkiksi: "Arvottu lukusi on 4"
*/
console.log("");
console.log (" --------- Numerot 11 --------- ");
console.log("Arvottu lukusi on", Math.floor(10*Math.random()));
/* 
1. Luo kolme muuttujaa: a = 12, b = 7 ja c = 20.
2. Käytä Math.max()-metodia löytääksesi suurimman luvun a:n, b:n ja c:n joukosta.
3. Käytä Math.min()-metodia löytääksesi pienimmän luvun niiden joukosta.
4. Tulosta tulokset käyttäen console.log():ää viestien kera, kuten:
"The largest number is 20."
"The smallest number is 7."
*/
console.log("");
console.log (" --------- Numerot 12 --------- ");
let a=12;
let b=7;
let c=20;
console.log("The largest number is", Math.max(a,b,c));
console.log("The smallest number is", Math.min(a,b,c));

// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.
console.log("");
console.log (" --------- Numerot 02 --------- ");
function FahCal(Fah){
    return (Fah-32)*5/9;
}
let x=100;
console.log("Celcius for",x, "is", FahCal(x));