// selecting elements
const teamBottomCardsWrap = document.getElementsByClassName(
  "team-Bottom-Cards-Wrap"
)[0];

// join method for our tools arry

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
    // creating element dynamiclly
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-Card");

    // using .map for looping over the data of this.tool to create same amount of P elements
    const langTexts = this.tool
      .map((tool) => `<p class="team-Card-Lnag-Text">${tool}</p>`)
      .join("");

    // inserting the cards data
    teamCard.innerHTML = `

    <!--Page Lader 1-->
    <div class="team-Card-Page-1">
      <!--  -->
      <div class="team-Card-Page-1-Img-Wrap">
        <img
          class="team-Card-Img"
          src="${this.images}"
          alt=""
        />
      </div>

      <div class="team-Card-Page-1-Name-Wrap">
        <h1 class="team-Card-Name">
         ${this.names}
          <span class="team-Card-Role">(${this.role})</span>
        </h1>
      </div>

      <div class="team-Card-Lang-Wrap">
      ${langTexts}
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
       ${this.aboutText}
      </p>
    </div>
`;
    // appending
    teamBottomCardsWrap.appendChild(teamCard);
  }
}

// for loop of each of data in our object of arrays
let { images, names, role, tool, aboutText } = teamDataObj;
for (let i = 0; i < images.length; i++) {
  let newShowTeamData = new ShowTeamData(
    images[i],
    names[i],
    role[i],
    tool[i],
    aboutText[i]
  );
  newShowTeamData.showData();
}
