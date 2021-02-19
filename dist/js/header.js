<<<<<<< HEAD
const pageHeader = document.getElementById("page-header");

function topBanner() {
  let bannerTop = document.createElement("div");

  let bannerDiv = document.createElement("div");
  let banner = document.createElement("h1");

  let logoDiv = document.createElement("div");
  let logoTop = document.createElement("p");
  let logoImg = document.createElement("img");
  let logoBottom = document.createElement("p");

  let imgBar = document.createElement("div");
  let htmlLogo = document.createElement("img");
  let cssLogo = document.createElement("img");
  let sassLogo = document.createElement("img");
  let jsLogo = document.createElement("img");

  logoDiv.setAttribute("class", "logo");
  logoDiv.style.position = "absolute";
  logoDiv.style.display = "flex";
  logoDiv.style.flexDirection = "column";
  logoDiv.style.alignItems = "center";
  logoDiv.style.justifyContent = "center";
  logoDiv.style.top = "calc(1.5vw + 1.75rem)";
  logoDiv.style.left = "calc(1vw + 1.5rem)";
  logoDiv.style.width = "calc(9vw + 9rem)";
  logoDiv.style.height = "calc(5vw + 5rem)";
  logoDiv.style.fontFamily = "'Audiowide', cursive";
  logoDiv.style.border = "5px double var(--primaryBackground)";
  logoDiv.style.borderRadius = "1rem";
  bannerTop.appendChild(logoDiv);

  logoTop.appendChild(document.createTextNode("Guycorp"));
  logoTop.setAttribute("class", "logo__top");
  logoTop.style.top = "-40px";
  logoTop.style.left = "50%";
  logoTop.style.transform = "translateX(-50%)";
  logoTop.style.position = "absolute";
  logoTop.style.fontSize = "1.5rem";
  logoTop.style.color = "var(--primaryBackground)";
  logoTop.style.letterSpacing = "0.15rem";
  logoDiv.appendChild(logoTop);

  logoImg.setAttribute("class", "logo__img");
  logoImg.setAttribute("src", "img/icon-blk-tech.png");
  logoImg.style.margin = "10px 0";
  logoImg.style.transform = "rotate(90deg)";
  logoImg.style.width = "calc(4.25vw + 4.25rem)";
  logoImg.style.height = "calc(4.25vw + 4.25rem)";
  logoImg.style.border = "2px solid var(--primaryBackground)";
  logoImg.style.borderRadius = "50%";
  logoDiv.appendChild(logoImg);

  logoBottom.appendChild(document.createTextNode("Industries"));
  logoBottom.setAttribute("class", "logo__bottom");
  logoBottom.style.bottom = "-40px";
  logoBottom.style.left = "50%";
  logoBottom.style.transform = "translateX(-50%)";
  logoBottom.style.position = "absolute";
  logoBottom.style.fontSize = "1.5rem";
  logoBottom.style.color = "var(--primaryBackground)";
  logoBottom.style.letterSpacing = "0.15rem";
  logoDiv.appendChild(logoBottom);

  imgBar.setAttribute("class", "icon");
  imgBar.style.position = "absolute";
  imgBar.style.top = "5%";
  imgBar.style.right = "5%";
  imgBar.style.display = "flex";
  imgBar.style.alignItems = "center";
  imgBar.style.justifyContent = "center";
  bannerTop.appendChild(imgBar);

  htmlLogo.setAttribute("class", "htmlLogo");
  htmlLogo.setAttribute("src", "img/HTML5_logo.svg.png");
  htmlLogo.style.margin = "calc(1vw + 0.25rem)";
  htmlLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(htmlLogo);

  cssLogo.setAttribute("class", "cssLogo");
  cssLogo.setAttribute("src", "img/CSS.3b.svg.png");
  cssLogo.style.margin = "calc(1vw + 0.25rem)";
  cssLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(cssLogo);

  sassLogo.setAttribute("class", "sassLogo");
  sassLogo.setAttribute("src", "img/sass-1.svg");
  sassLogo.style.margin = "calc(1vw + 0.25rem)";
  sassLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(sassLogo);

  jsLogo.setAttribute("class", "jsLogo");
  jsLogo.setAttribute("src", "img/Javascript-logo.svg.png");
  jsLogo.style.margin = "calc(1vw + 0.25rem)";
  jsLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(jsLogo);

  banner.appendChild(document.createTextNode("Christopher T. Guy"));
  banner.setAttribute("class", "banner");
  banner.style.position = "absolute";
  banner.style.bottom = "calc(7vw - 0.75rem)";
  banner.style.right = "5%";
  banner.style.transform = "rotate(-3.8deg)";
  banner.style.fontSize = "calc(1.5vw + 1.5rem)";
  banner.style.fontFamily = "'Audiowide', cursive";
  banner.style.color = "var(--primaryBackground)";
  bannerDiv.appendChild(banner);

  bannerTop.appendChild(bannerDiv);
  bannerTop.setAttribute("class", "topBanner");
  bannerTop.style.position = "relative";
  bannerTop.style.height = "25vw";
  bannerTop.style.minHeight = "250px";
  bannerTop.style.clipPath =
    "polygon(0 0, 100% 0, 100% calc(100% - 7vw), 0 100%)";
  bannerTop.style.marginBottom = "-7vw";
  bannerTop.style.backgroundImage = "url('img/header_background_2.png')";
  bannerTop.style.backgroundSize = "cover";
  bannerTop.style.backgroundColor = "white";
  bannerTop.style.zIndex = "1";
  pageHeader.appendChild(bannerTop);
}

