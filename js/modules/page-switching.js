
const nav = document.querySelector('#nav'),
      linkSolid = nav.querySelectorAll('.nav__link-solid'),
      link = nav.querySelectorAll('.nav__link'),
      active = document.querySelectorAll('.info-block'),
      photo = document.querySelector('#my-photo'),
      photoLeft = document.querySelector('#my-photo-left'),
      about = document.querySelector('#about'),
      home = document.querySelector('#home'),
      portfolio = document.querySelector('#portfolio'),
      skills = document.querySelector('#skills'),
      contacts = document.querySelector('#contacts');

function switchingPage() {

    link.forEach((link) => {
        if (link.classList.contains('about')) {
            link.addEventListener('click', () => {
                linkSolid.forEach((e) => {
                    if (e.classList.contains('nav__link_active')){
                        e.classList.remove('nav__link_active')
                    }
                })
                link.parentNode.classList.add('nav__link_active')
                active.forEach((elem) => {
                    if (elem.classList.contains('info_active')) {
                        elem.style.top = '-100%';
                        photo.style.right = '-300px';
                        elem.classList.remove('info_active');
                    }
                })
                about.style.top = '50%';
                about.classList.add('info_active');
                photoLeft.style.left = '0px';
            })
        }
        if (link.classList.contains('home')) {
            link.addEventListener('click', () => {
                linkSolid.forEach((e) => {
                    if (e.classList.contains('nav__link_active')){
                        e.classList.remove('nav__link_active')
                    }
                })
                link.parentNode.classList.add('nav__link_active')
                active.forEach((elem) => {
                    if (elem.classList.contains('info_active')) {
                        elem.style.top = '-100%';
                        photoLeft.style.left = '-300px';
                        elem.classList.remove('info_active');
                    }
                })
                home.style.top = '25%';
                home.classList.add('info_active');
                photo.style.right = '0px';
            })
        }
        if (link.classList.contains('portfolio')) {
            link.addEventListener('click', () => {
                linkSolid.forEach((e) => {
                    if (e.classList.contains('nav__link_active')){
                        e.classList.remove('nav__link_active')
                    }
                })
                link.parentNode.classList.add('nav__link_active')
                active.forEach((elem) => {
                    if (elem.classList.contains('info_active')) {
                        elem.style.top = '-100%';
                        photoLeft.style.left = '-300px';
                        elem.classList.remove('info_active');
                        portfolio.style.top = '25%';
                        portfolio.classList.add('info_active');
                        photo.style.right = '0px';
                    }
                })
            })
        }
        if (link.classList.contains('skills')) {
            link.addEventListener('click', () => {
                linkSolid.forEach((e) => {
                    if (e.classList.contains('nav__link_active')){
                        e.classList.remove('nav__link_active')
                    }
                })
                link.parentNode.classList.add('nav__link_active')
                active.forEach((elem) => {
                    if (elem.classList.contains('info_active')) {
                        elem.style.top = '-100%';
                        photo.style.right = '-300px';
                        elem.classList.remove('info_active');
                        skills.style.top = '25%';
                        skills.classList.add('info_active');
                        photoLeft.style.left = '0px';
                    }
                })
            })
        }
        if (link.classList.contains('contacts')) {
            link.addEventListener('click', () => {
                linkSolid.forEach((e) => {
                    if (e.classList.contains('nav__link_active')){
                        e.classList.remove('nav__link_active')
                    }
                })
                link.parentNode.classList.add('nav__link_active')
                active.forEach((elem) => {
                    if (elem.classList.contains('info_active')) {
                        elem.style.top = '-100%';
                        photoLeft.style.left = '-300px';
                        elem.classList.remove('info_active');
                        contacts.style.top = '25%';
                        contacts.classList.add('info_active');
                        photo.style.right = '0px';
                    }
                })
            })
        }
    });
}

export default switchingPage;