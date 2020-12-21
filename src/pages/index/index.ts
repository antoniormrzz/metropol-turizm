// for all modules, import tailwind and it's scss style
import 'tailwindcss/tailwind.css';
import './index.scss';

import lottie from 'lottie-web';

let animation = lottie.loadAnimation({
  container: document.getElementById('plane-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/plane.json'
});
