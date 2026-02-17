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

const month = String(today.getMonth() + 1).padStart(2,"0");
const day = String(today.getDate()).padStart(2,"0");
const date = `${today.getFullYear()}-${month}-${day}`;
const endday = day - 7;
const enddate = `${today.getFullYear()}-${month}-${endday}`



const layername2 = "VIIRS_SNPP_CorrectedReflectance_TrueColor";
const layername = "MODIS_Terra_CorrectedReflectance_TrueColor";
//const layername3 = "MODIS_Aqua_CorrectedReflectance_TrueColor"

const resolution = "250m";
const url = `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/${layername2}/default/${date}/${resolution}/0/0/0.jpg`;
const url2 = `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/${layername}/default/${date}/${resolution}/0/0/0.jpg`;



const hero = document.querySelector("#hero");
let img = document.createElement("img");
let image = document.createElement("img");
img.src = url;
img.loading = "lazy";
image.src = url2;
image.loading = "lazy";
img.alt = "Live image From Nasa";
image.alt = "Live image From Nasa";
hero.append(img)
hero.append(image)
img.classList.add("hide")
const api = "L6jLQsvH4IHiogOGNwHvK25hh2xq51LYp2Oaxjn0";
const link = `https://api.nasa.gov/planetary/apod?api_key=L6jLQsvH4IHiogOGNwHvK25hh2xq51LYp2Oaxjn0`; //APOD
//Getdata(`https://images-api.nasa.gov/search?q=${"earth"}`); //QUERY 
//Getdata(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${api}`) //EPIC
async function Getdata(url,DisplayFn,parent){
   try {
    const response = await fetch(url);
     if(response.ok){
        const data  =  await response.json();
        console.log(data);
       DisplayFn(data,parent) ;
     }
     else{
        throw new error(await response.text())
     }
   } 
   catch (error) {
     console.log(error);
   } 

}
// `https://eonet.gsfc.nasa.gov/api/v2.1/events?category=wildfires&limit=5&days=20&status=open
//https://eonet.gsfc.nasa.gov/api/v2.1/categories
//Getdata(`https://eonet.gsfc.nasa.gov/api/v2.1/categories`);
 

const updates = document.querySelector("#updates");
const category = ["Volcanoes","Wildfire","natural","ne"];
category.forEach(x => {
   const container = document.createElement("section");
   updates.append(container);
   if(x === 'Volcanoes'){
       container.innerHTML =`<h3> ${x} </h3>`;
       const box = document.createElement("div");
  //     box.classList.toggle("hide");
       container.addEventListener("click",()=>{
         container.classList.toggle("show");
         Getdata(`https://eonet.gsfc.nasa.gov/api/v2.1/categories/12`,ForVolcanoe,box);
         container.append(box);
       })
      }
   else if(x === "Wildfire"){
      container.innerHTML = `<h3> ${x} being tracked </h3>`;
      const box = document.createElement("div");
   //   box.classList.toggle("hide");
      container.addEventListener("click",()=>{
         container.classList.toggle("show");
         Getdata(`https://eonet.gsfc.nasa.gov/api/v2.1/events?category=wildfires&limit=25&days=20&status=open`,ForWildFire,box);
         container.append(box);
       })
    }
    else if(x==="natural"){
       container.innerHTML = `<h3>Astronomy Picture Of the day</h3>`;
       const box = document.createElement("div");
     //  box.classList.toggle("hide");
       container.addEventListener("click",()=>{
         container.classList.toggle("show");
         Getdata(`https://api.nasa.gov/planetary/apod?api_key=L6jLQsvH4IHiogOGNwHvK25hh2xq51LYp2Oaxjn0`,DisplayAstro,box);
         container.append(box);
       })
    }
    else if(x=== "ne"){
        container.innerHTML = `<h3>Near Earth Objects Detected</h3>`;
        const box = document.createElement("div");
       // box.classList.toggle("hide");
        container.addEventListener("click",()=>{
         container.classList.toggle("show");
         Getdata(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${enddate}&end_date=${date}&api_key=${api}`,nearEarth,box);
         container.append(box);
       })
    }
   
});
function DisplayAstro(data,parent) {
    parent.classList.toggle("show");
    parent.innerHTML = '';
   const div = document.createElement("div");
   div.classList.add("apod");
   const Pg = document.createElement("p");
   const img = document.createElement("img");
   img.src = data.url;
   img.alt = `Astronomy picture of the day`;
   img.loading = 'lazy';
   Pg.innerHTML = data.explanation;
   div.append(Pg,img);
   parent.append(div);
}

function ForWildFire(data,parent) {
   parent.innerHTML = ' ';
   parent.classList.toggle("show");
   const ul = document.createElement("ul");
   //ul.textContent = '';
   let sum = 4;
   while (sum !== 9) {
   // data.events.forEach(x => {
         const li = document.createElement("li")
         li.innerHTML = data.events[sum].title;
         ul.append(li);
         sum += 1;
    //  });
   }
   parent.append(ul);
}
function ForVolcanoe(data,parent) {
   parent.innerHTML = ' ';
    parent.classList.toggle("show");
   const ul = document.createElement("ul");
   //ul.textContent = '';
   let sum = 0;
   while (sum !== 5) {
   // data.events.forEach(x => {
         const li = document.createElement("li")
         li.innerHTML = data.events[sum].title;
         ul.append(li);
         sum += 1;
    //  });
   }
   parent.append(ul);
}

async function Getdat(url){
   try {
    const response = await fetch(url);
     if(response.ok){
        const data  =  await response.json();
        console.log(data);
      // DisplayFn(data,parent) ;
     }
     else{
        throw new error(await response.text())
     }
   } 
   catch (error) {
     console.log(error);
   } 

}

function nearEarth(data,parent){
   parent.innerHTML = ' ';
    
 const dailyasteroids =  data.near_earth_objects[date].length;
 const div = document.createElement("div");
 div.classList.add("ne");
 parent.classList.toggle("show");
 div.innerHTML = `<p> ${dailyasteroids} asteroids detected near earth today.`
 let count = 0;
  data.near_earth_objects[date].forEach(x=>{
   if(x.is_potentially_hazardous_asteroid === false){
        count ++;
   }
   else{
      count ++;
   }
  })
  if (count === 0 && dailyasteroids != 0) {
     div.innerHTML +=  `<p> ${count} asteroids are potentially hazardous to Earth </p>`;
   }
   else{
           div.innerHTML += `<p>No potentially hazardous asteroids near earth today </p>`;
        }
  parent.append(div)
  return div;

}
//  https://eonet.gsfc.nasa.gov/api/v2.1/categories/17
//"https://eonet.gsfc.nasa.gov/api/v2.1/categories/12"
//https://eonet.gsfc.nasa.gov/api/v2.1/categories/15"
// Getdat(`https://eonet.gsfc.nasa.gov/api/v2.1/categories`);
Getdat(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${enddate}&end_date=${date}&api_key=${api}`);

import { curious } from "../data/curiousity.mjs";
const curiousBtn = document.querySelector("#curious button");
curiousBtn.addEventListener("click",()=>{
   const fact = Random(curious);
   displayModal(fact);
})
const closeBtn = document.querySelector("#closebtn");
   closeBtn.addEventListener("click",()=>{
      modal.close();
   })

function Random(data){
  const Random = data[Math.floor(Math.random() * data.length)];
  return Random;
}
const modal = document.querySelector("#modal");
function displayModal(Random){
   document.querySelector("#content").innerHTML = `
   <div>
   <h3>${Random.category}</h3>
   <p> ${Random.fact} </p>
    </div>
   `;
  modal.showModal();
}