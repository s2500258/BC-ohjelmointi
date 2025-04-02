/* Luo funktio nimeltä add, joka:
Ottaa kaksi parametria, a ja b.
Palauttaa a:n ja b:n summan.
Kutsu funktiota arvoilla 10 ja 5.
Tulosta tulos käyttäen console.log().

Bonus: Kutsu funktiota useita kertoja eri argumenteilla ja tulosta kaikki tulokset.
*/
console.log (" --------- Funktiot 01 --------- ");
function add(a,b){
    return a+b;
}
let a1=10;
let b1=5;
let a2=2;
let b2=22;
let a3=9;
let b3=1000;
console.log(`${a1}+${b1}=${add(a1,b1)}`);
console.log(`${a2}+${b2}=${add(a2,b2)}`);
console.log(`${a3}+${b3}=${add(a3,b3)}`);
/* Luo funktio nimeltä isEven, joka:
Ottaa yhden parametrin, num.
Palauttaa true, jos num on parillinen, muuten palauttaa false.
Kutsu funktiota arvoilla 4 ja 7.
Tulosta tulokset käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
console.log (" --------- Funktiot 02 --------- ");
let osinko1=4;
let osinko2=7;
function isEven(num) {
return num%2===0;
}
const isEven2 = (num) => num%2===0; 
console.log(`Is ${osinko1} even? ${isEven(osinko1)}`);
console.log(`Is ${osinko2} even? ${isEven2(osinko2)}`);
/* Luo funktio nimeltä getLength, joka:
Ottaa yhden parametrin, str.
Palauttaa str:n pituuden käyttäen .length.
Kutsu funktiota merkkijonolla "JavaScript".
Tulosta tulos käyttäen console.log().
*/
console.log (" --------- Funktiot 03 --------- ");
function getLength(str){
    return str.length;
}
console.log(`String's length is ${getLength("JavaScript")}`);
/* Luo funktio nimeltä capitalize, joka:
Ottaa yhden parametrin, str.
Palauttaa merkkijonon siten, että ensimmäinen kirjain on iso ja loput pieniä.
Kutsu funktiota merkkijonolla "javascript".
Tulosta tulos käyttäen console.log().

Vinkki: Käytä str[0].toUpperCase() ja str.slice(1).toLowerCase().
*/
console.log (" --------- Funktiot 04 --------- ");
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1,str.length);
}
console.log(capitalize("javascript"));
/* Luo funktio nimeltä generateRandomNumber, joka:
Ottaa kaksi parametria, min ja max.
Palauttaa satunnaisen kokonaisluvun min:n ja max:n väliltä (mukaan lukien).
Kutsu funktiota arvoilla 1 ja 10.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.random(), Math.floor() ja yksinkertaista matikkaa.
*/
function generateRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log (" --------- Funktiot 05 --------- ");
console.log ("Satunnaisen numero 1:n ja 10:n välitä:", generateRandomNumber(1,10));
/* Luo funktio nimeltä replaceWord, joka:
Ottaa kolme parametria, sentence, oldWord ja newWord.
Palauttaa lauseen, jossa oldWord on korvattu newWordilla.
Kutsu funktiota lauseella "I like apples.", oldWord: "apples" ja newWord: "bananas".
Tulosta tulos käyttäen console.log().
*/
console.log (" --------- Funktiot 06 --------- ");
function replaceWord(sentence, oldWord, newWord){
    return sentence.replace(oldWord,newWord);
}
console.log(replaceWord("I like apples.","apples","bananas"));
/* Luo funktio nimeltä containsWord, joka:
Ottaa kaksi parametria, sentence ja word.
Palauttaa true, jos sentence sisältää sanan word, muuten false.
Kutsu funktiota lauseella "JavaScript is fun!" ja sanalla "fun".
Tulosta tulos käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
console.log (" --------- Funktiot 07 --------- ");
function containsWord(sentence,word){
      return sentence.includes(word);
}
console.log(`Is "fun" is contained in "Javascript is fun"? - ${containsWord("JavaScript is fun!","fun")}`)
/* Luo funktio nimeltä roundNumber, joka:
Ottaa kaksi parametria, num ja precision.
Palauttaa luvun pyöristettynä annetun tarkkuuden mukaan (desimaalien määrä).
Kutsu funktiota arvoilla 19.56789 ja 2.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä .toFixed().
*/
console.log (" --------- Funktiot 08 --------- ");
function roundNumber(num,precision){
    return num.toFixed(precision);
}
console.log(`Tätä funktiota arvoilla 19.56789 ja 2 on ${roundNumber(19.56789,2)}`)
/* Luo funktio nimeltä findMax, joka:
Ottaa kolme parametria, a, b ja c.
Palauttaa suurimman näistä kolmesta luvusta.
Kutsu funktiota arvoilla 12, 7 ja 20.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.max().
*/
console.log (" --------- Funktiot 09 --------- ");
function findMax(a,b,c){
    return Math.max(a,b,c);
}
console.log (`Tulos arvoilla 12, 7 ja 20 on ${findMax(12,7,20)}`)
/* Luo funktio nimeltä cleanAndTransform, joka:
Ottaa yhden parametrin, str.
Poistaa ylimääräiset välilyönnit, muuntaa merkkijonon pieniksi kirjaimiksi ja korvaa sanan "powerful" sanalla "amazing".
Palauttaa muunnetun merkkijonon.
Kutsu funktiota merkkijonolla " JavaScript is powerful! ".
Tulosta tulos käyttäen console.log().
*/
console.log (" --------- Funktiot 10 --------- ");
function cleanAndTransform(description){
    description=description.trim();
    description=description.toLowerCase();
    description=description.replace("powerful","amazing");
    return description;
}
console.log(cleanAndTransform(" JavaScript is powerful! "));