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

{/* <main>
        <h2 class="main-title">Home</h2>
        <ul class="product-list">
            <li class="product-item">
                <img class="product-item__image"
                    src="https://img.hollisterco.com/is/image/anf/KIC_359-1220-1911-805_prod1" alt="" />
                <h3 class="product-item__title">Title</h3>
                <p class="product-item__price">$40<span class="product-item__discount">$22</span></p>
            </li>
        </ul>
</main> */}

function renderMain() {
    //     const mainEl = document.createElement("main")
    //     for (const product of state.store) {

    //         const shopSection = document.createElement("section")
    //         shopSection.setAttribute("class", "products")

    //         const productLink = document.createElement("a")
    //         productLink.setAttribute("href", "#")

    //         const productImage = document.createElement("img")
    //         productImage.setAttribute("src", product.image)

    //         const h3El = document.createElement("h3")
    //         h3El.textContent = product.name

    //         const spanEl = document.createElement("span")
    //         spanEl.setAttribute("class", "price")
    //         spanEl.textContent = `£${product.price}`

    //         const discountPrice = document.createElement("span")
    //         discountPrice.setAttribute("class", "disconted-price")
    //}


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
    //     document.body.innerHTML = ""
    //     renderHeader()
    //     renderMain()
    //     renderFooter()
}
// render()