function titleSection() {
  let title = document.createElement("h2");
  let sectionTitle = document.createElement("section");

  title.appendChild(document.createTextNode('"Projects"'));
  title.style.color = "orangered";
  title.style.position = "absolute";
  title.style.width = "100%";
  title.style.textAlign = "center";
  title.style.top = "calc(3vw + 3rem)";
  title.style.left = "50%";
  title.style.transform = "translateX(-50%)";
  title.style.fontSize = "calc(2vw + 2rem)";
  title.style.fontFamily = "'Audiowide', cursive";

  sectionTitle.appendChild(title);
  sectionTitle.setAttribute("class", "sectionTitle");
  sectionTitle.style.position = "relative";
  sectionTitle.style.height = "calc(7vw + 7rem)";
  sectionTitle.style.width = "100%";
  sectionTitle.style.backgroundColor = "var(--primaryBackground)";
  sectionTitle.style.borderBottom = "3px solid orangeRed";

  pageHeader.appendChild(sectionTitle);
}

export default function loadHeader() {
  document.addEventListener("DOMContentLoaded", () => {
    topBanner();
    titleSection();
  });
}

/*
export {loadHeader}           USE THIS FOR ALL OTHER EXPORTS
*/
=======
const pageHeader = document.getElementById("page-header");

