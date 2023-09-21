const images = ['0.jpeg', '1.jpeg', '2.jpeg'];
const randomImg_src = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");

img.src = `images/${randomImg_src}`;
document.body.append(img);

// console.log(Math.floor(Math.random() * images.length));