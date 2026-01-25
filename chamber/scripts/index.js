
// NAV
const ham = document.querySelector('#navigation');
const navs = document.querySelector('#navs');


ham.addEventListener('click',()=>{
    const aria = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded',!aria)
    ham.classList.toggle('open');
    navs.classList.toggle('open');
   
})
// Main
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const lat = 6.43;
const lon = 3.48;
const ApiKey = "19a07622716d4cbcf6b181e8413493b3";
const Currenturl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;
const CurrentWeather = document.querySelector('#current-weather');
const forecast = document.querySelector('#weather-forecast');
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;

// Handling External data's(api's, and json)
async function  GetApi(url,DisplayFn){
   try{
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
       // console.log(data);
        DisplayFn(data);
       
    }
    else{
        throw new Error(await response.text());
    } 
   }
   catch(Error){
     console.log(Error);
     
   }  
}

// Display Function For Current Weather
function DisplayCurrent(data) {
    let div = document.createElement("div");
  let dataImage =  document.createElement("img"); 
  let tempe = document.createElement("p");
  let high = document.createElement("p");
  let low = document.createElement("p");
  let humid = document.createElement("p");
  let sunrise = document.createElement("p");
  let sunset = document.createElement("p");
  let desc = document.createElement("p");
  
  

 // populating
 dataImage.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
 dataImage.setAttribute('alt',data.weather[0].description);
 dataImage.loading = "lazy";
 tempe.innerHTML = `${data.main.temp}&deg; F`;
 desc.innerHTML = `${data.weather[0].description}`;
 high.innerHTML = `High: ${data.main.temp_max}&deg; `;
 low.innerHTML = `Low: ${data.main.temp_min}&deg;`;
 humid.innerHTML = `Humidity: ${data.main.humidity}%`;
 let sun = TimeCalc(data.sys.sunrise,data.timezone);
 sunrise.innerHTML = `Sunrise: ${sun}`;
 let set = TimeCalc(data.sys.sunset,data.timezone);
 sunset.innerHTML = `Sunset: ${set}`;
 

 //Appending
CurrentWeather.appendChild(dataImage);
CurrentWeather.append(div)
div.appendChild(tempe);
div.appendChild(desc);
div.appendChild(high);
div.appendChild(low);
div.appendChild(humid);
div.appendChild(sunrise);
div.appendChild(sunset);
}

// Display Sunrise,and sunset by converting the unix timestamp.
function TimeCalc(event,timezone){
  const options = {
    hour: "2-digit",
    minute: "2-digit"
  };
   let eventutc = event * 1000;
   let eventdate = new Date(eventutc + timezone);
   return eventdate.toLocaleString("en-US",options);
   
}

// Display Day of week using the unix timestamp.
function GetDayName(unixdt){
   const p = document.createElement("p");
    let milliseconds = unixdt * 1000;
    let day = new Date(milliseconds);
    let dow =  day.toLocaleString("en-US",{
        weekday:"long"
        })
    p.innerHTML  = `${dow}: `;
    return p;
   
}

// Display Function For Forecasted Weather
function GetForecast(data) {
let val1 = GetDayName(data.list[0].dt,GetForecast);
val1.innerHTML += `${data.list[0].main.temp}&deg;F`;  
let val2 = GetDayName(data.list[8].dt);
val2.innerHTML += `${data.list[8].main.temp}&deg;F`; 
let val3 = GetDayName(data.list[16].dt)
val3.innerHTML += `${data.list[16].main.temp}&deg;F`; 
let val4 = GetDayName(data.list[24].dt)
val4.innerHTML += `${data.list[24].main.temp}&deg;F`; 
let val5 = GetDayName(data.list[32].dt)
val5.innerHTML += `${data.list[4].main.temp}&deg;F`; 
forecast.appendChild(val1);
forecast.appendChild(val2);
forecast.appendChild(val3);
forecast.appendChild(val4);
forecast.appendChild(val5);
}

const membersjson = "./data/members.json";
const spotlight = document.querySelector("#company-spotlights");

