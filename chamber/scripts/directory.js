// Footer  
const year = document.querySelector('#year');
const update = document.querySelector('#update');
update.textContent = document.lastModified;
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

// Main
const  cards = document.querySelector('#cards');
const url = "./data/members.json";
async function getCompany() {
    const response = await fetch(url);
    const data  = await  response.json()
    // console.table(data)
    DisplayProphets(data.companies)
}
getCompany();
function DisplayProphets(companies) {
     companies.forEach(company => {
        
        // Creating
        const section = document.createElement('section');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const level = document.createElement('p');
        const web = document.createElement('a');
        const h2 = document.createElement('h2');

        // population
        h2.textContent = company.companyName;
        address.textContent = company.companyAddress;
        phone.textContent = company.companyPhoneNumber;
        phone.classList.add('no');
        level.textContent = `Level = ${company.membershipLevel}`;
        web.href = company.companyWebsiteUrl;
        web.textContent = 'Website';
        image.src = company.imageUrl;
        image.alt = `${company.companyName} image`;
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250');
        image.setAttribute('height', '250');
        
        //  appending
        section.appendChild(image);
        section.appendChild(h2);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(web);
        section.appendChild(level);
        cards.append(section);


    

    });
}
//main button

const  menugrid = document.querySelector('#grid');
const  menulist = document.querySelector('#list');
menugrid.addEventListener('click',()=>{
    cards.classList.add('grid');
    cards.classList.remove('list');
})
menulist.addEventListener('click',()=>{
    cards.classList.add('list');
    cards.classList.remove('grid');
})

//nav
const ham = document.querySelector('#navigation');
const navs = document.querySelector('#navs');
ham.addEventListener('click',()=>{
    ham.classList.toggle('open');
    navs.classList.toggle('open');
})