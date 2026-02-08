let toggleBtn = document.querySelector(".toggle-btn");
let panel = document.querySelector(".panel");
let closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", (e) => {
  panel.classList.toggle("active");
});

closeBtn.addEventListener("click", () => panel.classList.remove("active"));

panel.addEventListener("click", (e) => {
  let item = e.target;
  if (e.target.classList == "menu-item")
    alert(`You opened ${item.textContent} `);
});
