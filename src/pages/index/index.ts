// for all modules, import tailwind and it's scss style
import "tailwindcss/tailwind.css";
import "./index.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import lottie from "lottie-web";
import Splide from "@splidejs/splide";
import menuHandler from "../../global/src/menu";

menuHandler();

new Splide("#splide", { type: "loop", autoplay: true }).mount();

let animation = lottie.loadAnimation({
  container: document.getElementById("plane-container"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/animations/plane.json",
});

// selectBox change event
const $selectBox = document.getElementById("selectBox");
const $image = document.getElementById("circled-icon");

$selectBox.addEventListener("change", (e) => {
  const source = e.target.value;
  $image.src = `assets/img/${source}circled.png`;
});
