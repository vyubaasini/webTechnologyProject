// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})

const createNavbar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML += `
    
        <ul class="links-container">
        <a href="index.html"> <img style="float: left; margin: 0px 15px 15px 0px;" src="img/dcd-logo copy.png" width="150" height="40"></a>
        <li class="link-item"><a href="index.html" class="link active">home</a></li>
           <li class="link-item"><a class="link"><div class="dropdown">brands<i class="fa fa-caret-down"></i>
                <div class="dropdown-content">
                    <a href="dahua.html">Dahua Technology</a>
                    <a href="ezviz.html">Ezviz</a>
                    <a href="hikvision.html">Hikvision</a>
                </div></div></a> </li>
            <li class="link-item"><a href="about.html" class="link">about</a></li>
            <li class="link-item"><a href="#contact" class="link">contact</a></li>
            <li class="link-item"><a href="faq.html" class="link">faq</a></li>
            <li class="link-item"><a href="profile.html" class="link">us</a></li>
        </ul>
        <div class="user-interactions">
            <div class="search-box">
                <input type="text" class="search" placeholder="search item">
                <button class="search-btn"><img src="img/search.png" alt=""></button>
            </div>
            <div class="cart" onclick="location.href = 'cart.html'">
                <img src="img/cart-red.png" class="cart-icon" alt="">
                <span class="cart-item-count">00</span>
            </div>
            <div class="user">
                <img src="img/download.png" class="user-icon" alt="">
                <div class="user-icon-popup">
                    <p>login to your account</p>
                    <a href="login.html">login</a>
                </div>
            </div>
            <div class="user">
             <a href="login.html"><button style="background-color: transparent; border: 0px; margin-top: 5px;" onclick="myFunction()"><img src="img/x.png" class="user-icon"></button></a>
            </div>
        </div>

    `
}


createNavbar();

// user icon popup

let userIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');

userIcon.addEventListener('click', () => userPopupIcon.classList.toggle('active'))

let text = userPopupIcon.querySelector('p');
let actionBtn = userPopupIcon.querySelector('a');
let user = JSON.parse(sessionStorage.user || null);

if(user != null){ // user is logged in
    text.innerHTML = `log in as, ${user.name}`;
    actionBtn.innerHTML = 'log out';
    actionBtn.addEventListener('click', () => logout());
} else{
    text.innerHTML = 'login to your account';
    actionBtn.innerHTML = 'login';
    actionBtn.addEventListener('click', () => location.href = '/login');
}

const logout = () => {
    sessionStorage.clear()
    location.reload();
}

// search box

let searchBtn = document.querySelector('.search-btn')
let searchBox = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`;
    }
})

// nav cart count

const updateNavCartCounter = () => {
    let cartCounter = document.querySelector('.cart-item-count');

    let cartItem = JSON.parse(localStorage.getItem('cart'));

    if(cartItem == null){
        cartCounter.innerHTML = '00';
    } else{
        if(cartItem.length > 9){
            cartCounter.innerHTML = '9+';
        } else if(cartItem.length <= 9){
            cartCounter.innerHTML = `0${cartItem.length}`
        }
    }
}

updateNavCartCounter();

function myFunction() {
    alert("You're logging out.");
}
