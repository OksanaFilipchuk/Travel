// бургер
let burger = document.querySelector(".burger");

function burgerActive(){
    let nav = document.querySelector(".nav");
    let body = document.querySelector(".body");
    let navListItems = document.querySelectorAll(".nav__list__item");
    let barArr = [document.querySelector(".bar1"), document.querySelector(".bar2"), document.querySelector(".bar3")];
    barArr.forEach(elem => elem.classList.toggle("burgerBarsActive"));
    nav.classList.toggle("burgerMenuActive");
    body.classList.toggle("bodyBurger");
    burger.classList.toggle("burgerActive");

    navListItems.forEach( elem => elem.addEventListener("click", () =>{
        nav.classList.remove("burgerMenuActive");
        body.classList.remove("bodyBurger");
        burger.classList.remove("burgerActive");
        barArr.forEach(elem => elem.classList.remove("burgerBarsActive"));
    }))
}
burger.addEventListener("click", burgerActive);


// слайдер
const carouselLine = document.querySelector('.carousel-line');
const carouselButtons = document.querySelectorAll('.carousel-nav__item');
const carouselImg = document.querySelectorAll('.carousel-img');

carouselImg.forEach((elem,index) => elem.addEventListener('click',()=>{
    carouselButtons[index].classList.add("carousel-nav__item-active");
    carouselButtons.forEach((el,i) => {
        if(i != index){
            el.classList.remove('carousel-nav__item-active');
        }
    })    
    carouselLine.style.left = `${index*(-100)}%`;


}))

carouselButtons.forEach((elem, index) => elem.addEventListener("click", ()=>{
    elem.classList.add("carousel-nav__item-active");

    carouselButtons.forEach(el => {
        if(el != elem){
            el.classList.remove('carousel-nav__item-active');
        }
    })

    
    carouselLine.style.left = `${index*(-100)}%`;

    
    const leftCarouselButton = document.querySelector('.carousel-arrow-left');
    const rightCarouselButton = document.querySelector('.carousel-arrow-right');
    rightCarouselButton.classList.add("carousel-arrow-active");
    leftCarouselButton.classList.add("carousel-arrow-active");
    if(carouselButtons[carouselButtons.length-1].classList.contains('carousel-nav__item-active')){
        rightCarouselButton.classList.remove("carousel-arrow-active");
        leftCarouselButton.classList.add("carousel-arrow-active")
    }
    if(carouselButtons[0].classList.contains('carousel-nav__item-active')){
        leftCarouselButton.classList.remove("carousel-arrow-active");
        rightCarouselButton.classList.add("carousel-arrow-active");
    }    

}))

const leftCarouselButton = document.querySelector('.carousel-arrow-left');
const rightCarouselButton = document.querySelector('.carousel-arrow-right');
leftCarouselButton.addEventListener("click", ()=>{
    if (leftCarouselButton.classList.contains('carousel-arrow-active')){
    let widthEl = document.querySelector(".img-container").offsetWidth;
    let carouselLineLeft = window.getComputedStyle(carouselLine).getPropertyValue("left");
    let left = +carouselLineLeft.slice(0, carouselLineLeft.length-2) + +widthEl;
    carouselLine.style.left = left + "px";
    if(left === 0){
        leftCarouselButton.classList.remove("carousel-arrow-active")
    }
    let currentButton = document.querySelector(".carousel-nav__item-active");    
    currentButton.previousElementSibling.classList.add("carousel-nav__item-active");
    currentButton.classList.remove('carousel-nav__item-active');
    
    rightCarouselButton.classList.add("carousel-arrow-active")
    }

    
})
rightCarouselButton.addEventListener("click", ()=>{
    if (rightCarouselButton.classList.contains('carousel-arrow-active')){
        let widthEl = document.querySelector(".img-container").offsetWidth;        
        let carouselLineLeft = window.getComputedStyle(carouselLine).getPropertyValue("left");
        let left = +carouselLineLeft.slice(0, carouselLineLeft.length-2) - +widthEl;
        let carouselLineWidth = window.getComputedStyle(carouselLine).getPropertyValue("width");
        carouselLine.style.left = left + "px";        

        if(-left == +carouselLineWidth.slice(0, carouselLineWidth.length-2)-widthEl) {
            rightCarouselButton.classList.remove("carousel-arrow-active")
        }

        let currentButton = document.querySelector(".carousel-nav__item-active");    
        currentButton.nextElementSibling.classList.add("carousel-nav__item-active");
        currentButton.classList.remove('carousel-nav__item-active');

        leftCarouselButton.classList.add("carousel-arrow-active")



    }

    
})

    // console.log(window.getComputedStyle(carouselLine).getPropertyValue("width"));
//     console.log(window.getComputedStyle(carouselLine).getPropertyValue("left"))
// })






// let carouselLineLeft = window.getComputedStyle(carouselLine).getPropertyValue("left");
// let carouselLineLeft = carouselLine.offsetLeft;
// if(carouselLineLeft == 0){
//     leftCarouselButton.classList.remove('carousel-arrow-active')
// }

// leftCarouselButton.addEventListener("click", ()=>{
//     console.log(carouselLineLeft)
// })



//pop-up

function showLogInPopUp () {
    const popUps = document.querySelector('.pop-ups')
    popUps.style.display = "block"; 
}

function init(){
    const  buttonLogin = document.querySelector('.button-login');
    const account = document.querySelector('.account');
    const form = document.forms.form;    

    account.addEventListener('click', showLogInPopUp);
    buttonLogin.addEventListener('click', showLogInPopUp);
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(`Your e-mail: ${form.elements.email.value}\nYour password: ${form.elements.password.value}`);
        console.log(form.elements.email.value)
    })
    const registerLink = document.querySelector('.register');
    const logIn = document.querySelector('.log-in');
    registerLink.addEventListener("click", (event) => {
        event.preventDefault();
    const popUpLogin = document.querySelector(".pop-up-login");
    popUpLogin.classList.add("pop-up-passive")
    
    })
    logIn.addEventListener("click", (event)=>{
        event.preventDefault();
        const popUpLogin = document.querySelector(".pop-up-login");
        popUpLogin.classList.remove("pop-up-passive")
    })

    window.addEventListener("click", (event) => {
        if(event.target === document.querySelector('.pop-ups')){
            document.querySelector('.pop-ups').style.display = "none";
        }
    })


}

init()