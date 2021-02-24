// for all modules, import tailwind and it's scss style
import "tailwindcss/tailwind.css";
import "./balkan-tour-detail.scss";
import balkanTours from "../../constants/balkan-tours";
import $ from "jquery";
import modalHandler from "../../global/src/modal";

$(document).ready(() => {
  $(`.tour-card[data-key="0"]`).addClass("active-tour");

  modalHandler();
});

new Vue({
  el: "#app",
  data: {
    tourData: balkanTours,
    selectedTour: balkanTours[0],
    showDrawer: false,
    form: {
      name: '',
      email: '',
      tourName: '',
      message: ''
    }
  },
  computed: {},
  mounted: function () {
    $('#selectedTourName').val(this.selectedTour.mainTitle)
  },
  methods: {
    selectTour: function (index) {
      this.selectedTour = this.tourData[index];
      this.showDrawer = false;
      $(".tour-card").removeClass("active-tour");
      $(`.tour-card[data-key="${index}"]`).addClass("active-tour");
      $('#selectedTourName').val(this.selectedTour.mainTitle)
    },
    toggleDrawer: function () {
      this.showDrawer = !this.showDrawer;
    },
    submitForm: function () {
      console.log(this.form)
    }
  },
});