function topBanner() {
  let bannerTop = document.createElement("div");

  let bannerDiv = document.createElement("div");
  let banner = document.createElement("h1");

  let logoDiv = document.createElement("div");
  let logoTop = document.createElement("p");
  let logoImg = document.createElement("img");
  let logoBottom = document.createElement("p");

  let imgBar = document.createElement("div");
  let htmlLogo = document.createElement("img");
  let cssLogo = document.createElement("img");
  let sassLogo = document.createElement("img");
  let jsLogo = document.createElement("img");

  logoDiv.setAttribute("class", "logo");
  logoDiv.style.position = "absolute";
  logoDiv.style.display = "flex";
  logoDiv.style.flexDirection = "column";
  logoDiv.style.alignItems = "center";
  logoDiv.style.justifyContent = "center";
  logoDiv.style.top = "calc(1.5vw + 1.75rem)";
  logoDiv.style.left = "calc(1vw + 1.5rem)";
  logoDiv.style.width = "calc(9vw + 9rem)";
  logoDiv.style.height = "calc(5vw + 5rem)";
  logoDiv.style.fontFamily = "'Audiowide', cursive";
  logoDiv.style.border = "5px double var(--primaryBackground)";
  logoDiv.style.borderRadius = "1rem";
  bannerTop.appendChild(logoDiv);

  logoTop.appendChild(document.createTextNode("Guycorp"));
  logoTop.setAttribute("class", "logo__top");
  logoTop.style.top = "-40px";
  logoTop.style.left = "50%";
  logoTop.style.transform = "translateX(-50%)";
  logoTop.style.position = "absolute";
  logoTop.style.fontSize = "1.5rem";
  logoTop.style.color = "var(--primaryBackground)";
  logoTop.style.letterSpacing = "0.15rem";
  logoDiv.appendChild(logoTop);

  logoImg.setAttribute("class", "logo__img");
  logoImg.setAttribute("src", "img/icon-blk-tech.png");
  logoImg.style.margin = "10px 0";
  logoImg.style.transform = "rotate(90deg)";
  logoImg.style.width = "calc(4.25vw + 4.25rem)";
  logoImg.style.height = "calc(4.25vw + 4.25rem)";
  logoImg.style.border = "2px solid var(--primaryBackground)";
  logoImg.style.borderRadius = "50%";
  logoDiv.appendChild(logoImg);

  logoBottom.appendChild(document.createTextNode("Industries"));
  logoBottom.setAttribute("class", "logo__bottom");
  logoBottom.style.bottom = "-40px";
  logoBottom.style.left = "50%";
  logoBottom.style.transform = "translateX(-50%)";
  logoBottom.style.position = "absolute";
  logoBottom.style.fontSize = "1.5rem";
  logoBottom.style.color = "var(--primaryBackground)";
  logoBottom.style.letterSpacing = "0.15rem";
  logoDiv.appendChild(logoBottom);

  imgBar.setAttribute("class", "icon");
  imgBar.style.position = "absolute";
  imgBar.style.top = "5%";
  imgBar.style.right = "5%";
  imgBar.style.display = "flex";
  imgBar.style.alignItems = "center";
  imgBar.style.justifyContent = "center";
  bannerTop.appendChild(imgBar);

  htmlLogo.setAttribute("class", "htmlLogo");
  htmlLogo.setAttribute("src", "img/HTML5_logo.svg.png");
  htmlLogo.style.margin = "calc(1vw + 0.25rem)";
  htmlLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(htmlLogo);

  cssLogo.setAttribute("class", "cssLogo");
  cssLogo.setAttribute("src", "img/CSS.3b.svg.png");
  cssLogo.style.margin = "calc(1vw + 0.25rem)";
  cssLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(cssLogo);

  sassLogo.setAttribute("class", "sassLogo");
  sassLogo.setAttribute("src", "img/sass-1.svg");
  sassLogo.style.margin = "calc(1vw + 0.25rem)";
  sassLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(sassLogo);

  jsLogo.setAttribute("class", "jsLogo");
  jsLogo.setAttribute("src", "img/Javascript-logo.svg.png");
  jsLogo.style.margin = "calc(1vw + 0.25rem)";
  jsLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(jsLogo);

  banner.appendChild(document.createTextNode("Christopher T. Guy"));
  banner.setAttribute("class", "banner");
  banner.style.position = "absolute";
  banner.style.bottom = "calc(7vw - 0.75rem)";
  banner.style.right = "5%";
  banner.style.transform = "rotate(-3.8deg)";
  banner.style.fontSize = "calc(1.5vw + 1.5rem)";
  banner.style.fontFamily = "'Audiowide', cursive";
  banner.style.color = "var(--primaryBackground)";
  bannerDiv.appendChild(banner);

  bannerTop.appendChild(bannerDiv);
  bannerTop.setAttribute("class", "topBanner");
  bannerTop.style.position = "relative";
  bannerTop.style.height = "25vw";
  bannerTop.style.minHeight = "250px";
  bannerTop.style.clipPath =
    "polygon(0 0, 100% 0, 100% calc(100% - 7vw), 0 100%)";
  bannerTop.style.marginBottom = "-7vw";
  bannerTop.style.backgroundImage = "url('img/header_background_2.png')";
  bannerTop.style.backgroundSize = "cover";
  bannerTop.style.backgroundColor = "white";
  bannerTop.style.zIndex = "1";
  pageHeader.appendChild(bannerTop);
}

function titleSection() {
  let title = document.createElement("h2");
  let sectionTitle = document.createElement("section");

  title.appendChild(document.createTextNode('"The Program"'));
  title.style.color = "orangered";
  title.style.position = "absolute";
  title.style.top = "calc(3vw + 3rem)";
  title.style.left = "50%";
  title.style.transform = "translateX(-50%)";
  title.style.fontSize = "calc(2vw + 2rem)";
  title.style.fontFamily = "'Audiowide', cursive";

  sectionTitle.appendChild(title);
  sectionTitle.setAttribute("class", "sectionTitle");
  sectionTitle.style.position = "relative";
  sectionTitle.style.height = "calc(7vw + 7rem)";
  sectionTitle.style.width = "100%";
  sectionTitle.style.backgroundColor = "var(--primaryBackground)";
  sectionTitle.style.borderBottom = "3px solid orangeRed";
  sectionTitle.style.marginBottom = "calc(2.5vw + 2.5rem)";

  pageHeader.appendChild(sectionTitle);
}

export default function loadHeader() {
  document.addEventListener("DOMContentLoaded", () => {
    topBanner();
    titleSection();
  });
}

/*
export {loadHeader}           USE THIS FOR ALL OTHER EXPORTS
*/
>>>>>>> 1d69676495c86207c7f1afd682fcfecc159dbcc7
