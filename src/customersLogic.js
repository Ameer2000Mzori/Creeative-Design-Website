// selecting elements
const customersBottomCardsWrap = document.getElementsByClassName(
  "customers-Bottom-Cards-Wrap"
)[0];

// object
const DataObject = [
  {
    Deco: "fas fa-quote-left",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolorem hic, tempora provident optio consectetur non laudantium mollitia, similique assumenda adipisci in fugiat.",
    img: "./assets/customer-img-1.jpg",
    customersName: "Jane Lee",
  },
  {
    Deco: "fas fa-quote-left",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi ullam delectus!",
    img: "./assets/customer-img-2.jpg",
    customersName: "Bob Smith",
  },
  {
    Deco: "fas fa-quote-left",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolorem hic, tempora provident optio consectetur non laudantium mollitia,",
    img: "./assets/customer-img-3.jpg",
    customersName: "Ann Brown",
  },
];

// class
class ShowCustomersCard {
  construction(indexNum, Deco, text, img, customersName) {
    this.indexNum = indexNum;
    this.Deco = Deco;
    this.text = text;
    this.img = img;
    this.customersName = customersName;
  }
  showData() {
    // creating elements
    const customersCard = document.createElement("div");
    customersCard.classList.add("customers-Card");

    // adding data dynamiclly
    customersCard.innerHTML = `
    <div class="customers-Text-Wrap">
    <i id="customers-Card-Text-Icon" class="fas fa-quote-left"></i>
    <h1 class="customers-Card-Text-2">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
      dolorem hic, tempora provident optio consectetur non
      laudantium mollitia, similique assumenda adipisci in fugiat.
    </h1>
  </div>
  <div class="customers-Rate-Img-Name-Wrap">
    <div class="customers-Rate-Wrap">
      <i id="customers-Icon-Star" class="fa-solid fa-star"></i>
      <i id="customers-Icon-Star" class="fa-solid fa-star"></i>
      <i id="customers-Icon-Star" class="fa-solid fa-star"></i>
      <i id="customers-Icon-Star" class="fa-solid fa-star"></i>
      <i id="customers-Icon-Star" class="fa-regular fa-star"></i>
    </div>
    <img
      class="customers-Card-Profile-Img"
      src="./assets/customer-img-1.jpg"
      alt=""
    />
    <h2 class="customers-Card-Name">Jane Lee</h2>
  </div>`;

    // appending data
    customersBottomCardsWrap.appendChild(customersCard);
  }
}

//functions // events