// Display Function For Company's spotlight Weather
function DisplaySpotlights(data){
   // const randomData = data.companies[Math.floor(Math.random()*data.companies.length)]
   // const re = randomData.companyName;
   // const se = randomData.companyAddress;

    let randomData = GetRandomIndex(data);
    let trying = PopulateDom(spotlight);
    trying.h1.innerHTML = randomData.companyName;
    trying.address.innerHTML = randomData.companyAddress;
    trying.memberShip.innerHTML = `Membership Level:${randomData.membershipLevel}`;
    trying.phone.innerHTML = `Phone: ${randomData.companyPhoneNumber}`;
    trying.image.src = randomData.imageUrl;
    trying.image.alt = `${randomData.companyName}company's logo`;
    trying.image.loading = "lazy";
    trying.image.width = '120';
    trying.url.href = randomData.companyWebsiteUrl;
    trying.url.innerHTML = `${randomData.companyName}.org`;
    

   let anotherRandom = GetRandomIndex(data);
   let trying1 = PopulateDom(spotlight); 
   trying1.h1.innerHTML = anotherRandom.companyName;
   trying1.address.innerHTML = anotherRandom.companyAddress;
   trying1.memberShip.innerHTML = `Membership Level: ${anotherRandom.membershipLevel}`;
   trying1.phone.innerHTML = `Phone: ${anotherRandom.companyPhoneNumber}`;
   trying1.image.src = anotherRandom.imageUrl;
   trying1.image.alt = `${randomData.companyName} logo`;
   trying1.image.loading = "lazy";
   trying1.image.width = '120';
   trying1.url.href = anotherRandom.companyWebsiteUrl;
   trying1.url.innerHTML = `${anotherRandom.companyName}.org`;

   let thirdRandom = GetRandomIndex(data);
   let trying2 = PopulateDom(spotlight);
   trying2.h1.innerHTML = thirdRandom.companyName;
   trying2.address.innerHTML = thirdRandom.companyAddress;
   trying2.memberShip.innerHTML = `Membership Level: ${thirdRandom.membershipLevel}`;
   trying2.phone.innerHTML = ` Phone: ${thirdRandom.companyPhoneNumber}`;
   trying2.image.src = thirdRandom.imageUrl;
   trying2.image.alt = `${randomData.companyName} logo`;
    trying2.image.loading = "lazy";
    trying2.image.width = '120';
   trying2.url.href = thirdRandom.companyWebsiteUrl;
   trying2.url.innerHTML = `${thirdRandom.companyName}.org`;

   

 
   
}

// Get random index within the data's range
function GetRandomIndex(data){
    
     const list = Formembers(data);
    const randomData = list[Math.floor(Math.random()* list.length)];
    return randomData
   
}

// Confirm company's eligibility before display
function Formembers(data) {
    const newArray = [];
   data.companies.forEach(company => {
     if (company.membershipLevel !== "Not For Profit") {
        newArray.push(company);
       
     }
   });
    return newArray;
}

// Populate Dom for company's spotlight
function PopulateDom(parent) {
    const sections = document.createElement('section');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const image = document.createElement('img');
    const url = document.createElement('a');
    const address = document.createElement('p');
    const memberShip = document.createElement('p');
    const forurl = document.createElement('p');
    forurl.innerHTML = 'Url: '
    const phone = document.createElement('p');
    phone.classList.add("phone");
    memberShip.classList.add("member");
    address.classList.add("address");
    sections.classList.add("text");
    sections.appendChild(h1);
    sections.appendChild(address);
    sections.appendChild(image);
    div.appendChild(phone);
    forurl.appendChild(url);
    div.append(forurl)
    div.appendChild(memberShip);
    sections.append(div);
    parent.appendChild(sections);
    const objRet = {sections,h1,image,address,div,phone,url,memberShip};
    return objRet;
}

//function calls
GetApi(forecastUrl,GetForecast);
GetApi(Currenturl,DisplayCurrent);
GetApi(membersjson,DisplaySpotlights)

// FOOTER
// footers Datetime.
const year = document.querySelector('#year');
const update = document.querySelector('#update');
update.textContent = document.lastModified;
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;