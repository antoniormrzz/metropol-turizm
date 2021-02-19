// for all modules, import tailwind and it's scss style
import "tailwindcss/tailwind.css";
import "./balkan-tour-detail.scss";
import balkanTours from "../../constants/balkan-tours";
import $ from "jquery";

$(document).ready(() => {
  $(`.tour-card[data-key="0"]`).addClass("active-tour");
});

new Vue({
  el: "#app",
  data: {
    tourData: balkanTours,
    selectedTour: balkanTours[0],
    showDrawer: false,
  },
  computed: {
    cutText: function () {
      return this.selectedTour.tldr?.substring(0, 116) + "...";
    },
    flight_infos: function () {
      return this.selectedTour.flight_infos;
    },
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
