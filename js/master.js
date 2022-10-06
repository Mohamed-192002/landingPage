const landingImages = document.querySelector(".landing-page");
const openAndCloseGear = document.querySelector(".toggel-setting");
const settingBox = document.querySelector(".setting-box");
const SettingSpin = document.querySelector(".fa-gear ");
const colorLi = document.querySelectorAll(".option-list li");
const randomImg = document.querySelectorAll(".random-background span");
const toggelBullets = document.querySelectorAll(".setting-bullets span");
const ourGalary = document.querySelectorAll(".imgs-box img");
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll(".links a");
const reset = document.querySelector(".reset");
const menu = document.querySelector(".links-container i");
const menuUl = document.querySelector(".header-area .links-container ul");
const menuArrow = document.querySelector(".header-area i");
//////////////////
// Add Active Class To Element
const activeFunction = (e) => {
  e.target.parentElement.querySelectorAll(".Active").forEach((x) => {
    x.classList.remove("Active");
  });
  e.target.classList.add("Active");
};
// Scroll into some section
const scrollToSomeSection = (element) => {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(e.target.dataset.section)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
};
//////////////////
openAndCloseGear.addEventListener("click", () => {
  settingBox.classList.toggle("open");
  SettingSpin.classList.toggle("fa-spin");
});
/////////////////
let chaCol = window.localStorage.getItem("changeColor");

if (chaCol !== null) {
  document.documentElement.style.setProperty("--main-color", chaCol);
  colorLi.forEach((x) => {
    x.classList.remove("Active");
    if (x.dataset.color == chaCol) {
      x.classList.add("Active");
    }
  });
  if (chaCol == "#ff9800") {
    document.querySelector(".about-image img").src = "image/about-us1.jpg";
  } else if (chaCol == "#e91e63") {
    document.querySelector(".about-image img").src = "image/about-us2.jpg";
  } else if (chaCol == "#009688") {
    document.querySelector(".about-image img").src = "image/about-us3.jpg";
  } else if (chaCol == "#03a9f4") {
    document.querySelector(".about-image img").src = "image/about-us4.jpg";
  } else if (chaCol == "#4caf50") {
    document.querySelector(".about-image img").src = "image/about-us5.jpg";
  }
}
colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color
    );
    if (e.currentTarget.dataset.color == "#ff9800") {
      document.querySelector(".about-image img").src = "image/about-us1.jpg";
    } else if (e.currentTarget.dataset.color == "#e91e63") {
      document.querySelector(".about-image img").src = "image/about-us2.jpg";
    } else if (e.currentTarget.dataset.color == "#009688") {
      document.querySelector(".about-image img").src = "image/about-us3.jpg";
    } else if (e.currentTarget.dataset.color == "#03a9f4") {
      document.querySelector(".about-image img").src = "image/about-us4.jpg";
    } else if (e.currentTarget.dataset.color == "#4caf50") {
      document.querySelector(".about-image img").src = "image/about-us5.jpg";
    }
    window.localStorage.setItem("changeColor", e.currentTarget.dataset.color);
    // Add Active Class To Element
    activeFunction(e);
  });
});
// window.localStorage.clear();
///////////////////////
let arrImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let intervalImage;
let randomLocalStorage = localStorage.getItem("localImage");
randomImg.forEach((x) => {
  x.classList.remove("Active");
});
if (randomLocalStorage !== null) {
  if (randomLocalStorage === "yes") {
    ran();
    document.querySelector(".random-background .yes").classList.add("Active");
  } else {
    document.querySelector(".random-background .no").classList.add("Active");
  }
} else {
  document.querySelector(".random-background .yes").classList.add("Active");
}
function ran() {
  intervalImage = setInterval(() => {
    var randomImmages = Math.floor(Math.random() * arrImages.length);
    landingImages.style.backgroundImage =
      'url("image/' + arrImages[randomImmages] + '")';
  }, 5000);
}
randomImg.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // call function to Add Active Class To Element
    activeFunction(e);
    if (e.target.dataset.backgound === "yes") {
      ran();
      localStorage.setItem("localImage", "yes");
    } else {
      clearInterval(intervalImage);
      localStorage.setItem("localImage", "no");
    }
  });
});
////////////////////////////
let intervalBullet;
let bulletLocalStorage = localStorage.getItem("localBullets");
toggelBullets.forEach((x) => {
  x.classList.remove("Active");
});
if (bulletLocalStorage !== null) {
  if (bulletLocalStorage === "yes") {
    blockBullets();
    document.querySelector(".setting-bullets .yes").classList.add("Active");
  } else {
    document.querySelector(".setting-bullets .no").classList.add("Active");
    noneBullets();
  }
} else {
  document.querySelector(".setting-bullets .yes").classList.add("Active");
}
function noneBullets() {
  document.querySelector(".nav-bullets").style.display = "none";
}
function blockBullets() {
  document.querySelector(".nav-bullets").style.display = "block";
}
toggelBullets.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // call function to Add Active Class To Element
    activeFunction(e);
    if (e.target.dataset.backgound === "yes") {
      blockBullets();
      localStorage.setItem("localBullets", "yes");
    } else {
      noneBullets();
      clearInterval(intervalImage);
      localStorage.setItem("localBullets", "no");
    }
  });
});
///////////////////////
let skillsSection = document.querySelector(".skills");
window.onscroll = function () {
  let skillsOffsetTop = skillsSection.offsetTop;
  let skillsOuterHeight = skillsSection.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  let x = skillsOffsetTop + skillsOuterHeight - windowHeight;
  if (windowScrollTop > x) {
    let elementOfSkills = document.querySelectorAll(
      ".box-skills .skill-progress span"
    );
    elementOfSkills.forEach((e) => {
      e.style.width = e.dataset.progress;
    });
  }
};
// create Popup Box
ourGalary.forEach((e) => {
  e.addEventListener("click", (ele) => {
    // Creat The Overlay
    let overLay = document.createElement("div");
    overLay.classList.add("overlayClass");
    document.body.appendChild(overLay);
    // Create Text Hidding In Popup
    let popupEle = document.createElement("div");
    popupEle.classList.add("popupClass");
    let popupText = document.createElement("h3");
    popupText.textContent = e.alt;
    popupEle.appendChild(popupText);
    // Create Image In Popup
    let popupImg = document.createElement("img");
    popupImg.src = e.src;
    popupEle.appendChild(popupImg);
    // Create Close Button In Popup
    let closeButton = document.createElement("span");
    closeButton.textContent = "X";
    closeButton.classList.add("closeButtonClass");
    popupEle.appendChild(closeButton);
    // Add Popup Box In Body
    document.body.appendChild(popupEle);
    // Close The Popup Box
    closeButton.addEventListener("click", () => {
      popupEle.remove();
      overLay.remove();
    });
  });
});
/////////////////////
// call Function Scroll Into Any Section
scrollToSomeSection(allBullets);
scrollToSomeSection(allLinks);
////////////////////
reset.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
menu.addEventListener("click", () => {
  menuUl.classList.toggle("open");
  menuArrow.classList.toggle("menu-active");
});
menuUl.onclick = function (e) {
  e.stopPropagation();
};
document.addEventListener("click", (e) => {
  if (e.target !== menu && e.target !== menuUl) {
    if (menuUl.classList.contains("open")) {
      menuUl.classList.toggle("open");
      menuArrow.classList.toggle("menu-active");
    }
  }
});
