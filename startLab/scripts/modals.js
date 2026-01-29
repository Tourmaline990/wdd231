const openbutton = document.querySelector("#openbutton");
const openbutton1 = document.querySelector("#openbutton1");
const openbutton2 = document.querySelector("#openbutton2");
const dialogbox = document.querySelector("#dialogbox");
const closebutton = document.querySelector("#closebutton");
const dialogboxText = document.querySelector("#dialogbox div");

openbutton.addEventListener("click",() => {
    dialogbox.showModal();
    dialogboxText.innerHTML = 'An apple has 95 calories';
})
openbutton1.addEventListener("click",() => {
    dialogbox.showModal();
    dialogboxText.innerHTML = 'An orange has 45 calories';
})
openbutton2.addEventListener("click",() => {
    dialogbox.showModal();
    dialogboxText.innerHTML = 'A banana has 105 calories';
})

closebutton.addEventListener("click",() => {
 dialogbox.close()
})