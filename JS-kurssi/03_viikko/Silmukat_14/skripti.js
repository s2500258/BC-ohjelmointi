/* 
Kirjoita funktio nimeltä createWordPyramid:
- Ota syötteenä sana (esim. "koodi").
- Käytä silmukkaa rakentaaksesi pyramidityylisen kuvion:
    Esimerkki sanalle "koodi":
    k
    ko
    koo
    kood
    koodi
*/
let sana=prompt("Anna sana:");
for (i=0;i<=sana.length-1;i++) {
console.log(sana.slice(0,i+1));
}