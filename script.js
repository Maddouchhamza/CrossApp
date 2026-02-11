document.getElementById("year").textContent = new Date().getFullYear();

// Slider auto (assets/1.jpg -> assets/10.jpg) + dots
const slideA = document.getElementById("slideA");
const slideB = document.getElementById("slideB");

const sliderImages = Array.from({ length: 10 }, (_, idx) => `assets/${idx + 1}.jpg`);
const dots = Array.from({ length: 10 }, (_, i) => document.getElementById(`dot${i + 1}`));

let current = 0;
let showingA = true;

function setActiveDot(index) {
  dots.forEach((d, i) => d && d.classList.toggle("active", i === index));
}

setInterval(() => {
  current = (current + 1) % sliderImages.length;
  const nextSrc = sliderImages[current];

  if (showingA) {
    slideB.src = nextSrc;
    slideB.classList.add("active");
    slideA.classList.remove("active");
  } else {
    s
