
const nav = document.querySelectorAll('#nav'),
      photo = document.querySelector('#my-photo'),
      photoLeft = document.querySelector('#my-photo-left'),
      home = document.querySelector('#home');

function switchingPage() {
    nav.forEach(link => {
        link.addEventListener('click', () => {
            photo.style.right = '-300px';
            home.style.top = '100%';
            if(photo.style.right === '-300px'){
                photoLeft.style.left = '0';
            }
        })
    });
}

export default switchingPage;