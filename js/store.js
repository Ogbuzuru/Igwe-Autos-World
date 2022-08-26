let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () =>{
    // if statement
    if(filteredProducts < 1){
        productsContainer.innerHTML = `<h6> Sorry no item matched your search </h6>`
        return;
    }

    productsContainer.innerHTML = filteredProducts.map(({id,title,image}) => {
    return`  <article class="product" data-id="${id}">
    <img src="${image}" class="product-img img" alt="">
    <!-- product footer -->
    <footer>
        <h5 class="product-name">${title}</h5>
    </footer>
    </article>`
    }).join('');
};

displayProducts();

// text filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup',() => {
    // keyup - fired when key released
    const inputValue = searchInput.value;
    filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue)
    });
    displayProducts();
});


// DisplayButtons

const companiesDOM = document.querySelector('.companies');

const displayButtons = () =>{
    const buttons = ["all", ...new Set( products.map((product) => (product.company)))];

    // console.log(buttons);
    companiesDOM.innerHTML = buttons.map((company) => {
        return `  <button class="company-btn" data-id="${company}"> ${company} </button>`;
    }).join(' ');
}

displayButtons();

companiesDOM.addEventListener('click', (e) =>{
    // console.log(e.target);
    const el = e.target;
    if(el.classList.contains("company-btn")){
        if(el.dataset.id === 'all'){
            filteredProducts = [...products];
        } else{
            filteredProducts = products.filter((product) => {
                return product.company === el.dataset.id
            });
        };
        searchInput.value = '';
        displayProducts();
    }
})




























































































