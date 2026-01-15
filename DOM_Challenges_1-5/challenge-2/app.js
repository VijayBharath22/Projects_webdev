let btns = document.querySelector(".color-buttons");
console.log(btns);
let changebtn = document.getElementById("mainHeading");

btns.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    changebtn.style.color = e.target.innerHTML;
  }
});
