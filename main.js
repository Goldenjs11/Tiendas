const menuEmail = document.querySelector(".navbar-email")
const menuHamIcom = document.querySelector(".menu")
const menuCarritoIcom = document.querySelector(".navbar-shoping-card")

const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktoptMenu)
menuHamIcom.addEventListener("click", toggleMobileMenu)
menuCarritoIcom.addEventListener("click", toggleCarritoAside)


function toggleDesktoptMenu () {
    /*.classList.toggle 
    La función classList.toggle es un método en JavaScript que se utiliza en el contexto del manejo de clases de elementos HTML. Esta función se utiliza para alternar la presencia de una clase en un elemento. Si la clase ya está presente, se quita; si no está presente, se agrega.  */
    const isAsideMenuClosed = aside.classList.contains("inactive")
    if (!isAsideMenuClosed) {
        aside.classList.add("inactive")
    }   
    desktopMenu.classList.toggle("inactive")
}
function toggleMobileMenu () {
    const isAsideMenuClosed = aside.classList.contains("inactive")
    if (!isAsideMenuClosed) {
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}
function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive")
    }
    aside.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: "Bike",
    price: 120,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})