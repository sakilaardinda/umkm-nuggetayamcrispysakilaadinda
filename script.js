// Mengambil tombol menu dan navigasi
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Membuka dan menutup menu pada HP
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Menutup menu setelah link diklik
document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// Tombol pesan melalui WhatsApp
const tombolPesan = document.querySelectorAll(".pesan-btn");

tombolPesan.forEach(function (tombol) {

    tombol.addEventListener("click", function () {

        const produk = tombol.getAttribute("data-produk");

        const nomorWA = "6282374175668";

        const pesan = `Halo, saya ingin memesan ${produk}. Apakah produknya masih tersedia?`;

        const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

        window.open(linkWA, "_blank");

    });

});

// MENUTUP MENU SAAT KLIK DI LUAR NAVBAR
document.addEventListener("click", function (event) {
    const navbar = document.querySelector(".navbar");

    if (navbar && !navbar.contains(event.target) && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
    }
});

// MENCEGAH MENU TETAP TERBUKA SAAT LAYAR DIPERBESAR
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navMenu.classList.remove("active");
    }
});

// TAHUN OTOMATIS PADA FOOTER
const footerText = document.querySelector(".footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Nugget Ayam Crispy. Semua Hak Dilindungi.`;
}

// EFEK ANIMASI SAAT HALAMAN DIBUKA
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".produk-card");

    cards.forEach(function (card, index) {
        card.style.animation = `fadeIn 0.6s ease ${index * 0.2}s both`;
    });
});

