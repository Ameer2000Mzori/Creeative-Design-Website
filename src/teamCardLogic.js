// selecting elements

// cards
const teamCard = document.querySelectorAll(".team-Card");
const teamCardPage2 = document.querySelectorAll(".team-Card-Page-2");

// buttons
const teamCardBtns = document.querySelectorAll(".team-Card-Btn");
const teamCardBtnLine = document.querySelectorAll(".team-Card-Btn-Line");

// global variables

// functions

// events
teamCardBtns.forEach((cardBtn, index) => {
  cardBtn.addEventListener("click", openUserCard);
});
