const Hambtn = document.querySelector("#ham-btn");
const navigation = document.querySelector("#navigation");
Hambtn.addEventListener("click",()=>{
   Hambtn.classList.toggle("show")
    navigation.classList.toggle("show");
})

const year =  document.querySelector("#year");
const update = document.querySelector("#modify");
let today = new Date();
year.innerHTML = `${today.getFullYear()}`;
update.innerHTML = document.lastModified;




const layername2 = "VIIRS_SNPP_CorrectedReflectance_TrueColor"
const layername = "MODIS_Terra_CorrectedReflectance_TrueColor";
const month = String(today.getMonth() + 1).padStart(2,"0");
const day = String(today.getDate()).padStart(2,"0");
const date = `${today.getFullYear()}-${month}-${day}`;
const resolution = "250m";
const url = `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/${layername2}/default/${date}/${resolution}/0/0/0.jpg`;
const url2 = `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/${layername}/default/${date}/${resolution}/0/0/0.jpg`;
const tilematrix = 0;
const tilerow = 0;
const tilecol = 0;
const ApiKey = 'yjiWy0k5GzLTJEwXU1zQ6hBhWlpPyBjdQ5MWhOFh';

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
Getdata(`https://images-api.nasa.gov/search?q=${"earth"}`);

async function Getdata(url,DisplayFn){
   try {
    const response = await fetch(url);
     if(response.ok){
        const data  =  await response.json();
        console.log(data);
        DisplayFn(data);
     }
     else{
        throw new error(await response.text())
     }
   } 
   catch (error) {
     console.log(error);
   } 


}
