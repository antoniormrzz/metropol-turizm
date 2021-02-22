// for all modules, import tailwind and it's scss style
import "tailwindcss/tailwind.css";
import './dmc-tour-detail.scss';

import dmcTours from "../../constants/dmc-tours";
import $ from "jquery";

$(document).ready(() => {
  $(`.tour-card[data-key="0"]`).addClass("active-tour");
});

new Vue({
  el: "#app",
  data: {
    tourData: dmcTours,
    selectedTour: dmcTours[0],
    showDrawer: false,
  },
  computed: {
    
  },
  methods: {
    selectTour: function (index) {
      this.selectedTour = this.tourData[index];
      this.showDrawer = false;
      $(".tour-card").removeClass("active-tour");
      $(`.tour-card[data-key="${index}"]`).addClass("active-tour");
    },
    toggleDrawer: function () {
      this.showDrawer = !this.showDrawer;
    },
  },
});
