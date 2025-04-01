/* Määritä kolme merkkijonovakiota käyttäen yksinkertaisia lainausmerkkejä, kaksoislainausmerkkejä ja backtick-merkkejä. Esimerkiksi:
'Yksinkertaisilla lainausmerkeillä merkitty merkkijono'
"Kaksoislainausmerkeillä merkitty merkkijono"
`Mallimerkkijono`
Tulosta kaikki kolme merkkijonoa käyttäen console.log().
*/
const mj1='Yksinkertaisilla lainausmerkeillä merkitty merkkijono';
const mj2="Kaksoislainausmerkeillä merkitty merkkijono";
const mj3=`Mallimerkkijono`;
console.log (" --------- Merkkijonot 01 --------- ");
console.log(mj1);
console.log(mj2);
console.log(mj3);
/* Määritä muuttuja language ja anna sille arvoksi "JavaScript".
Luo mallimerkkijono käyttäen backtick-merkkejä sanoaksesi: "I am learning JavaScript." 
upottamalla language-muuttuja merkkijonoon.
Tulosta muodostettu merkkijono käyttäen console.log().
*/
let language="JavaScript";
console.log (" --------- Merkkijonot 02 --------- ");
console.log("I am learning",language);
/* Luo muuttuja nimeltä multiLine ja anna sille monirivinen merkkijono käyttäen backtick-merkkejä. Esimerkiksi:
This is line one.
This is line two.
This is line three.
Tulosta multiLine-muuttuja käyttäen console.log().
*/
let multiLine= `This is line one.
This is line two.
This is line three.`;
console.log (" --------- Merkkijonot 03 --------- ");
console.log(multiLine);
/* Määritä muuttuja nimeltä text ja anna sille arvoksi "Hello, World!".
Käytä .length-ominaisuutta selvittääksesi merkkijonon pituuden ja tallenna se muuttujaan nimeltä textLength.
Tulosta viesti, kuten: "The length of the text is 13."
*/
let text="Hello, World!";
console.log (" --------- Merkkijonot 04 --------- ");
console.log("The length of the text is", text.length);
/* Määritä muuttuja nimeltä word ja anna sille arvoksi "JavaScript".
Käytä hakasulkunotaatiota päästäksesi käsiksi:
Merkkijonon ensimmäiseen merkkiin.
Merkkijonon viimeiseen merkkiin.
Tulosta näiden avulla viestit, kuten:
"The first character is J."
"The last character is t."
*/
let word="JavaScript";
console.log (" --------- Merkkijonot 05 --------- ");
console.log("The first character is", word[0]);
console.log("The last character is", word[word.length-1]);
/* Määritä kaksi muuttujaa: num1 ja num2 arvoilla 7 ja 5.
Luo merkkijono käyttäen backtick-merkkejä sanoaksesi: "The sum of 7 and 5 is 12." upottamalla summauslauseke suoraan mallimerkkijonoon.
Tulosta muodostettu merkkijono.
*/
console.log (" --------- Merkkijonot 06 --------- ");
let num1=7;
let num2=5;
console.log("The sum of",num1,"and",num2,"is",num1+num2);
/* Luo muuttuja nimeltä greeting ja anna sille arvoksi "Hello, World!".
Muunna merkkijono:
Isoiksi kirjaimiksi käyttäen .toUpperCase().
Pieniksi kirjaimiksi käyttäen .toLowerCase().
Tulosta molemmat tulokset käyttäen console.log().
Esimerkkituloste:
"HELLO, WORLD!"
"hello, world!"
*/
console.log (" --------- Merkkijonot 07 --------- ");
let mj7="Hello, World!";
console.log(mj7.toUpperCase());
console.log(mj7.toLowerCase());
/* Luo muuttuja nimeltä sentence ja anna sille arvoksi "Learning JavaScript is fun!".
Käytä .substring()-menetelmää erottaaksesi sanan "JavaScript" lauseesta.
Tulosta erotettu sana käyttäen console.log().

Esimerkkituloste:
"Extracted word: JavaScript"
*/
console.log (" --------- Merkkijonot 08 --------- ");
let sentence="Learning JavaScript is fun!";
console.log("Extracted word:", sentence.substring(9,19));
/* Luo muuttuja nimeltä messyString ja anna sille arvoksi " Clean me up! ".
Käytä .trim()-menetelmää poistaaksesi ylimääräiset välilyönnit merkkijonon alusta ja lopusta.
Tulosta siistitty merkkijono käyttäen console.log().

Esimerkkituloste:
"Cleaned string: Clean me up!"
*/
console.log (" --------- Merkkijonot 09 --------- ");
let messyString=" Clean me up! ";
console.log("Cleaned string:",messyString.trim());
/* Luo muuttuja nimeltä phrase ja anna sille arvoksi "JavaScript is versatile and powerful."
Käytä .includes()-menetelmää tarkistaaksesi, sisältääkö merkkijono sanan "powerful".
Tulosta tulos käyttäen console.log().

Esimerkkituloste:
"Does the phrase include 'powerful'? true"
*/
console.log (" --------- Merkkijonot 10 --------- ");
let phrase="JavaScript is versatile and powerful.";
console.log("Does the phrase include 'powerful'?", phrase.includes("powerful"));
/* Luo muuttuja nimeltä longText ja anna sille arvoksi "The quick brown fox jumps over the lazy dog."
Käytä .slice()-menetelmää erottaaksesi "quick brown fox".
Tulosta erotettu osa käyttäen console.log().

Esimerkkituloste:
"Sliced text: quick brown fox"
*/
console.log (" --------- Merkkijonot 12 --------- ");
let longText="The quick brown fox jumps over the lazy dog.";
console.log("Sliced text:",longText.slice(4,19));
/* Luo muuttuja nimeltä description ja anna sille arvoksi " JavaScript is Fun and powerful! ".
Tee seuraavat toimenpiteet:
- Poista ylimääräiset välilyönnit käyttäen .trim().
- Muunna merkkijono pieniksi kirjaimiksi.
- Tarkista, sisältääkö se sanan "fun".
- Korvaa "powerful" sanalla "amazing".
- Tulosta lopullinen merkkijono ja tieto siitä, sisältääkö se sanan "fun" käyttäen console.log().

Esimerkkituloste:
"F  inal description: javascript is fun and amazing!"
"Does it include 'fun'? true"
*/
console.log (" --------- Merkkijonot 13 --------- ");
let descpription=" JavaScript is Fun and powerful! ";
descpription=descpription.trim();
descpription=descpription.toLowerCase();
descpription=descpription.replace("powerful","amazing");
console.log("Final description:", descpription);
console.log("Does it include 'fun'?",descpription.includes("fun"));