/* 
Kirjoita funktio nimeltä checkAdult:
Ota ikä parametrina.
Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
Muussa tapauksessa älä palauta mitään.
Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
*/
console.log (" --------- Ehtolauseet 01 --------- ");
function checkAdult(age){
    if (age>=18) {
        return "Olet aikuinen"
    }
}
console.log(`checkAdult for 22 is ${checkAdult(22)}`);
console.log(`checkAdult for 17 is ${checkAdult(17)}`);
console.log(`checkAdult for 34 is ${checkAdult(34)}`);
/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/
console.log (" --------- Ehtolauseet 02 --------- ");
function checkForFox(hasFox){
    let str='';
    if (hasFox==true){
        str="Sinulla on lemmikkikettu!";
    }
    else {
        str="Ei havaittu kettua!";
    }
    return str;
}
console.log(checkForFox(true));
console.log(checkForFox(false));
/* 
Kirjoita funktio nimeltä getGrade:
Ota pistemäärä parametrina.
Jos pistemäärä on 90 tai enemmän, palauta "Arvosana Kiitettävä".
Jos pistemäärä on välillä 80–89, palauta "Arvosana Hyvä".
Kaikilla muilla pistemäärillä palauta "Avosana Tyydyttävä".
Kutsu funktiota pisteillä kuten 85 ja 75 ja tulosta tulos.
*/
console.log (" --------- Ehtolauseet 03 --------- ");
function getGrade(num){
    if (num>=90) {
        str="Arvosana Kiitettävä";
    }
    else {
        if (num>=80) {
            str="Arvosana Hyvä"; 
        }
        else {
            str="Avosana Tyydyttävä";
        }
    }
    return str;
}
console.log(`Jos sinulla on 85 - ${getGrade(85)}`);
console.log(`Jos sinulla on 75 - ${getGrade(75)}`);
/* 
Kirjoita funktio nimeltä canVote:
Ota ikä parametrina.
Palauta true, jos ikä on 18 tai enemmän, muuten false.
Tulosta "Saat äänestää" tai "Et saa vielä äänestää" funktion palauttaman tuloksen perusteella.
*/
console.log (" --------- Ehtolauseet 04 --------- ");
function canVote(age){
    if (age>=18){
        bool=true;
    }
    else {
        bool=false;
    }
    return bool;
}

if (canVote(2)==true){
    console.log("Saat äänestää");
}
else {
    console.log("Et saa vielä äänestää");
}
/* 
Kirjoita funktio nimeltä checkAnimal:
Ota parametri animalType.

Käytä ternary operatoria palauttamaan:
- "Sinulla on fiksu seuralainen!" jos animalType on "fox".
- "Ei kettu, mutta silti kiva!" muussa tapauksessa.

Kutsu funktiota arvoilla kuten "fox" ja "cat".
*/
console.log (" --------- Ehtolauseet 05 --------- ");
function checkAnimal(animalType){
    if (animalType=="fox"){
        return "Sinulla on fiksu seuralainen!";
    }
    else {
        return "Ei kettu, mutta silti kiva!";
    }
}
console.log(`If you have a fox so - ${checkAnimal("fox")}`);
console.log(`If you have a cat so - ${checkAnimal("cat")}`);
/* 
Kirjoita funktio nimeltä isEven:
Ota parametrina luku.
Palauta true, jos luku on parillinen, tai false, jos se on pariton.
Kutsu funktiota luvuilla kuten 4 ja 7, ja tulosta "Numero on pariton!" tai "Numero on parillinen!" tuloksen perusteella.
*/
console.log (" --------- Ehtolauseet 06 --------- ");
function isEven(luku){
    if (luku%2==0)
    {
        return true;
    }
    else {
        return false;
    }
}
let num1=4;
let num2=7;
if (isEven(num1)==true){
    console.log(`Numero ${num1} on parillinen!`);
}
else {
    console.log(`Numero ${num1} on pariton!`);
}
if (isEven(num2)==true){
    console.log(`Numero ${num2} on parillinen!`);
}
else {
    console.log(`Numero ${num2} on pariton!`);
}
/* 
Kirjoita funktio nimeltä getAnimalDescription:
Ota parametri favoriteAnimal.

Käytä switch-rakennetta seuraavasti:
- Jos "fox", palauta "Ketut ovat viekkaita ja fiksuja!"
- Jos "dog", palauta "Koirat ovat uskollisia ystäviä."
- Jos "cat", palauta "Kissat ovat kiinnostuneita ja itsenäisiä."

Minkä tahansa muun eläimen kohdalla palauta "Kaikki eläimet ovat mahtavia!"
Kutsu funktiota eri eläinnimillä.
*/
console.log (" --------- Ehtolauseet 07 --------- ");
function getAnimalDescription(favoriteAnimal){
   switch (favoriteAnimal) {
    case "fox":
        return "Ketut ovat viekkaita ja fiksuja!";
    break;
    case "dog":
        return "Koirat ovat uskollisia ystäviä.";
    break;
    case "cat":
        return "Kissat ovat kiinnostuneita ja itsenäisiä.";
    break;
    default:
        return "Kaikki eläimet ovat mahtavia!";
   } 
}
console.log(`Mulla on hamsteri. ${getAnimalDescription("hamsteri")}`);
/* 
Kirjoita funktio nimeltä canEat:
Ota kaksi parametria: isHungry ja hasFood.
Jos molemmat ovat tosi, palauta "Aika syödä!".
Jos jompikumpi on epätosi, palauta "Sinun täytyy löytää ruokaa!"
Kutsu funktiota eri isHungry ja hasFood yhdistelmillä.
*/
console.log (" --------- Ehtolauseet 08 --------- ");
function canEat(isHungry,hasFood){
    if (isHungry==true && hasFood==true){
        return "Aika syödä!";
    } 
  //  if (isHungry==false || hasFood==false)
  else
        {
        return "Sinun täytyy löytää ruokaa!";
    }
}
console.log("Hungry and have food", canEat(true,true));
console.log("Not hungry and have food", canEat(false,true));
console.log("Hungry and don't have food", canEat(true,false));
console.log("Not hungry and don't have food", canEat(false,false));

