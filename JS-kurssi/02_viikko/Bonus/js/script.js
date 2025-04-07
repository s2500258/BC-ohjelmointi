/* Tämä tehtävä on vapaaehtoinen.

Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. 
Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma antaa satunnaisen vastauksen 8-pallosta. 
Määrittele itse vastausvaihtoehdot. 
Tarvitset tähän tehtävään myös html-sivua ja sinne prompt() kysymyksen esittämiseen. */
function magicText(){
    let num1 = (Math.random()*1000)/125;
    console.log(num1);
    let num = Math.floor(num1);
    switch (num){
        case 0:
            return "Yes!";
        break;
        case 1:
            return "Maybe";
        break;
        case 2:
            return "Unlikely";
        break;
        case 3:
            return "Highly likely!";
        break;
        case 4:
            return "Nobody knows";
        break;
        case 5:
            return "it's just impossible, forget it";             
        break;
        case 6:
            return "Try harder!";
        break;
        default:
        return "No!!!";
    }
}
function magicBall(){
    document.getElementById("result").innerHTML = magicText();
    //  alert(magicText());
  //  console.log(num1);
}
