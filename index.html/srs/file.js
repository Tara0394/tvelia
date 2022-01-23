const listitems = document.querySelectorAll('.header__nav-list-link');

listitems.forEach((item)=>{
item.addEventListener('click',(event)=>{
    event.target.classList.add('active')
})
})