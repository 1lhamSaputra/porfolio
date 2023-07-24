// JavaScript untuk mengatur proyek agar bersambung terus menerus
const projectContainer = document.getElementById("project-container");
const projects = projectContainer.innerHTML;

function cloneProjects() {
  projectContainer.innerHTML += projects;
}

cloneProjects(); // Membuat salinan proyek pertama kali
setInterval(cloneProjects, 2000); // Membuat salinan proyek setiap 2 detik

// JavaScript untuk smooth scroll saat mengklik navbar
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});