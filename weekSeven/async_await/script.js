const cardContainer = document.getElementById('card-container');
const container = document.getElementById("container");
/* const api_id = "95e7fbbf";
const app_key = "22f72d0ac69dde30ee5707e75f4e7b8d"; */
const q = "q=pickles";
const cors = "https://yacdn.org/proxy/";
const url = "http://www.recipepuppy.com/api/?";
const page = "&p=" + Math.floor(Math.random() * 10);

//Fetch the JSON object
const getRecipes = async () => {
  const response = await fetch(`${cors}${url}${q}${page}`);
  const data = await response.json();
  //const dataObj = JSON.parse(data);
  for (let i = 0; i < data.results.length; i++) {
    //console.log(data.results[i]);
    let title = document.createElement("h3");
    title.setAttribute("id", "title");
    title.appendChild(document.createTextNode(data.results[i]["title"]));
    //console.log(data.results[i]["title"]);

    let image = new Image();
    if (data.results[i]["thumbnail"] == "") {
      image.src = "images/pickle.jpg";
      image.setAttribute("id", "defaultImage");
    } else {
      image.src = data.results[i]["thumbnail"];
      image.setAttribute("id", "image");
    }

    //console.log(data.results[i]["thumbnail"]);

    let recipe = document.createElement("p");
    recipe.setAttribute("id", "recipe");
    let ingredients = data.results[i]["ingredients"].toUpperCase();
    recipe.appendChild(document.createTextNode(ingredients));
    console.log(data.results[i]["ingredients"]);

    let href = document.createElement("a");
    let link = data.results[i]["href"]
    href.setAttribute("href", `${link}`);
    href.appendChild(document.createTextNode(data.results[i]["href"]));
    console.log(data.results[i]["href"]);

    let cardElement = document.createElement("div");
    cardElement.setAttribute("id", "card");
    cardElement.appendChild(title);
    cardElement.appendChild(image);
    cardElement.appendChild(recipe);
    cardElement.appendChild(href);

    cardContainer.appendChild(cardElement);
  }
};

getRecipes().catch(error => {
  console.log("Error retrieving results");
  console.error(error);
});
