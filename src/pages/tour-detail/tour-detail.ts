// for all modules, import tailwind and it's scss style
import "tailwindcss/tailwind.css";
import "./tour-detail.scss";
import balkanTours from "../../constants/balkan-tours";

new Vue({
  el: "#app",
  data: {
    tourData: balkanTours,
    selectedTour: balkanTours[0],
    showDrawer: false,
  },
  computed: {
    cutText: function () {
      return this.selectedTour.days[0].text.substring(0, 116) + "...";
    },
    flight_infos: function () {
      return this.selectedTour.flight_infos ;
    },
  },
  methods: {
    selectTour: function (index) {
      this.selectedTour = this.tourData[index];
    },
    toggleDrawer: function () {
      this.showDrawer = !this.showDrawer;
    },
  },
});
