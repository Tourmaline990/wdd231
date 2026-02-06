// NAV
const ham = document.querySelector('#navigation');
const navs = document.querySelector('#navs');


ham.addEventListener('click',()=>{
    const aria = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded',!aria)
    ham.classList.toggle('open');
    navs.classList.toggle('open');
   
})
//Footer
const year = document.querySelector('#year');
const update = document.querySelector('#update');
update.textContent = document.lastModified;
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;


// Cards
const cards = document.querySelector("#interest-card");

import { interest } from "../data/interest.mjs";
function DisplayInterest(data) {
    data.forEach(x => {
       const container = document.createElement("div");
       container.classList.add("tag")
       const name = document.createElement("h2");
       const image = document.createElement("img");
       const figure = document.createElement("figure");
       const address = document.createElement("address");
       const desc = document.createElement("p");
       const btn = document.createElement("button");
       btn.textContent = "Learn More";
       name.textContent = x.name;
       image.src = x.images;
       image.loading = "lazy";
       image.alt = x.name;
       image.setAttribute("width","300")
       image.setAttribute("height","200");
       desc.textContent = x.description;
       address.textContent = x.address;
       figure.appendChild(image);
       container.appendChild(name);
       container.appendChild(figure);
       container.appendChild(desc);
       container.appendChild(address);
       container.appendChild(btn);
       cards.append(container);
    });
}
DisplayInterest(interest)
const visitStatus = document.querySelector("#visitStatus")
const stored = document.querySelector(".localStorage");
// Ms > s > min > hr > ad infinitum if necessary.
let now = Date.now();
const Ms_Per_day = 1000 * 60 * 60 * 24;
let firstVisit = Number(window.localStorage.getItem("firstVisit"))||0;
firstVisit ++;
const count = window.localStorage.setItem("firstVisit",firstVisit) ;
let get = Number(window.localStorage.getItem("countVisit"));
const set = window.localStorage.setItem("countVisit",now) ;

let diff = now - get;
let sum = Math.round(diff/Ms_Per_day);
console.log(sum);
stored.addEventListener("click",()=>{
    
   if(firstVisit === 1){
    visitStatus.innerHTML = `<p>Welcome! Let us know if you have any questions.</p>`;
   }
   else{
       if(sum !== 1){
       visitStatus.innerHTML = `<p>Back so soon! Awesome!.</p>`;
       }else{
        visitStatus.textContent = `You last visited ${sum} days ago.`;
     }
   }
   visitStatus.classList.toggle("close");
    stored.classList.toggle("close");
  
})

