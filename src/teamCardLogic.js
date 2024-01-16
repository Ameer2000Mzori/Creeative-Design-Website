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
const openUserCard = (e, index) => {
  // remove all classes function call
  removeAllClasses();

  // here we will add active class to the clicked element
  teamCard[index].classList += " active";
  teamCardPage2[index].classList += " active";
  teamCardBtnLine[index].classList += " active";

  // test console
  console.log(teamCard);
  console.log(teamCard[index]);
};

// remove all classes function
const removeAllClasses = () => {
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
};

// events
teamCardBtns.forEach((cardBtn, index) => {
  cardBtn.addEventListener("click", (e) => openUserCard(e, index));
});

window.addEventListener("click", (e) => {
  e.target.className !== "team-Card-Btn" ? removeAllClasses() : null;
});
