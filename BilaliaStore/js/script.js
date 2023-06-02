// Toggle kelas aktif
const navbarNav = document.querySelector('.navbar-nav');
// ! ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
});

// Kontak form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwzAkO8VzCggTZxcIzjSQ5dkyItwRdOh6rsYn-OFQhmGODgprasnlJgd5HZOlm3Hw8m_g/exec';
  const form = document.forms['Bilalia-Store'];
  const btnKirim = document.querySelector('button[type="submit"]');
  const btnLoading = document.querySelector('.buttonload');
  const myAlert = document.querySelector('.alert');

form.addEventListener('submit', e => {
    e.preventDefault();
  // Ketika tombol submit diklik
  btnLoading.style.display = 'block';
  btnKirim.style.display = 'none';
  myAlert.style.display = 'none'; // Sembunyikan alert sebelum pengiriman

  fetch(scriptURL, {method: 'POST', body: new FormData(form) })
    .then(response => {
    console.log('Success!', response);
  btnLoading.style.display = 'none';
  btnKirim.style.display = 'block';
  form.reset(); // Reset form setelah pengiriman berhasil
  myAlert.textContent = 'Terima Kasih! Pesan berhasil dikirim.';
  myAlert.classList.remove('alert-error');
  myAlert.classList.add('alert-success');
  myAlert.style.display = 'block'; // Tampilkan alert sukses
    })
    .catch(error => {
    console.error('Error!', error.message);
  btnLoading.style.display = 'none';
  btnKirim.style.display = 'block';
  myAlert.textContent = 'Terjadi kesalahan saat mengirim pesan.';
  myAlert.classList.remove('alert-success');
  myAlert.classList.add('alert-error');
  myAlert.style.display = 'block'; // Tampilkan alert gagal
    });
});