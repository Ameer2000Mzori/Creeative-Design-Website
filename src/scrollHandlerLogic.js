//  selecting elements
const scrollUpBtn = document.getElementsByClassName("scroll-Up-Btn")[0];

// gelobal varibales

// functions
const userScroll = () => {
  if (window.scrollY) {
    console.log(window.screenY);
  }
};

// events
window.addEventListener("scroll", userScroll);
