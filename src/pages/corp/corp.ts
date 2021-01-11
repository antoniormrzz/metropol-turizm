// for all modules, import tailwind and it's scss style
import "tailwindcss/tailwind.css";
import './corp.scss';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

var glideMulti1 = new Glide('.multi1', {
    type: 'carousel',
    autoplay: 3500,
    perView: 3
  });


glideMulti1.mount();
