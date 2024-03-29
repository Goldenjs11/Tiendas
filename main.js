const menuEmail = document.querySelector(".navbar-email")
const menuHamIcom = document.querySelector(".menu")
const menuCarritoIcom = document.querySelector(".navbar-shoping-card")
const productDetailCloseIcon = document.querySelector(".product-detail-close")

const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.getElementById("shoppingCartContainer")
const productDetailContainer = document.querySelector("#product-detail")
const cardsContiner = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktoptMenu)
menuHamIcom.addEventListener("click", toggleMobileMenu)
menuCarritoIcom.addEventListener("click", toggleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)


function toggleDesktoptMenu () {
    /*.classList.toggle 
    La función classList.toggle es un método en JavaScript que se utiliza en el contexto del manejo de clases de elementos HTML. Esta función se utiliza para alternar la presencia de una clase en un elemento. Si la clase ya está presente, se quita; si no está presente, se agrega.  */
    const isAsideMenuClosed = shoppingCartContainer.classList.contains("inactive")
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add("inactive")
    }else if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }


    desktopMenu.classList.toggle("inactive")
}
function toggleMobileMenu () {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains("inactive")
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add("inactive")
    }else if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}
function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive")
    }else if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }
    shoppingCartContainer.classList.toggle('inactive')
}

function oppenProductDetailAside () {
    shoppingCartContainer.classList.add("inactive")

    productDetailContainer.classList.remove("inactive")
}
function closeProductDetailAside(params) {
    productDetailContainer.classList.add("inactive")
}


const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Computador",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement("img")
        productImg.setAttribute('src', product.image)
        productImg.addEventListener("click", oppenProductDetailAside)

    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = "$"  + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg" )
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContiner.appendChild(productCard)
}
}
renderProducts(productList)
