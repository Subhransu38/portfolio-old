// Nav Menu Open Close
function menuToggle() {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
  let toggle = document.getElementById("toggle");
  toggle.classList.toggle("active");
}

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});
