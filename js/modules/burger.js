const burgerNav = document.querySelector('#burger-nav'),
      span = burgerNav.querySelector('.span__nav'),
      burgerNavMenu = burgerNav.querySelector('#nav__burger__block');

export function spanRotate() {
  span.addEventListener('click', () => {
    if (span.classList.contains("span__nav_active")) {
      span.classList.remove("span__nav_active");
      burgerNavMenu.style.right = '-200%';
    } else {
      span.classList.add("span__nav_active");
      burgerNavMenu.style.right = '0';
    }
  })
}