const header = document.querySelector(".header");
const headerHeight = header && header.offsetHeight;
window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  if (scrollY >= headerHeight) {
    header && header.classList.add("nav-fixed");
    document.body.style.paddingTop = `${headerHeight}px`;
    // if (header) {
    //   header.classList.add("is-fixed");
    // }
  } else {
    header && header.classList.remove("nav-fixed");
    document.body.style.paddingTop = 0;
  }
});

// LÀM NÚT MŨI TÊN CỦA ACCORDION

const accordionButtonEl = document.querySelectorAll(".accordion-button");
[...accordionButtonEl].forEach((item) =>
  item.addEventListener("click", handleClick)
);
function handleClick(e) {
  const accordionItem = e.target.closest(".accordion-item");
  accordionItem.classList.toggle("active");
}

// BACK TO TOP
// Get the button
let mybutton = document.getElementById("backToTop");
mybutton.addEventListener("click", topFunction);

// When the user scrolls down 20px from the top of the document, show the button
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// DARK MODE
const themeColor = document.querySelector(".theme-color");
const themeMoon = document.querySelector(".theme-moon");
// const themeSun = document.querySelector(".theme-sun");
themeColor.addEventListener("click", handleTheme);
function handleTheme(e) {
  document.body.classList.toggle("dark");
  themeMoon.classList.toggle("fa-moon");
  themeMoon.classList.toggle("fa-sun");
}

// CHANGE ICON
const iconMobile = document.querySelector(".mini-icon");
iconMobile.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-bars");
  e.target.classList.toggle("fa-xmark");
});