/* 
Kirjoita funktio nimeltä canEnterEvent:
Ota kaksi parametria: age ja hasID.
Jos ikä on 18 tai enemmän JA hasID on tosi, palauta "Sisäänpääsy myönnetty."
Muussa tapauksessa palauta "Sisäänpääsy evätty."
Kutsu funktiota eri yhdistelmillä age ja hasID.
*/
console.log (" --------- Ehtolauseet 9 --------- ");
function canEnterEvent(age,hasID){
if (age>=18 && hasID==true){
    return "Sisäänpääsy myönnetty.";
}
else {
    return "Sisäänpääsy evätty.";
}
}
console.log("Ikä on 22 ja mulla on ID", canEnterEvent(22,true));
console.log("Ikä on 17 ja mulla on ID", canEnterEvent(17,true));
console.log("Ikä on 23 ja mulla ei ole ID", canEnterEvent(23,false));
console.log("Ikä on 16 ja mulla ei ole ID", canEnterEvent(16,false));
/* 
Kirjoita funktio nimeltä findFox:
Ota kaksi parametria: hasFox ja foxName.
Jos hasFox on tosi JA foxName on "Kikka", palauta "Kikka-kettu on täällä!"
Muussa tapauksessa palauta "No foxes found."
Kutsu funktiota eri ketunnimillä ja hasFox arvoilla.
*/
console.log (" --------- Ehtolauseet 10 --------- ");
function findFox(hasFox,foxName){
    if (hasFox==true && foxName=="Kikka"){
        return "Kikka-kettu on täällä!";
    }
    else{
        return "No foxes found.";
    }
}
console.log("Mulla ei ole kettua ", findFox(false,""));
console.log("Mulla on kettu Kikka", findFox(true,"Kikka"));
console.log("Mulla on kettu Julia", findFox(true,"Julia"));
/* 
Kirjoita funktio nimeltä getDayName:
Ota parametri day.
Käytä switch-rakennetta seuraavasti:
Palauta viikonpäivän nimi (1 = "Maanantai", 2 = "Tiistai", jne.).
Käytä default-haaraa palauttaaksesi "Epäkelpo päivä" virheellisille arvoille.
Kutsu funktiota sekä kelvollisilla että virheellisillä päivämääränumeroilla.
*/
console.log (" --------- Ehtolauseet 11 --------- ");
function getDayName(day){
    switch (day) {
        case 1:
        return "Maanantai";
        break;
        case 2:
        return "tiistai";
        break;
        case 3:
        return "Keskiviikko";
        break;
        case 4:
        return "Torstai";
        break;
        case 5:
        return "Perjantai";
        break;
        case 6:
        return "Lauantai";
        break;
        case 7:
        return "Suununtai";
        break;
        default:
            return "Epäkelpo päivä";
    }
}
console.log("Jos numero on 4 then today is",getDayName(4));
console.log("Jos numero on 8 then today is",getDayName(8));

/* 
Kirjoita funktio nimeltä checkFoxLover:
Ota kaksi parametria: age ja likesFoxes.
Jos ikä on 18 tai enemmän:
Tarkista, onko likesFoxes tosi.
Jos on, palauta "Olet aikuinen, joka tykkää ketuista!"
Muussa tapauksessa palauta "Et ole kettufani, mutta se on ok!"
Kutsu funktiota eri ikä- ja mieltymysyhdistelmillä. Varmista, että ohjelma toimii halutulla tavalla. 
*/
console.log (" --------- Ehtolauseet 12 --------- ");
function checkFoxLover(age,likesFoxes){
    if (age>=18 && likesFoxes==true) {
        return "Olet aikuinen, joka tykkää ketuista!";
    }
    else {
        return "Et ole kettufani, mutta se on ok!";
    }
}
console.log("Oon 23 ja en pitää kettuista. - ",checkFoxLover(23,false));
console.log("Oon 23 ja pidän ketuista. - ",checkFoxLover(23,true));
console.log("Oon 17 ja en pitää kettuista. - ",checkFoxLover(17,true));
/* 
Kirjoita funktio nimeltä planAdventure:
Ota kolme parametria: isWeekend, isSunny ja likesFoxes.
Käytä loogisia operaattoreita:
Jos on viikonloppu JA aurinkoista JA pitää ketuista, palauta "Täydellinen päivä kettuseikkailulle!"
Jos on viikonloppu TAI aurinkoista, palauta "Hyvä päivä, mutta ei täydellinen."
Muussa tapauksessa palauta "Ehkä joku toinen päivä."
Kutsu funktiota eri yhdistelmillä ehtoja.
*/
console.log (" --------- Ehtolauseet 13 --------- ");
