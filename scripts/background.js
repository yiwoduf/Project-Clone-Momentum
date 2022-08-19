const images = ["0.jpg","1.jpg","2.jpg"];

const chosenIamge = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./src/img/${chosenIamge}`;

// console.log(bgImage);

const body = document.body.appendChild(bgImage); // inserts element to body of html