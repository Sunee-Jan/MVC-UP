import "../CSS/mode4.css";
import $ from "jquery";
$(".colorful")
  .on("mouseenter", () => {
    $(".colorful").addClass("active");
  })
  .on("mouseleave", () => {
    $(".colorful").removeClass("active");
  });
