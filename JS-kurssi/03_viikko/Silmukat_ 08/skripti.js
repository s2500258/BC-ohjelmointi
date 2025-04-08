/* 
Muokkaa harjoituksen 4 (tehty opettajan kanssa) ohjelmaa niin, että 
ohjelma laskee KAIKKIEN annettujen matkojen keskinopeuden. 

Luo funktio allTripsAverageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään 
etäisyyden (kilometreinä) ja ajan (tunteina). 
Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
Silloin ohjelma tulostaa kaikkien matkojen yhteenlasketun keskinopeuden. 
 */
let wholeDist=0;
let wholeTime=0;
console.log (" --------- Silmukat (bonus) --------- ");
while (true) {
let distance = parseFloat(prompt("Anna etäisyys"));
if (distance==0){
    break;
}
if (isNaN(distance) || distance<0) {
    continue;
}
let time = parseFloat(prompt("Anna aika"));
if (isNaN(time) || time<=0) {
    continue;
}
wholeDist=wholeDist+distance;
wholeTime=wholeTime+time;
console.log("Keskinopeus on",distance/time);
}
console.log("All trips average speed: ", wholeDist/wholeTime);