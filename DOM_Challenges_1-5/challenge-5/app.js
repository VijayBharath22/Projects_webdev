/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

//initializing all images :

let img = [];
let imagesDiv = document.querySelector("#carouselTrack");
function createImg() {
  for (let item of images) {
    let image = document.createElement("img");
    image.src = item.url;
    image.classList.add("carousel-slide");
    img.push(image);
    imagesDiv.append(image);
  }
}
createImg();

//creating carousel indicators :

let carouselNav = document.querySelector("#carouselNav");
function createCarouselIndicators() {
  for (let item of images) {
    let div = document.createElement("div");
    div.classList.add("carousel-indicator");
    carouselNav.append(div);
  }
}
createCarouselIndicators();

let currentIndex = 0;
let size = img.length;

let prevButton = document.querySelector("#prevButton");
let nextButton = document.querySelector("#nextButton");
let caption = document.querySelector("#caption");
let captionContent = images[0].caption;
caption.textContent = captionContent;

function carouselDisplay() {
  captionContent = images[currentIndex].caption;
  caption.textContent = captionContent;

  let transform = -(currentIndex * 100);
  imagesDiv.style.transform = `translateX(${transform}%)`;
}

//next and prev button eventlisteners:

nextButton.addEventListener("click", () => {
  if (currentIndex == images.length - 1) currentIndex = 0;
  else currentIndex++;
  carouselDisplay();
});

prevButton.addEventListener("click", () => {
  if (currentIndex == 0) currentIndex = images.length - 1;
  else currentIndex--;
  carouselDisplay();
});

// eventlistener for carousel indicators:

carouselNav.addEventListener("click", (e) => {
  currentIndex = 0;
  for (let item of carouselNav.children) {
    if (e.target == item) {
      carouselDisplay();
      item.classList.add("active");
    } else {
      currentIndex++;
      item.classList.remove("active");
    }
  }
});

//eventlistener for autoplay button

let autoPlayBtn = document.querySelector("#autoPlayButton");
let autoplaySpan = document.querySelector("#timerDisplay");
let seconds = 3;

function autoPlayMessageDisplay() {
  autoplaySpan.textContent = ` next image at ${seconds}`;
  seconds--;
}

autoPlayBtn.addEventListener("click", () => {
  if (autoplaySpan.textContent == "") {
    autoPlayMessageDisplay();
    setInterval(() => {
      if (seconds == 0) {
        if (currentIndex == images.length - 1) currentIndex = 0;
        else currentIndex++;
        carouselDisplay();
        seconds = 3;
        autoPlayMessageDisplay();
      } else autoPlayMessageDisplay();
    }, 1000);
  } else {
    clearInterval()
  }
});
