// selecting elements
const customersBottomCardsWrap = document.getElementsByClassName(
  "customers-Bottom-Cards-Wrap"
)[0];

// object
const DataObject = [
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolorem hic, tempora provident optio consectetur non laudantium mollitia, similique assumenda adipisci in fugiat.",
    img: "./assets/customer-img-1.jpg",
    customersName: "Jane Lee",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi ullam delectus!",
    img: "./assets/customer-img-2.jpg",
    customersName: "Bob Smith",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolorem hic, tempora provident optio consectetur non laudantium mollitia,",
    img: "./assets/customer-img-3.jpg",
    customersName: "Ann Brown",
  },
];

// class
class ShowCustomersCard {
  constructor(text, img, customersName, indexNum) {
    this.text = text;
    this.img = img;
    this.customersName = customersName;
    this.indexNum = indexNum;
  }

  showData() {
    // create element to count change dynamiclly classes and icons
    let className;
    let classStar;
    // if else es6 type
    this.indexNum === 0
      ? ((className = "Top"), (classStar = `fa-solid fa-star-half-stroke`))
      : this.indexNum === 2
      ? ((className = "Bottom"), (classStar = `fa-regular fa-star`))
      : ((className = ""), (classStar = `fa-solid fa-star`));

    // creating elements
    const customersCard = document.createElement("div");
    customersCard.classList.add(`customers-Card`);
    customersCard.classList += ` ${className}`;
    // adding data dynamiclly
    customersCard.innerHTML = `
    <div class="customers-Text-Wrap">
       <i id="customers-Card-Text-Icon" class="fas fa-quote-left"></i>
       <h1 class="customers-Card-Text-2">${this.text}</h1>
    </div>
    <div class="customers-Rate-Img-Name-Wrap">
    <div class="customers-Rate-Wrap">
      <i id="customers-Icon-Star" class="fa-solid fa-star"></i>
      <i id="customers-Icon-Star" class="fa-solid fa-star"></i>
      <i id="customers-Icon-Star" class="fa-solid fa-star"></i>
      <i id="customers-Icon-Star" class="fa-solid fa-star"></i>
      <i id="customers-Icon-Star" class="${classStar}"></i>
    </div>
  <img
      class="customers-Card-Profile-Img"
      src="${this.img}"
      alt=""
    />
      <h2 class="customers-Card-Name">${this.customersName}</h2>
  </div>`;

    // appending data
    customersBottomCardsWrap.appendChild(customersCard);
  }
}

//functions // events
DataObject.forEach((customersData, indexNum) => {
  let newShowCustomersCard = new ShowCustomersCard(
    customersData.text,
    customersData.img,
    customersData.customersName,
    indexNum
  );
  newShowCustomersCard.showData();
});
