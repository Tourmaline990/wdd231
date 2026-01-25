const currentTemp = document.querySelector("#current-temp");
const imgIcon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const ApiKey = "19a07622716d4cbcf6b181e8413493b3";
const lat = 49.75;
const lon = 6.64;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;

async function ApiFetch() {
    try {
       const response = await fetch(url);
         if(response.ok){
          const data = await response.json();
          console.log(data);
          DisplayWeather(data);
         } 
         else{
            throw new Error(await response.text());
         }
    } 
    catch (Error) {
        console.log(Error);
    }
}
function DisplayWeather(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    //https://openweathermap.org/img/wn/{icon}@2x.png
    imgIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    imgIcon.setAttribute('alt',`${data.weather[0].description}`);
    figcaption.innerHTML = `${data.weather[0].description}`;

}
ApiFetch();