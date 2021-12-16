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


function renderHeader() {

    const headerEl = document.createElement("header")
    document.body.append(headerEl)

    const h1El = document.createElement("h1")
    h1El.textContent = "Hollixton"
    h1El.addEventListener('click', function () {
        state.selectedFilter = 'Home'
        state.selectedItem = null
        render()
    })

    // Left navigation

    const leftNavEL = document.createElement("nav")
    leftNavEL.setAttribute("class", "header__left")

    const leftNavUl = document.createElement("ul")
    leftNavUl.setAttribute("class", "header__left_list")

    for (const filter of state.typeFilters) {
        const liEl = document.createElement('li')
        liEl.setAttribute('class', 'header__left__item')

        const aEl = document.createElement('a')
        aEl.setAttribute('href', '#')
        aEl.textContent = filter
        aEl.addEventListener('click', function () {
            state.selectedFilter = filter
            state.selectedItem = null

            render()
        })

        liEl.append(aEl)
        leftNavUl.append(liEl)
    }

    leftNavEL.append(leftNavUl)

    headerEl.append(h1El, leftNavEL)

    // right navigation

    const rightNavEl = document.createElement('nav')
    rightNavEl.setAttribute('class', 'header__right')

    const rightNavUl = document.createElement('ul')
    rightNavUl.setAttribute('class', 'header__right__list')
    rightNavEl.append(rightNavUl)

    const searchLi = document.createElement('li')
    searchLi.setAttribute('class', 'header__right__item')

    const searchElBtn = document.createElement('button')
    searchElBtn.textContent = 'Search'
    searchLi.append(searchElBtn)

    const loginLi = document.createElement('li')
    loginLi.setAttribute('class', 'header__right__item')

    const loginElBtn = document.createElement('button')
    loginElBtn.textContent = 'Log in'
    loginElBtn.addEventListener('click', renderModal)
    loginLi.append(loginElBtn)

    const cartLi = document.createElement('li')
    cartLi.setAttribute('class', 'header__right__item')

    const cartElBtn = document.createElement('button')
    cartElBtn.textContent = 'Cart'
    cartLi.append(cartElBtn)

    rightNavUl.append(searchLi, loginLi, cartLi)

    headerEl.append(rightNavEl)










}

function renderModal() {
    // 
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

function renderItemDetails(mainEl) {
    const detailsEl = document.createElement('div')
    detailsEl.setAttribute('class', 'product-details')

    const imgEl = document.createElement('img')
    imgEl.setAttribute('class', 'product-details__img')
    imgEl.setAttribute('src', state.selectedItem.image)

    const h2El = document.createElement('h2')
    h2El.textContent = state.selectedItem.name
    h2El.setAttribute('class', 'product-details__title')

    const bagEl = document.createElement('button')
    bagEl.setAttribute('class', 'product-details__add-to-bag')
    bagEl.textContent = 'ADD TO BAG'
    bagEl.addEventListener('click', function () {
        state.selectedItem = null
        render()
    })

    detailsEl.append(imgEl, h2El, bagEl)
    mainEl.append(detailsEl)
}

function renderProductList(mainEl) {
    const titleEl = document.createElement("h2")
    titleEl.textContent = state.selectedFilter
    titleEl.setAttribute('class', 'main-title')

    const productList = document.createElement('ul')
    productList.setAttribute('class', 'product-list')

    mainEl.append(titleEl, productList)

    for (const product of getItemsToDisplay()) {
        renderProductItem(product, productList)
    }
}


function renderMain() {
    const mainEl = document.createElement("main")
    document.body.append(mainEl)

    if (state.selectedItem !== null) {
        renderItemDetails(mainEl)

    } else {
        renderProductList(mainEl)
    }

}


function renderFooter() {

    const footerEl = document.createElement('footer')
    document.body.append(footerEl)

    const h2El = document.createElement("h2")
    h2El.textContent = "Hollixton"

    const divEl = document.createElement('div')
    footerEl.append(h2El, divEl)

    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', '#')

    const spanEl = document.createElement('span')
    spanEl.textContent = 'United Kingdom'

    divEl.append(imgEl, spanEl)



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
