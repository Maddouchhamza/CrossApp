document.getElementById("year").textContent = new Date().getFullYear();

// Slider auto (assets/1.jpg -> assets/10.jpg)
const slideA = document.getElementById("slideA");
const slideB = document.getElementById("slideB");

const sliderImages = Array.from({ length: 10 }, (_, idx) => `assets/${idx + 1}.jpg`);

let current = 0;
let showingA = true;

setInterval(() => {
  current = (current + 1) % sliderImages.length;
  const nextSrc = sliderImages[current];

  if (showingA) {
    slideB.src = nextSrc;
    slideB.classList.add("active");
    slideA.classList.remove("active");
  } else {
    slideA.src = nextSrc;
    slideA.classList.add("active");
    slideB.classList.remove("active");
  }

  showingA = !showingA;
}, 3200);
