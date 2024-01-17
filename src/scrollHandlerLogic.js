//  selecting elements
const scrollUpBtn = document.getElementsByClassName("scroll-Up-Btn")[0];

// gelobal varibales

// functions
const userScroll = () => {
  window.scrollY > 700
    ? scrollUpBtn.classList.add("active")
    : scrollUpBtn.classList.remove("active");
};

// events
window.addEventListener("scroll", userScroll);
