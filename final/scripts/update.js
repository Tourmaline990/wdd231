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

const textArea = document.querySelector("textarea");
textArea.addEventListener("input",()=>{
  window.localStorage.setItem("userdraft",`${textArea.value}`);
})
textArea.value = window.localStorage.getItem("userdraft") || "";

