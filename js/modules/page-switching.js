const nav = document.querySelector("#nav"),
  linkSolid = nav.querySelectorAll(".nav__link-solid"),
  link = nav.querySelectorAll(".nav__link"),
  sectionMain = document.querySelectorAll(".info-block"),
  photoRight = document.querySelector("#my-photo"),
  photoLeft = document.querySelector("#my-photo-left");

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
      section.style.top = "-100%";
      section.classList.remove("info_active");
    }
  });
  sectionMain.forEach((section) => {
    if (section.id === attribute) {
      section.style.top = "50%";
      section.classList.add("info_active");
    }
  });
}

function switchingPage() {
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
}

export default switchingPage;
