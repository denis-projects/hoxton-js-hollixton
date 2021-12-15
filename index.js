const state = {
    store: []
}

function fetchStore() {
    return fetch(`http://localhost:3000/store`).then(function (resp) {
        return resp.json()
    })
}

{/* 
<header>
<h1 class="logo">Hollixton</h1>
<nav class="header-left">
    <ul class="header__left__list">
        <li class="header__left__item"><a href="">Girls</a></li>
        <li class="header__left__item"><a href="">Guys</a></li>
        <li class="header__left__item"><a href="">Sale</a></li>
    </ul>
</nav>
<nav class="header__right">
    <ul class="header__right__list">
        <li class="header__right__item"><button>search</button></li>
        <li class="header__right__item"><button>login</button></li>
        <li class="header__right__item"><button>cart</button></li>
    </ul>
</nav>
</header> */}
function renderHeader() {

    const headerEl = document.createElement("header")
    document.body.append(headerEl)

    const h1El = document.createElement("h1")
    h1El.textContent = "HOLLIXTON"
    headerEl.append(h1El)

    //     const navEL = document.createElement("nav")
    //     navEL.setAttribute("class", "header-nav")

    //     const ulEl = document.createElement("ul")
    //     ulEl.setAttribute("class", "header-ul")

    //     const girlsSection = document.createElement("li")
    //     girlsSection.setAttribute("class", "girls")

    //     const girlsAnchor = document.createElement("a")
    //     girlsAnchor.setAttribute("href", "")

    //     const boysSection = document.createElement("li")
    //     boysSection.setAttribute("class", "guys")

    //     const boysAnchor = document.createElement("a")
    //     boysAnchor.setAttribute("href", "")


    //     const salesSection = document.createElement("li")
    //     salesSection.setAttribute("class", "sales")

    //     const salesAnchor = document.createElement("a")
    //     salesAnchor.setAttribute("href", "")


    //     const rightSectionBar = document.createElement("section")
    //     rightSectionBar.setAttribute("class", "section-bar")

    //     const rightUlEl = document.createElement("ul")
    //     rightUlEl.setAttribute("class", "right-ul-el")

    //     const search = document.createElement("li")
    //     search.setAttribute("class", "right-search-loop")


    //     const searchButton = document.createElement("button")
    //     searchButton.setAttribute("class", "search-button")

    //     const imageBtn = document.createElement("img")
    //     imageBtn.setAttribute("src", "")


    //     const loginLi = document.createElement("li")
    //     loginLi.setAttribute("class", "users")

    //     const loginBtn = document.createElement("button")
    //     loginBtn.setAttribute("class", "login-button")

    //     const imageLoginBtn = document.createElement("img")
    //     imageLoginBtn.setAttribute("src", "")

    //     const cartLi = document.createElement("li")
    //     cartLi.setAttribute("class", "right-cart-li")

    //     const cartBtn = document.createElement("button")
    //     cartBtn.setAttribute("class", "cart-button")

    //     const imageCartButton = document.createElement("img")
    //     imageCartButton.setAttribute("src", "./assets/shopping-bag.png")

}

function isItemNew(product) {
    const daysToConsider = 11
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const msForTenDaysAgo = Date.now() - (day * daysToConsider)

    const msForProductDate = Date.parse(product.dateEntered)

    return msForProductDate > msForTenDaysAgo
}

function renderProductItem(product, productList) {
    const productItem = document.createElement('li')
    productItem.setAttribute('class', 'product-item')

    productList.append(productItem)

    const imageEl = document.createElement('img')
    imageEl.setAttribute('class', 'product-item__image')
    imageEl.setAttribute('src', product.image)

    const productTitleEl = document.createElement('h3')
    productTitleEl.setAttribute('class', 'product-item__title')
    productTitleEl.textContent = product.name

    const priceEl = document.createElement('p')
    priceEl.setAttribute('class', 'product-item__price')

    const fullPriceSpan = document.createElement('span')
    fullPriceSpan.setAttribute('class', 'product-item__full-price')
    fullPriceSpan.textContent = `$${product.price}`
    priceEl.append(fullPriceSpan)

    if (product.discountedPrice) {
        fullPriceSpan.classList.add('discounted')
        const discountSpan = document.createElement('span')
        discountSpan.setAttribute('class', 'product-item__discount')
        discountSpan.textContent = `$${product.discountedPrice}`
        priceEl.append(discountSpan)
    }

    productItem.append(imageEl, productTitleEl, priceEl)


    if (isItemNew(product)) {
        const newEl = document.createElement('span')
        newEl.setAttribute('class', 'product-item__new')
        newEl.textContent = "NEW!"
        productItem.append(newEl)

    }



}

function renderMain() {
    const mainEl = document.createElement("main")
    document.body.append(mainEl)

    const titleEl = document.createElement("h2")
    titleEl.textContent = "Home"
    titleEl.setAttribute('class', 'main-title')

    const productList = document.createElement('ul')
    productList.setAttribute('class', 'product-list')

    mainEl.append(titleEl, productList)

    for (const product of state.store) {
        renderProductItem(product, productList)
    }

}



{/* <footer>
        <h2>Hollixton</h2>
        <div>
            <img src="" alt="">
            <span>United Kingdom</span>
        </div>
</footer> */}

function renderFooter() {
    //     const h2El = document.createElement("h2")
    //     h2El.textContent = "Footer"

    //     document.body.append(h2El)
}

function render() {
    document.body.innerHTML = ""
    renderHeader()
    renderMain()
    renderFooter()
}


function init() {
    render()
    fetchStore()
        .then(function (store) {
            state.store = store
            render()
        })
}

init()
