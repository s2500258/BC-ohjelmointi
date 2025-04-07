/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/
let sum=0;
let suurin=0;
let pienin=0;
for (let i=0;i<10;i++) {
    let num=parseFloat(prompt(`Anna ${i+1}. luku:`));
    sum=sum+num;
    if (i==0){
        suurin=num;
        pienin=num;
    }
    else {
        if (num>suurin){
           suurin=num;
        }
        if (num<pienin){
            pienin=num;
        }
    }
}
console.log(sum,sum/10,suurin,pienin);