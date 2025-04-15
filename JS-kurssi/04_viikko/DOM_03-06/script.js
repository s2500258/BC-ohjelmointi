/*
Luo HTML-tiedosto, jossa on <input>-kenttä ja <div>, jonka ID on displayText.
Kirjoita JavaScript-koodi, joka:
- Päivittää jatkuvasti <div>-elementin sisällön input-kentän arvolla sitä mukaa, kun käyttäjä kirjoittaa.
- Käyttää input-tapahtumaa, jotta päivitys tapahtuu reaaliajassa.
*/
document.getElementById("input03").addEventListener("input",function(){
    let str=document.getElementById("input03").value;
    document.getElementById("output03").textContent=str;
});

/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */
document.getElementById("button04").addEventListener("click",function(){
    if (document.getElementById("teksti04").style.display!='none') {
        document.getElementById("teksti04").style.display='none'; }
        else {
            document.getElementById("teksti04").style.display='block';    
        }
});

/*
Luo HTML-tiedosto, joka sisältää:
- <button> taustavärin vaihtamiseen.
- <input>-kenttä, johon käyttäjä voi syöttää värin.
- <p>-elementti, jonka tekstin väri muuttuu syötetyn värin mukaan.

Kirjoita JavaScript-koodi, joka:
- Vaihtaa taustavärin satunnaiseksi, kun painiketta klikataan.
- Päivittää kappaleen tekstivärin vastaamaan käyttäjän syöttämää arvoa.
*/
document.getElementById("button05").addEventListener("click",function(){
    document.getElementById("div5").style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("teksti05").style.color=document.getElementById("input05").value;
});

/* 
Luo lomake, jossa on pakolliset nimi- ja sähköpostikentät.
Kirjoita JavaScript-koodi, joka:
- Estää lomakkeen lähetyksen, jos jompikumpi kenttä on tyhjä.
- Näyttää virheilmoituksen, jos kenttiä on tyhjänä.
*/
function basicCheck(event){
    event.preventDefault();
    if (document.getElementById("nimiTeksti").value=="" || document.getElementById("emailTeksti").value==""){
        alert("Tietosi ovat epätäydellisiä!");
    }
    else {
alert("Kiitos!");
    }
}
document.getElementById("dom06").addEventListener("submit",basicCheck);