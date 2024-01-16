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
  if (e.target) {
    console.log(e.target, "true");
  } else {
    console.log(e.target, "false");
  }

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

window.addEventListener("click", (e) => {
  if (e.target.className === "team-Card-Btn") {
    console.log("true");
    teamCardBtns.forEach((cardBtn, index) => {
      cardBtn.addEventListener("click", (e) => openUserCard(e, index));
    });
  } else {
    console.log("false");
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
  }
});
