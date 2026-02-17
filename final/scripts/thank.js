const Hambtn = document.querySelector("#ham-btn");
const navigation = document.querySelector("#navigation");
Hambtn.addEventListener("click",()=>{
 const Istrue =  Hambtn.getAttribute("aria-expanded") === "true";
   Hambtn.setAttribute("aria-expanded", !Istrue)
   Hambtn.classList.toggle("show")
    navigation.classList.toggle("show");
})


const year =  document.querySelector("#year");
const update = document.querySelector("#modify");
let today = new Date();
year.innerHTML = `${today.getFullYear()}`;
update.innerHTML = document.lastModified;

const data = window.location.search;
// console.log(data);
const string = new URLSearchParams(data);
// console.log(string);
const Username = document.querySelector("#name");
Username.innerHTML = `${string.get("fname")}`

document.querySelector(".btn").addEventListener("click",()=>{
    window.location.href = 'index.html';
})