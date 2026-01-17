
const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function  getProphetData (){

    const response = await fetch(url);
    const data = await response.json();

  // console.table(data.prophets);
    displayProphets(data.prophets)
}
getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach(prophet => {
    const card =  document.createElement('section');
    const fullname = document.createElement('h2');
    const portrait = document.createElement('img');
    const dob = document.createElement("p");
    const birth_place = document.createElement("p");
    fullname.textContent = `Prophet ${prophet.name} ${prophet.lastname} `;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.loading = "lazy";
    portrait.alt = `An image of the prophet`
    portrait.setAttribute('width','340');
    portrait.setAttribute('height','440')
    dob.textContent = `Date of birth: ${prophet.birthdate}`;
    birth_place.textContent = `Place of birth: ${prophet.birthplace}`

    card.appendChild(fullname);
    card.appendChild(dob);
    card.appendChild(birth_place);
    card.appendChild(portrait);
    cards.append(card);

  });
}