function createBarNav() {
    var header = document.querySelector('header');
    var nav = createNav();
    header.appendChild(nav);
    return header;
}


function createNav() {
    var nav = document.createElement('nav');
    var addAnchorImg = document.createElement('a')
    addAnchorImg.href = "index.html"
    nav.appendChild(addAnchorImg)
    var imgLogoAveros = document.createElement('img');
    imgLogoAveros.classList.add('averosLogo')
    imgLogoAveros.src = "./resources/logos/averos-logo.png";
    addAnchorImg.appendChild(imgLogoAveros);
    return nav;
}
