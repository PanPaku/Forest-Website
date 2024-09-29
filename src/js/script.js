const burgerMenu = document.querySelector('.burger-btn')
const burgerMenuBars = document.querySelector('.burger-bars')
const navigationMobile = document.querySelector('.nav-section-navigation-mobile')
const footerYear = document.querySelector('.footer-section-text-year')
const allHyperLink = document.querySelectorAll('.nav-section-navigation-mobile-hyperlink-a')

const toggleBurgerMenu = () => {
	navigationMobile.classList.toggle('mobile')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

burgerMenu.addEventListener('click', toggleBurgerMenu)

allHyperLink.forEach(element => {
	element.addEventListener('click', toggleBurgerMenu)
})
