const mobileButton = document.querySelector(".mobileMenu")

const mobileMenu = document.querySelector(".mobMenuHMH")
const mobileMenuOverlay = document.querySelector(".mobMenuHMH-overlay")

const subMenuToggle = document.querySelectorAll("li.has-submenu>a")
const subMenu = document.querySelectorAll(".submenu")
const submenuHeader = document.querySelectorAll(".has-submenu .submenu-header>a")

const megaMenuToggle = document.querySelector("li.has-megamenu>a")
const megaMenu = document.querySelector("li.has-megamenu .megamenu")

const dropDownToggle = document.querySelector(".dropdown-toggle")
const cdDropDown = document.querySelector(".cd-dropdown")
const cdDropDownChildren = document.querySelectorAll(".cd-dropdown .has-children a")

const accordionButton = document.querySelectorAll(".accordion-item .accordion-button")
const accordionCollapse = document.querySelectorAll(".accordion-item .accordion-collapse")

dropdownEvents()
navbarEvents()
accordionEvents()

function dropdownEvents() {
  dropDownToggle.addEventListener("click", () => {
    if (classValidation(dropDownToggle, "dropdown-is-active")) {
      dropDownToggle.classList.remove("dropdown-is-active")
      cdDropDown.classList.remove("dropdown-is-active")
    } else {
      dropDownToggle.classList.add("dropdown-is-active")
      cdDropDown.classList.add("dropdown-is-active")
    }
  })

  cdDropDownChildren.forEach((children) => {
    children.addEventListener("mouseenter", () => {
      children.classList.add("is-active")
      children.parentElement.children[1].classList.add("is-active")
    })
    children.addEventListener("mouseleave", () => {
      children.classList.remove("is-active")
      children.parentElement.children[1].classList.remove("is-active")
    })
  })
}

function navbarEvents() {
  mobileButton.addEventListener("click", () => {
    if (classValidation(mobileMenu, "opened")) {
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

  megaMenuToggle.addEventListener("click", () => {
    if (classValidation(megaMenu, "show")) {
      megaMenu.classList.remove("show")
      megaMenuToggle.classList.remove("show")
    } else {
      megaMenu.classList.add("show")
      megaMenuToggle.classList.add("show")
    }
  })
}
function accordionEvents() {
  accordionButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (classValidation(accordionCollapse[index], "show")) {
        accordionCollapse[index].classList.remove("show")
      } else {
        accordionCollapse[index].classList.add("show")
      }
    })
  })
}

function classValidation(element, className) {
  return element.classList.contains(className)
}


dropdownEvents()
navbarEvents()
accordionEvents()

function dropdownEvents() {
  dropDownToggle.addEventListener("click", () => {
    if (classValidation(dropDownToggle, "dropdown-is-active")) {
      dropDownToggle.classList.remove("dropdown-is-active")
      cdDropDown.classList.remove("dropdown-is-active")
    } else {
      dropDownToggle.classList.add("dropdown-is-active")
      cdDropDown.classList.add("dropdown-is-active")
    }
  })

  cdDropDownChildren.forEach((children) => {
    children.addEventListener("mouseenter", () => {
      children.classList.add("is-active")
      children.parentElement.children[1].classList.add("is-active")
    })
    children.addEventListener("mouseleave", () => {
      children.classList.remove("is-active")
      children.parentElement.children[1].classList.remove("is-active")
    })
  })
}

function navbarEvents() {
  mobileButton.addEventListener("click", () => {
    if (classValidation(mobileMenu, "opened")) {
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

  megaMenuToggle.addEventListener("click", () => {
    if (classValidation(megaMenu, "show")) {
      megaMenu.classList.remove("show")
      megaMenuToggle.classList.remove("show")
    } else {
      megaMenu.classList.add("show")
      megaMenuToggle.classList.add("show")
    }
  })
}
function accordionEvents() {
  accordionButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (classValidation(accordionCollapse[index], "show")) {
        accordionCollapse[index].classList.remove("show")
      } else {
        accordionCollapse[index].classList.add("show")
      }
    })
  })
}

function classValidation(element, className) {
  return element.classList.contains(className)
}

dropdownEvents()
navbarEvents()
accordionEvents()

function dropdownEvents() {
  dropDownToggle.addEventListener("click", () => {
    if (classValidation(dropDownToggle, "dropdown-is-active")) {
      dropDownToggle.classList.remove("dropdown-is-active")
      cdDropDown.classList.remove("dropdown-is-active")
    } else {
      dropDownToggle.classList.add("dropdown-is-active")
      cdDropDown.classList.add("dropdown-is-active")
    }
  })

  cdDropDownChildren.forEach((children) => {
    children.addEventListener("mouseenter", () => {
      children.classList.add("is-active")
      children.parentElement.children[1].classList.add("is-active")
    })
    children.addEventListener("mouseleave", () => {
      children.classList.remove("is-active")
      children.parentElement.children[1].classList.remove("is-active")
    })
  })
}

function navbarEvents() {
  mobileButton.addEventListener("click", () => {
    if (classValidation(mobileMenu, "opened")) {
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

  megaMenuToggle.addEventListener("click", () => {
    if (classValidation(megaMenu, "show")) {
      megaMenu.classList.remove("show")
      megaMenuToggle.classList.remove("show")
    } else {
      megaMenu.classList.add("show")
      megaMenuToggle.classList.add("show")
    }
  })
}
function accordionEvents() {
  accordionButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (classValidation(accordionCollapse[index], "show")) {
        accordionCollapse[index].classList.remove("show")
      } else {
        accordionCollapse[index].classList.add("show")
      }
    })
  })
}

function classValidation(element, className) {
  return element.classList.contains(className)
}
