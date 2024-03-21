// const burgir = document.querySelector(".burger__menu");
// const headerA = document.querySelector(".header__action");
// const bodih = document.querySelector("body");
// burgir.addEventListener("click", ()=>{
//     burgir.classList.toggle("open");
//     headerA.classList.toggle("open");
//     bodih.classList.toggle("open");
// });


// const khards = document.querySelectorAll(".khards");
// khards.forEach((khard) => {
//     khard.addEventListener("click", ()=>{
//         khard.classList.toggle("down");
//     });
// });

const faqMenu = document.querySelectorAll(".faq__menu li");
const theContent = document.querySelectorAll(".theContent");
faqMenu.forEach((menuList)=>{
    menuList.addEventListener("click", ()=>{
        // removeActiveMenu();
        faqMenu.forEach((menu)=>{
            menu.classList.remove("active")
        })
        menuList.classList.add("active");
        const activeContent = document.querySelector(`#${menuList.id}-content`);
        // removeContentActive();
        theContent.forEach((content)=>{
            content.classList.remove("active")
        })
        activeContent.classList.add("active")
    })
});
function removeActiveMenu() {
    faqMenu.forEach((menu)=>{
        menu.classList.remove("active")
    })
}
function removeContentActive() {
    theContent.forEach((content)=>{
        content.classList.remove("active")
    })
}






    // COPIED JS TO BE STUDIED
// const toggle_menu = document.querySelector(".toggle_menu");
// const nav = document.querySelector("nav");
// toggle_menu.addEventListener("click", ()=>{
//         nav.classList.toggle('active'); //nav element
//         toggle_menu.classList.toggle('active')  //burger
//     }
// );

// const contentMenu = document.querySelectorAll(".contentMenu li");
// const theContent = document.querySelectorAll(".theContent");
// contentMenu.forEach((menuList)=>{
//     menuList.addEventListener("click", ()=>{
//         removeActiveMenu();
//         menuList.classList.add("active");
//         const activeContent = document.querySelector(`#${menuList.id}-content`);
//         removeContentActive();
//         activeContent.classList.add("active")
//     })
// });
// function removeActiveMenu() {
//     contentMenu.forEach((menu)=>{
//         menu.classList.remove("active")
//     })
// }
// function removeContentActive() {
//     theContent.forEach((content)=>{
//         content.classList.remove("active")
//     })
// }


    //PREVIOUS JS UNUSED FOR THIS PROJECT
// const links = document.querySelectorAll(".links__item h4");
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.querySelector("i").classList.toggle("open");
//     link.nextElementSibling.classList.toggle("open");
//   });
// });

// const starNav = document.querySelectorAll(".coffee__nav__link");
// const starContent = document.querySelectorAll(".coffee__item");
// starNav.forEach((star) => {
//   star.addEventListener("click", () => {
//     starNav.forEach((star) => {
//         star.classList.remove("active");
//       });
//     star.classList.add("active");
//     const activeContent = document.querySelector(`#${star.id}-content`);
//     starContent.forEach((content) => {
//         content.classList.remove("active");
//       });
//     activeContent.classList.add("active");
//   });
// });

// window.onscroll = function() {
//     var navd = document.getElementById('navd');
//     var navm = document.getElementById('header');
//     if ( window.scrollY > 0 ) {
//         navd.classList.add("scroll");
//         navm.classList.add("scroll");
//     }
//     else {
//         navd.classList.remove("scroll");
//         navm.classList.remove("scroll");
//     }
// }