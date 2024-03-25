const header = document.querySelector(".header");
const headerHeight = header && header.offsetHeight;
window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  if (scrollY >= headerHeight) {
    header && header.classList.add("nav-fixed");
    document.body.style.paddingTop = `${headerHeight}px`;

  } else {
    header && header.classList.remove("nav-fixed");
    document.body.style.paddingTop = 0;
  }
});

// Make arrow ACCORDION

const accordionButtonEl = document.querySelectorAll(".accordion-button");
[...accordionButtonEl].forEach((item) =>
  item.addEventListener("click", handleClick)
);
function handleClick(e) {
  const accordionItem = e.target.closest(".accordion-item");
  accordionItem.classList.toggle("active");
}

// button Back to Top
let mybutton = document.getElementById("backToTop");
mybutton.addEventListener("click", topFunction);

//show the button at the end
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// back to Top when click
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// DARK MODE for web
const themeColor = document.querySelector(".theme-color");
const themeMoon = document.querySelector(".theme-moon");

themeColor.addEventListener("click", handleTheme);
function handleTheme(e) {
  document.body.classList.toggle("dark");
  themeMoon.classList.toggle("fa-moon");
  themeMoon.classList.toggle("fa-sun");
}

// Icon
const iconMobile = document.querySelector(".mini-icon");
iconMobile.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-bars");
  e.target.classList.toggle("fa-xmark");
});
