// selecting elements

// Add a click event listener to the parent element

// cards
const teamCard = document.querySelectorAll(".team-Card");
const teamCardPage2 = document.querySelectorAll(".team-Card-Page-2");

// buttons
const teamCardBtns = document.querySelectorAll(".team-Card-Btn");
const teamCardBtnLine = document.querySelectorAll(".team-Card-Btn-Line");

// global variables

// functions
const openUserCard = (index) => {
  console.log(index);
  // team card
  teamCard.forEach((card) => {
    card.classList.remove("active");
  });

  // team pege 2
  teamCardPage2.forEach((card2) => {
    card2.classList.remove("active");
  });

  // btn line
  teamCardBtnLine.forEach((btnLine) => {
    btnLine.classList.remove("active");
  });

  teamCard[index].classList += " active";
  teamCardPage2[index].classList += " active";
  teamCardBtnLine[index].classList += " active";

  console.log(teamCard);
  console.log(teamCard[index]);
};

// events
teamCardBtns.forEach((cardBtn, index) => {
  cardBtn.addEventListener("click", () => openUserCard(index));
});
