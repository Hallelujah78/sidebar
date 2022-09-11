const sidebarToggle = document.querySelector(".sidebar-toggle");

const sidebarClose = document.querySelector(".close-btn");

const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("show-sidebar");
}

sidebarToggle.addEventListener("click", toggleSidebar);

sidebarClose.addEventListener("click", toggleSidebar);
