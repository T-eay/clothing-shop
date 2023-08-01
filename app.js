const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SHOES",
    price: 25,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "skyblue",
        img: "./img/nikedunk.avif",
      },
    ],
  },
  {
    id: 2,
    title: "HOODIES",
    price: 15,
    colors: [
      {
        code: "red",
        img: "./img/hoodie03.jpg",
      },
      {
        code: "green",
        img: "./img/hoodie8.webp",
      },
      {
        code: "bluesky",
        img:"./img/hoodie6.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    price: 20,
    colors: [
      {
        code: "lightgray",
        img: "./img/jaket3.jfif",
      },
      {
        code: "black",
        img: "./img/jacket-removebg-preview.png",
      },
    ],
  },
  {
    id: 4,
    title: "JOGGER",
    price: 10,
    colors: [
      {
        code: "black",
        img: "./img/jogger3",
      },
      {
        code: "lightgray",
        img: "./img/jogger1.jpg",
      },
      {
        code:"pink",
        img: "./img/shipping icon.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "T-shirts",
    price: 10,
    colors: [
      {
        code: "grey",
        img: "./img/t-shirt.jfif",
      },
      {
        code: "black",
        img: "./img/t-shirt1.jfif",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});