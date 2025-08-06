const apiUrl = "https://akabab.github.io/starwars-api/api/all.json";
let characters = [];

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    characters = data;
    console.log(characters);
    generateCharacter();
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

function generateCharacter() {
  const oldCard = document.querySelector(".card");
  if (oldCard) {
    oldCard.remove();
  }

  const character = characters[randomNum(characters.length)];

  const card = document.createElement("div");
  card.classList.add("card");
  document.body.append(card);

  const title = document.createElement("h2");
  card.classList.add("character-name");
  title.textContent = character.name;

  const image = document.createElement("img");
  image.classList.add("character-image");
  image.setAttribute("src", character.image);

  const height = document.createElement("p");
  height.classList.add("character-height");
  height.textContent = `Height: ${character.height}`;

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
