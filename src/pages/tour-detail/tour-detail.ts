// for all modules, import tailwind and it's scss style
import "tailwindcss/tailwind.css";
import "./tour-detail.scss";
import ejs from "ejs/ejs.min.js";
import $ from "jquery";

import data from "../../views/object";

// let html = new ejs({url: '../../views/tour_template'}).render(data)
let html = ejs.renderFile("../../views/tour_template.ejs", { data: 1 });
// <%- include('components/header.ejs', {data: 'data'}); %>

$("#output").html(html);
