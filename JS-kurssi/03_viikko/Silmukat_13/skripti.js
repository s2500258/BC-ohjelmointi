/* 
Kirjoita funktio nimeltä validatePassword:
- Käytä silmukkaa salliaksesi käyttäjän syöttää salasana.
- Jos salasana on "oikein123", tulosta: "Salasana oikein!" ja poistu silmukasta.
- Jos salasana on väärä, pyydä käyttäjää uudelleen viestillä: "Yritä uudelleen!".
*/

while (true) {
let sala=prompt("Enter password:");
if (sala=="oikein123") {
    break;
}
    else {
    alert("Yritä uudelleen!");
}
}