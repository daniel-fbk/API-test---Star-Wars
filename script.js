const apiUrl = "https://akabab.github.io/starwars-api/api/all.json";
let characters = [];

fetch(apiUrl)
  // Check if the response is successful
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })

  // Handles the JSON data from the API
  .then((data) => {
    characters = data;
    // Generates a card on page load
    generateCharacter();
  })

  // Handles any errors that may occur
  .catch((error) => {
    console.error("Error:", error);
  });

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

function generateCharacter() {
  // Remove a card if it exists, to keep one card at the time on the page
  const oldCard = document.querySelector(".card");
  if (oldCard) {
    oldCard.remove();
  }

  // Sets character to a random character from the JSON Data
  const character = characters[randomNum(characters.length)];

  const card = document.createElement("div");
  card.classList.add("card");
  document.body.append(card);

  const title = document.createElement("h2");
  title.classList.add("character-name");
  title.textContent = character.name;

  const image = document.createElement("img");
  image.classList.add("character-image");
  image.setAttribute("src", character.image);

  const height = document.createElement("p");
  height.classList.add("character-height");
  height.textContent = `Height: ${character.height}m`;

  const homeWorld = document.createElement("p");
  homeWorld.classList.add("character-home-world");
  homeWorld.textContent = `Home world: ${character.homeworld}`;

  const species = document.createElement("p");
  species.classList.add("character-species");
  species.textContent = `Species: ${character.species}`;

  affiliationsStr = character.affiliations.join(", ");
  const affiliations = document.createElement("p");
  affiliations.classList.add("character-affiliations");
  affiliations.textContent = `Affiliations: ${affiliationsStr}`;

  card.append(title, image, height, homeWorld, species, affiliations);
}
