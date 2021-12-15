const state = {
    store: [],
    typeFilters: ['Girls', 'Guys', 'Sale'],
    selectedFilter: 'Home',
    selectedItem: null

}


function getItemsToDisplay() {
    let itemsToDisplay = state.store

    if (state.selectedFilter === 'Girls') {
        itemsToDisplay = itemsToDisplay.filter(item => item.type === 'Girls')
    }

    if (state.selectedFilter === 'Guys') {
        itemsToDisplay = itemsToDisplay.filter(item => item.type === 'Guys')
    }

    if (state.selectedFilter === 'Sale') {
        itemsToDisplay = itemsToDisplay.filter(item => item.discountedPrice !== undefined)
    }

    return itemsToDisplay

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
    h1El.textContent = "Hollixton"
    h1El.addEventListener('click', function () {
        state.selectedFilter = 'Home'
        render()
    })

    // Left navigation

    const leftNavEL = document.createElement("nav")
    leftNavEL.setAttribute("class", "header__left")

    const leftNavUl = document.createElement("ul")
    leftNavUl.setAttribute("class", "header__left_list")

    for (const filter of state.typeFilters) {
        const liEl = document.createElement('li')
        liEl.setAttribute('claas', 'header__left__item')

        const aEl = document.createElement('a')
        aEl.setAttribute('href', '#')
        aEl.textContent = filter
        aEl.addEventListener('click', function () {
            state.selectedFilter = filter
            render()
        })

        liEl.append(aEl)
        leftNavUl.append(liEl)
    }

    leftNavEL.append(leftNavUl)

    headerEl.append(h1El, leftNavEL)

}

function isItemNew(product) {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const msForTenDaysAgo = Date.now() - day * 10

    const msForProductDate = Date.parse(product.dateEntered)

    return msForProductDate > msForTenDaysAgo
}

function renderProductItem(product, productList) {
    const productItem = document.createElement('li')
    productItem.setAttribute('class', 'product-item')
    productItem.addEventListener('click', function () {
        state.selectedItem = product
        render()
    })


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

    if (state.selectedItem !== null) {

    } else {
        const titleEl = document.createElement("h2")
        titleEl.textContent = state.selectedFilter
        titleEl.setAttribute('class', 'main-title')

        const productList = document.createElement('ul')
        productList.setAttribute('class', 'product-list')

        mainEl.append(titleEl, productList)

        for (const product of state.store) {
            renderProductItem(product, productList)
        }
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
