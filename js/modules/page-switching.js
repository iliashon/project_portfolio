const nav = document.querySelector("#nav"),
  linkSolid = nav.querySelectorAll(".nav__link-solid"),
  link = nav.querySelectorAll(".nav__link"),
  navBurger = document.querySelector("#nav__burger__block"),
  linkSolidBurger = navBurger.querySelectorAll(".nav__link-solid"),
  linkBurger = navBurger.querySelectorAll(".nav__link"),
  sectionMain = document.querySelectorAll(".info-block"),
  photoRight = document.querySelector("#my-photo"),
  photoLeft = document.querySelector("#my-photo-left"),
  homeTitle = document.querySelector("#home__title-next"),
  logo = document.querySelector("#logo");

function animateSwitching(attribute) {
  sectionMain.forEach((section) => {
    if (section.classList.contains("ph-l") && section.id === attribute) {
      photoLeft.style.left = "0px";
      photoRight.style.right = "-300px";
    } else if (section.classList.contains("ph-r") && section.id === attribute) {
      photoLeft.style.left = "-300px";
      photoRight.style.right = "0px";
    }
    if (section.classList.contains("info_active")) {
      section.style.top = "-150%";
      section.classList.remove("info_active");
    }
  });
  sectionMain.forEach((section) => {
    if (section.id === attribute) {
      section.style.top = "55%";
      section.classList.add("info_active");
    }
  });
}

function switchingPage() {
  homeTitle.addEventListener("click", (clickLink) => {
    linkSolid.forEach((activeLink) => {
      if (activeLink.classList.contains("nav__link_active")) {
        activeLink.classList.remove("nav__link_active");
      }
    });
    animateSwitching(clickLink.target.getAttribute("data-name"));
    link.forEach((tabLink) => {
      if (tabLink.getAttribute("data-name") === 'about') {
        tabLink.parentNode.classList.add("nav__link_active");
      }
    })
  });

  logo.addEventListener("click", (clickLink) => {
    linkSolid.forEach((activeLink) => {
      if (activeLink.classList.contains("nav__link_active")) {
        activeLink.classList.remove("nav__link_active");
      }
    });
    console.log(clickLink.target.parentNode.getAttribute("data-name"));
    animateSwitching(clickLink.target.parentNode.getAttribute("data-name"));
    link.forEach((tabLink) => {
      if (tabLink.getAttribute("data-name") === 'home') {
        tabLink.parentNode.classList.add("nav__link_active");
      }
    })
  });

  link.forEach((tabLink) => {
    tabLink.addEventListener("click", (clickLink) => {
      linkSolid.forEach((activeLink) => {
        if (activeLink.classList.contains("nav__link_active")) {
          activeLink.classList.remove("nav__link_active");
        }
      });
      animateSwitching(clickLink.target.getAttribute("data-name"));
      clickLink.target.parentNode.classList.add("nav__link_active");
    });
  });
  linkBurger.forEach((tabLink) => {
    tabLink.addEventListener("click", (clickLink) => {
      linkSolidBurger.forEach((activeLink) => {
        if (activeLink.classList.contains("nav__link_active")) {
          activeLink.classList.remove("nav__link_active");
        }
      });
      animateSwitching(clickLink.target.getAttribute("data-name"));
      clickLink.target.parentNode.classList.add("nav__link_active");
    });
  });
}

export default switchingPage;
