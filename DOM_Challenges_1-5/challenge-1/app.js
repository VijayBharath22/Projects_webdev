let btn = document.getElementById("toggleButton");
let bulb = document.getElementById("bulb");
let pagestatus = document.getElementById("status");

btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    pagestatus.innerText = "status: Off";
    btn.innerText = "Turn On";
    bulb.classList.add("off");
  } else {
    btn.innerHTML = "Turn Off";
    document.body.classList.add("dark-mode");
    pagestatus.innerHTML = "status: On";
    bulb.classList.remove("off");
  }
});
