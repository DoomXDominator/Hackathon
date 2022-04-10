burger = document.getElementsByClassName('burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav_list')
button=document.querySelector('.register')

burger.addEventListner('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    navList.classList.toggle('v-class-resp')
    register.classList.toggle('v-class-resp')
})