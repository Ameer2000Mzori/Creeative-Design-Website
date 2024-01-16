// selecting elements
const teamBottomCardsWrap = document.getElementsByClassName(
  "team-Bottom-Cards-Wrap"
)[0];

// global varibales
const teamDataObj = {
  images: [
    "./assets/team-member-1.jpg",
    "./assets/team-member-2.jpg",
    "./assets/team-member-3.jpg",
  ],
  names: ["Nick Smith", "Bob Brown", "John Doe"],
  role: ["Designer", "Designer", "Developer"],
  tool: [
    ["Ps", "Figma", "HTML5", "CSS3", "Ai"],
    ["Ae", "Pr", "HTML5", "CSS3", "Inkscape"],
    ["JavaScript", "ReactJS", "NodeJS", "MongoDB", "Python"],
  ],

  aboutText: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?",
  ],
};

// Class
class ShowTeamData {
  constructor(images, names, role, tool, aboutText) {
    this.images = images;
    this.names = names;
    this.role = role;
    this.tool = tool;
    this.aboutText = aboutText;
  }

  showData() {
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-Card");

    teamCard.innerHTML = `
    <div class="team-Card">
    <!--Page Lader 1-->
    <div class="team-Card-Page-1">
      <!--  -->
      <div class="team-Card-Page-1-Img-Wrap">
        <img
          class="team-Card-Img"
          src="./assets/team-member-1.jpg"
          alt=""
        />
      </div>

      <div class="team-Card-Page-1-Name-Wrap">
        <h1 class="team-Card-Name">
          Nick Smith
          <span class="team-Card-Role">(Designer)</span>
        </h1>
      </div>

      <div class="team-Card-Lang-Wrap">
        <p class="team-Card-Lnag-Text">Ps</p>
        <p class="team-Card-Lnag-Text">Figma</p>
        <p class="team-Card-Lnag-Text">HTML5</p>
        <p class="team-Card-Lnag-Text">CSS3</p>
        <p class="team-Card-Lnag-Text">Ai</p>
      </div>

      <div class="team-Card-Page-1-Btn-Wrap">
        <button class="team-Card-Page-1-Btn">Projects</button>
      </div>
    </div>
    <!-- Page Lader 2 -->
    <div class="team-Card-Btn">
      <div class="team-Card-Btn-Line"></div>
    </div>

    <!-- Page Lader 3 -->
    <div class="team-Card-Page-2">
      <h1 class="team-card-Page-2-Text-1">About me</h1>
      <p class="team-card-Page-2-Text-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        magni blanditiis voluptatem officiis et eligendi ut impedit quas
        nemo neque nihil laboriosam, modi deleniti aliquam voluptatibus
        voluptate voluptates consectetur facilis!
      </p>
    </div>
  </div>`;
  }
}

// function // event
for (let key of Object.values(teamDataObj)) {
  key.forEach((userData, index) => {
    // console.log(userData);
    let newShowTeamData = new ShowTeamData(userData);
    newShowTeamData.showData();
  });
}
