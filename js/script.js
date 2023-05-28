// Toggle kelas aktif
const navbarList = document.querySelector('.link-list');
// ! ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarList.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarList.contains(e.target)){
    navbarList.classList.remove('active')
  }
});