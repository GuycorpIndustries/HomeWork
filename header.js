const jsHeader = document.getElementById("jsHeader");
const jsHeaderBottom = document.getElementById("jsHeaderBottom");

function bannerSection() {
  let bannerTop = document.createElement("div");

  let bannerTxt = document.createTextNode("Christopher T. Guy");
  let txttop = document.createTextNode("Guycorp");
  let txtbottom = document.createTextNode("Industries");
  let logoTop = document.createElement("p");
  let logoImg = document.createElement("img");
  let logoBottom = document.createElement("p");
  let logoDiv = document.createElement("div");

  let banner = document.createElement("h1");
  let bannerDiv = document.createElement("div");

  let imgBar = document.createElement("div");
  let htmlLogo = document.createElement("img");
  let cssLogo = document.createElement("img");
  let sassLogo = document.createElement("img");
  let jsLogo = document.createElement("img");

  logoTop.appendChild(txttop);
  logoBottom.appendChild(txtbottom);
  banner.appendChild(bannerTxt);

  bannerTop.setAttribute("class", "mainBanner");

  logoDiv.setAttribute("class", "logo");
  logoTop.setAttribute("class", "logo__top");
  logoImg.setAttribute("class", "logo__img");
  logoImg.setAttribute("src", "img/icon-blk-tech.png");
  logoBottom.setAttribute("class", "logo__bottom");
  banner.setAttribute("class", "banner");

  imgBar.setAttribute("class", "logo-bar__img");
  htmlLogo.setAttribute("class", "htmlLogo");
  htmlLogo.setAttribute("src", "img/HTML5_logo.svg.png");
  cssLogo.setAttribute("class", "cssLogo");
  cssLogo.setAttribute("src", "img/CSS.3b.svg.png");
  sassLogo.setAttribute("class", "sassLogo");
  sassLogo.setAttribute("src", "img/sass-1.svg");
  jsLogo.setAttribute("class", "jsLogo");
  jsLogo.setAttribute("src", "img/Javascript-logo.svg.png");

  logoDiv.appendChild(logoTop);
  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(logoBottom);

  bannerDiv.appendChild(banner);

  imgBar.appendChild(htmlLogo);
  imgBar.appendChild(cssLogo);
  imgBar.appendChild(sassLogo);
  imgBar.appendChild(jsLogo);

  bannerTop.appendChild(bannerDiv);
  bannerTop.appendChild(logoDiv);
  bannerTop.appendChild(imgBar);
  document.body.insertBefore(bannerTop, jsHeader);
}

function titleSection() {
  let sectionTitle = document.createElement("section");
  let title = document.createElement("h2");

  let titleTxt = document.createTextNode("Projects");

  sectionTitle.setAttribute("class", "sectionTitle");

  title.appendChild(titleTxt);
  sectionTitle.appendChild(title);

  document.body.insertBefore(sectionTitle, jsHeaderBottom);
}

document.addEventListener("DOMContentLoaded", () => {
  bannerSection();
  titleSection();
});
