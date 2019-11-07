//const container = document.getElementById('container');
const api_id = '95e7fbbf';
const app_key = '22f72d0ac69dde30ee5707e75f4e7b8d';
const q = 'pickles';
const url = 'https://api.edamam.com/search?q=${pickles}&app_id=${api_id}&app_key=${app_key}';

//Fetch the JSON object
const getRecipes = async () =>{
  const response = await fetch(url);
  const data = await response.json();
  for(let i = 0; i < data.hits.length; i++){
    console.log(data.hits[i]);
  }

}

getRecipes();
