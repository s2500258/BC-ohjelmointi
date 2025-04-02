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
