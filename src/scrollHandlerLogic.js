//  selecting elements
const scrollUpBtn = document.getElementsByClassName("scroll-Up-Btn")[0];

// gelobal varibales

// functions
const userScroll = () => {
  window.scrollY > 700
    ? scrollUpBtn.classList.add("active")
    : scrollUpBtn.classList.remove("active");
};

// window scroll up function
const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
// events
window.addEventListener("scroll", userScroll);
scrollUpBtn, addEventListener("click", scrollUp);
