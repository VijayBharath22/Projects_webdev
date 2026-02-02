const formElements = document.querySelector(".form-container");
const nameDisplay = document.querySelector("#nameDisplay");
const jobDisplay = document.querySelector("#jobDisplay");
const ageDisplay = document.querySelector("#ageDisplay");
const bioDisplay = document.querySelector("#bioDisplay");

formElements.addEventListener("input", (e) => {
  const rawValue = e.target.value;
  const cleanValue = rawValue.trim();
  const displayText = cleanValue === "" ? "Not provided" : cleanValue;

  switch (e.target.id) {
    case "nameInput":
      nameDisplay.innerText = displayText;
      break;
    case "jobInput":
      jobDisplay.innerText = displayText;
      break;
    case "ageInput":
      ageDisplay.innerText = displayText;
      break;
    case "bioInput":
      bioDisplay.innerText = displayText;
      break;
  }
});
