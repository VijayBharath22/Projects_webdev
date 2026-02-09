let quoteBtns = document.querySelector(".quote-container-buttons");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

//inital fetch of quote
const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
let data = getQuote();

async function getQuote() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerText = `"${data.data.content}"`;
    author.innerText = `-${data.data.author}`;
  } catch (error) {
    console.error(error);
  }
}

function copyQuote() {
  const text = `${quote.innerText} ${author.innerText}`;
  navigator.clipboard
    .writeText(text)
    .then(() => alert("Copied to clipboard!"))
    .catch(() => alert("Failed to copy"));
}

function downloadQuote() {
  const text = `${quote.innerText}\n${author.innerText}`;
  const blob = new Blob([text], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "quote.txt";

  link.click();
  URL.revokeObjectURL(link.href);
}

function shareQuote() {
  if (!navigator.share) {
    alert("Sharing not supported on this browser");
    return;
  }

  navigator.share({
    title: "Quote",
    text: `${quote.innerText} ${author.innerText}`,
  });
}

quoteBtns.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "add-quote-button":
      getQuote();
      break;
    case "copy-clipboard-button":
      copyQuote();
      break;
    case "export-button":
      downloadQuote();
      break;
    case "share-button":
      shareQuote();
      break;
  }
});
