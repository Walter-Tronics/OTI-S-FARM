const menuBtn = document.getElementById("main-menu")
let menuOpen = false;
let listItems = document.querySelectorAll('.liTag')
menuBtn.addEventListener('click', () => {
   if(!menuOpen) {
    menuBtn.classList.add('open');

    menuOpen = true;
   } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
   }
})
