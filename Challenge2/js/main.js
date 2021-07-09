"use strict";

import { Tabbar } from "./modules/tabbar.js";

window.addEventListener("load", () => {
  const tabbar = new Tabbar({
    el: document.querySelector(".container__header"),
    activeIndex: 1,
  });
  tabbar.init();
});