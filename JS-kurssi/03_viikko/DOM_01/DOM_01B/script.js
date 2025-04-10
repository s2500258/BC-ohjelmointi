/* Toteuta HTML sivu, jolla on nappi. Lisää tälle <button> elementille id. 
Napin vieressä on numero nolla. Lisää tälle tekstipaikalle myös id. 

Lisää napille getElementById:n avulla tapahtumakäsittelijä, joka kuuntelee 
"click" -tapahtumaa. Kun nappia painetaan, verkkosivun numeron arvo kasvaa yhdellä. 
*/
// let i=document.getElementById("count").textContent;

let i=parseInt(document.getElementById("count").textContent);

function plusYksi(){
    i++;
    document.getElementById("count").textContent=i; 
    if (i>=0) {
        document.getElementById("count").style.color="black";
    }
}

function minusYksi(){
    i--;
    document.getElementById("count").textContent=i; 
    if (i<0) {
        document.getElementById("count").style.color="red";
    }
}

document.getElementById("inc-button").addEventListener("click", function() {plusYksi()
});

/* Kopioi tähän koodi edellisestä tehtävästä. Kopioi myös tekemäsi HTML tiedosto tähän samaan kansioon. 

Lisää sivulle toinen nappi, jota klikkaamalla laskurin arvo vähenee yhdellä. 

Muista lisätä uudelle napille oma id ja sille oma tapahtumankuuntelija. Tee kaksi funktiota, jotka muuttavat saman muuttujan arvoa. 
*/
document.getElementById("dec-button").addEventListener("click", function() {minusYksi()
});
