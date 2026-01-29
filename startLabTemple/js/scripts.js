import {temples } from "../data/temples.js";

import {url} from "../data/temples.js";
//console.log(url);

const showHere = document.querySelector("#showHere");
const modal = document.querySelector("#mydialog");
const modal_h2 = document.querySelector("#mydialog h2");
const modal_button = document.querySelector("#mydialog button");
const modal_p = document.querySelector("#mydialog p");

modal_button.addEventListener("click",()=>{
    modal.close();
})
function displaytemple(data){
      //console.log(data);
      data.forEach(x => {
       // console.log(x);
        const photo = document.createElement("img");
        photo.alt = x.name;
        photo.src = `${url}${x.path}`;
        photo.loading = "lazy";
        photo.addEventListener("click",()=> ShoWStuff(x));
           showHere.appendChild(photo) 
        });
}
displaytemple(temples);
function ShoWStuff(x) {
   modal_h2.innerHTML = x.name;
   modal.showModal();
   modal_p.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
}