// ! variables //
let navbar = document.querySelector("nav");
let navbarMedia = document.querySelector(".navMedia");
let navbarMenu = document.querySelector(".navMedia .menu");
let navbarMenuUl = document.querySelector(".navMedia ul");
let coursesBtns = Array.from(document.querySelectorAll(".coursesBtn"));
// ! sections
let sections = Array.from(document.querySelectorAll(".section"));
let titles = Array.from(document.querySelectorAll(".section .title"));
let items = Array.from(document.querySelectorAll(".section .items"));
// ! gallery
let gallery = Array.from(document.querySelectorAll(".gallery .img"));
// ! navbar
let navbarLinks = Array.from(document.querySelectorAll("nav ul li"));
let navbarLinksMedia = Array.from(document.querySelectorAll(".navMedia ul li"));

// ! window on scroll
window.addEventListener("scroll", (e) => {
  let scrollY = this.scrollY;
  // ! navbar
  if (scrollY >= 200) {
    navbar.classList.add("active");
    navbar.classList.add("animate__fadeInDown");
    navbarMedia.classList.add("active");
    navbarMedia.classList.add("animate__fadeInDown");
  } else {
    navbar.classList.remove("active");
    navbar.classList.remove("animate__fadeInDown");
    navbarMedia.classList.remove("active");
    navbarMedia.classList.remove("animate__fadeInDown");
  }

  // ! sections
  sections.map((sec) => {
    let top = window.scrollY;
    let offsetTop = sec.offsetTop - 600;
    let secHeight = sec.offsetHeight;

    if (top >= offsetTop && top < offsetTop + secHeight) {
      sec
        .querySelector(".title")
        .classList.add("active", "animate__animated", "animate__zoomIn");
      sec.querySelector(".items .item").style.opacity = 1;
      Array.from(sec.querySelectorAll(".items .item")).map((item) => {
        item.classList.add(
          "active",
          "animate__animated",
          "animate__fadeInUp",
          "animate__delay-.5s"
        );
      });
    }
  });
});

// ! open and close navbar menu (media)
navbarMenu.addEventListener("click", (e) => {
  console.log(navbarMenuUl.scrollHeight);
  if (navbarMenuUl.style.maxHeight == 0) {
    navbarMenuUl.style.maxHeight = navbarMenuUl.scrollHeight + 20 + "px";
    navbarMenuUl.style.padding = "10px";
  } else {
    navbarMenuUl.style.maxHeight = null;
    navbarMenuUl.style.padding = 0;
  }
});

gallery.map((img) => {
  img.addEventListener("mouseover", (e) => {
    img.style.opacity = "0.5";
  });

  img.addEventListener("mouseleave", (e) => {
    img.style.opacity = "1";
  });
});
