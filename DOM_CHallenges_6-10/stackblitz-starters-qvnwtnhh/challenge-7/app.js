const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const item = e.target.closest(".accordion-item");
  if (!item) return; // click outside an accordion item → ignore

  for (const child of accordion.children) {
    if (child === item) {
      child.classList.toggle("active");
    } else {
      child.classList.remove("active");
    }
  }
});
