"use strict";

import { Navbar } from "./modules/navbar.js";

window.addEventListener("load", () => {
  const navbar = new Navbar({
    el: document.querySelector(".navbar"),
    activeIndex: 2,
  });
  navbar.init();
});
