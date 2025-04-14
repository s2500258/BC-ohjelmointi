/*
Käytä HTML-tiedostoa, jossa on <input>-kenttä, <button> ja <ul>-lista, jonka ID on fruitList.
Kirjoita JavaScript-koodi, joka:
- Hakee arvon input-kentästä, kun painiketta klikataan.
- Luo uuden <li>-elementin ja asettaa sen tekstisisällöksi input-kentän arvon.
- Lisää <li>-elementin listaan.
- Tyhjentää input-kentän hedelmän lisäämisen jälkeen.
*/
let mylist=document.getElementById("fruitList");

function addNewFruit(){
    let str=document.getElementById("fruitInput").value;
    let newItem=document.createElement("li");
   /* let newItemText=document.createTextNode(str);
    newItem.appendChild(newItemText); */
    newItem.textContent = str;
    mylist.appendChild(newItem); 
    document.getElementById("fruitInput").value="";
}

document.getElementById("addFruitBtn").addEventListener("click",function(){addNewFruit()});



