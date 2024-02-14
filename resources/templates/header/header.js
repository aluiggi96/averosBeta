function createBarNav() {
    var header = document.querySelector('header');
    var nav = logo();
    var tabsMenu = menu();
    var iconMenuMobile = hamburgerIcon();
    
    iconMenuMobile.addEventListener('click', function() {
        menuIconChanger();
    });

    header.appendChild(nav);
    header.appendChild(tabsMenu);
    header.appendChild(iconMenuMobile);

    return header;
}

function menuIconChanger() {
    var menuIcon = document.getElementById('botonMenuMobile');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');

    var body = document.querySelector('body');

    body.style.overflow = (body.style.overflow === 'hidden') ? 'auto' : 'hidden';

    var menu = document.querySelector('.menu');
    menu.style.left = (menu.style.left === '0px' ? '100%' : '0px');
}


function logo() {
    var nav = document.createElement('nav');
    var addAnchorImg = document.createElement('a');
    addAnchorImg.href = 'index.html';
    nav.appendChild(addAnchorImg);
    var imgLogoAveros = document.createElement('img');
    imgLogoAveros.classList.add('averosLogo');
    imgLogoAveros.src = `./resources/logos/averos-logo.png`;
    addAnchorImg.appendChild(imgLogoAveros);
    return nav;
}

function menu() {
    var tabsMenu = document.createElement('div');
    tabsMenu.classList.add('menu');
    var sponsoredMobile = createMenuItem('Patrocinadores', '#');
    var aboutUsMobile = createMenuItem('Quienes somos', 'about.html');

    tabsMenu.appendChild(sponsoredMobile);
    tabsMenu.appendChild(aboutUsMobile);

    return tabsMenu;
}

function hamburgerIcon() {
    var hamburgerMenuIcon = document.createElement('i');
    hamburgerMenuIcon.id = 'botonMenuMobile';
    hamburgerMenuIcon.classList.add('fa-solid', 'fa-bars', 'hamburger-menu');

    return hamburgerMenuIcon;
}

function createMenuItem(text, link) {
    var menuItem = document.createElement('a');
    menuItem.href = link;
    menuItem.textContent = text;
    return menuItem;
}
