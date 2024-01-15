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
];

// class
class ShowCustomersCard {
  construction(Deco, text, img, customersName) {
    this.Deco = Deco;
    this.text = text;
    this.img = img;
    this.customersName = customersName;
  }
}

// functions

//events
