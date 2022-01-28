import "../CSS/mode2.css";
import $ from "jquery";
$(".mode2").on("click", "div[class^=tab]", (e) => {
  const $tab = $(e.currentTarget);
  $tab.addClass("style").siblings().removeClass("style");
  let index = $(e.currentTarget).index() + 1;
  $(`div[class^=content${index}]`)
    .removeClass("active")
    .siblings("div[class^=content]")
    .addClass("active");
});
$(".mode2").children().eq(0).trigger("click");
