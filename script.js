const emberek = ["Kata", "Sára", "Peti", "Sanyi"];
const container = document.querySelector("#container");

for (const ember of emberek) {
  console.log(ember);

  const ujDiv = document.createElement("div");
  ujDiv.innerText = ember;
  container.appendChild(ujDiv);
}
