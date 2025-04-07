// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
let parilNum=0;
for (i=0;i<20;i++){
let num=prompt(`Anna ${i+1}. luku:`);
if (num%2==0) {
    parilNum++;
}
}
console.log(parilNum);