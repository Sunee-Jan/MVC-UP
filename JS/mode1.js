import "../CSS/mode1.css";
import $ from "jquery";
let n = parseInt(localStorage.getItem("n"));
console.log(n);
$(".show").text(n || 100);
$("#sum").on("click", () => {
  n += 1;
  $(".show").text(n);
  localStorage.setItem("n", n);
});
$("#reduce").on("click", () => {
  n -= 1;
  $(".show").text(n);
  localStorage.setItem("n", n);
});
$("#multi").on("click", () => {
  n *= 2;
  $(".show").text(n);
  localStorage.setItem("n", n);
});
$("#divide").on("click", () => {
  n /= 2;
  $(".show").text(n);
  localStorage.setItem("n", n);
});
$("#zero").on("click", () => {
  n = 0;
  $(".show").text(n);
  localStorage.setItem("n", n);
});
