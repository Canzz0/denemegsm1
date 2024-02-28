const mobileButton = document.querySelector(".mobileMenu")

const mobileMenu = document.querySelector(".mobMenuHMH")
const mobileMenuOverlay = document.querySelector(".mobMenuHMH-overlay")

const subMenuToggle = document.querySelectorAll("li.has-submenu>a")
const subMenu = document.querySelectorAll(".submenu")
const submenuHeader = document.querySelectorAll(".has-submenu .submenu-header>a")

const dropDownToggle = document.querySelector(".dropdown-toggle")
const cdDropDown = document.querySelector(".cd-dropdown")

console.log(submenuHeader)

dropDownToggle.addEventListener("mouseenter", () => {
  dropDownToggle.classList.add("dropdown-is-active")
  cdDropDown.classList.add("dropdown-is-active")
})
dropDownToggle.addEventListener("click", () => {
  dropDownToggle.classList.add("dropdown-is-active")
  cdDropDown.classList.add("dropdown-is-active")
})
dropDownToggle.addEventListener("mouseleave", () => {
  dropDownToggle.classList.remove("dropdown-is-active")
  cdDropDown.classList.remove("dropdown-is-active")
})

mobileButton.addEventListener("click", () => {
  if (mobileMenu.classList.length === 5) {
    mobileMenu.classList.remove("opened")
    mobileMenuOverlay.classList.remove("overlayVisible")
    mobileMenu.classList.remove("submenu-opened")
  } else {
    mobileMenu.classList.add("opened")
    mobileMenuOverlay.classList.add("overlayVisible")
  }
})

mobileMenuOverlay.addEventListener("click", () => {
  mobileMenu.classList.remove("opened")
  mobileMenuOverlay.classList.remove("overlayVisible")
  mobileMenu.classList.remove("submenu-opened")
})

subMenuToggle.forEach((menuButton) => {
  menuButton.addEventListener("click", () => {
    menuButton.parentElement.children[1].classList.add("opened")

    mobileMenu.classList.add("submenu-opened")
  })
})

submenuHeader.forEach((subHeader) => {
  subHeader.addEventListener("click", () => {
    console.log(subHeader.parentElement.parentElement)
    subHeader.parentElement.parentElement.classList.remove("opened")
    mobileMenu.classList.remove("submenu-opened")
  })
})
