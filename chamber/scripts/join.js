const ham = document.querySelector('#navigation');
const navs = document.querySelector('#navs');
const timestamp = document.querySelector("#timestamp");


// Footer  
const year = document.querySelector('#year');
const update = document.querySelector('#update');
update.textContent = document.lastModified;
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;
timestamp.value = `${today.toDateString()}`;

// NAV
ham.addEventListener('click',()=>{
    const aria = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded',!aria)
    ham.classList.toggle('open');
    navs.classList.toggle('open');
   
})
const closeButton = document.querySelectorAll(".closeButton");
const modal = document.querySelectorAll("dialog");

document.querySelectorAll(".openButton").forEach(btn=>{
    btn.addEventListener("click",(event)=>{
        // for each triggerred button open its corresponding dialog
        if (btn){
          const triggered =  event.target.nextElementSibling;
          triggered.showModal();
    
        }
     })    
})
closeButton.forEach(closed=>{
    closed.addEventListener("click",(event)=>{
        modal.forEach(x=>{
        
        x.close();
        })
      
    })
})