const ham = document.querySelector('#navigation');
const navs = document.querySelector('#navs');


ham.addEventListener('click',()=>{
    const aria = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded',!aria)
    ham.classList.toggle('open');
    navs.classList.toggle('open');
   
})

const container = document.querySelector("#info");
const year = document.querySelector('#year');
const update = document.querySelector('#update');
update.textContent = document.lastModified;
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

const newString = window.location.search;
console.log(newString);
const params = new URLSearchParams(newString);
console.log(params);

container.innerHTML = `
<p>Membership for ${params.get('first')} ${params.get('last')} </p>
<p>${params.get("organization-title")} at ${params.get('business-name')}</p>
<p>Email: ${params.get("email")}</p>
<p>Phone: ${params.get("phone")}</p>
<p>Membership: ${params.get('membership')} </p>
<p>${params.get('business-desc')}</p>
<p>${params.get('timestamp')}</p>
`
document.querySelector("#name").innerHTML = `${params.get('first')}`