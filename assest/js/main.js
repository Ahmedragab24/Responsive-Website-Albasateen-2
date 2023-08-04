// ================= START BUTTON ===========================
"use strict";

const introductionEle = document.querySelector(".introduction")
const closeIntroduction = document.querySelector("#close-introduction")


closeIntroduction.addEventListener("click", () => {
  introductionEle.classList.add("active")
  setTimeout(() => introductionEle.remove(), 1000);
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {

    const header = document.getElementById('header')
    if(scrollY >= 50) header.classList.add('scroll-header') 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular--container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,


     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
        },
    });

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value--accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value--accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value--accordion-content')

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 

function scrollingUp() {
    const scroll = document.getElementById('scroll-up')

    if(this.scrollY >= 350) scroll.classList.add('show-scroll')
    else  scroll.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollingUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home--title , .popular--container, .subscribe--container`)
sr.reveal(`.home--description, .footer--info`, {delay: 500})
sr.reveal(`.home--search`, {delay: 600})
sr.reveal(`.home--value`, {delay: 700})
sr.reveal(`.home--images, .footer--container`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos--img` , {interval: 100})
sr.reveal(`.value--images, .contact--content` , {origin: 'left'})
sr.reveal(`.value--content, .contact--images ` , {origin: 'right'})