const pickleObj = {
  imageUrl: [
    "https://api.codetabs.com/v1/proxy?quest=https://i.ibb.co/4pbb5SX/Pickle.jpg",
    "https://api.codetabs.com/v1/proxy?quest=https://i.ibb.co/PzTG5bR/Bread-Butter-Chips.jpg",
    "https://api.codetabs.com/v1/proxy?quest=https://i.ibb.co/r5KpLk1/oldfashioned-chow-chow-relish.jpg",
    "https://api.codetabs.com/v1/proxy?quest=https://i.ibb.co/WfWnRPR/angrypickle.jpg",
    "https://api.codetabs.com/v1/proxy?quest=https://i.ibb.co/s13RgLX/Shiozuke-III.jpg",
    "https://api.codetabs.com/v1/proxy?quest=https://i.ibb.co/THHs3ny/gherkinsjpg.jpg",
    "https://api.codetabs.com/v1/proxy?quest=https://i.ibb.co/zNjSwtf/easy-pickled-peppers-recipe-1.jpg"
  ],


  name: [
    "Pickled Cucumber",
    "Bread & Butter Pickle",
    "Chow Chow",
    "Dill Pickle",
    "Tsukemono",
    "Gherkin Pickles",
    "Pickled Peppers"
  ],

  description: [
    "A pickled cucumber (commonly known as a pickle in the United States and Canada and a gherkin in Britain, Ireland, Australia, South Africa and New Zealand) is a cucumber that has been pickled in a brine, vinegar, or other solution and left to ferment for a period of time, by either immersing the cucumbers in an acidic solution or through souring by lacto-fermentation.",
    "A type of sweet pickle with a sweet-and-tangy profile. Cut into thin slices (often with waffle-cut edges) for easy addition to sandwiches, burgers and potato salad, the cucumbers are pickled with onions and chopped bell peppers. They have a distinct, slightly tangy taste.",
    'Chow-chow is a North American pickled relish. Its ingredients vary considerably, depending on whether it is the "Northern" or "Southern" variety. The former is made from a combination of vegetables, mainly green and red tomatoes, onions, carrots, beans of various types, asparagus, cauliflower and peas.',
    "The dill pickle is the most popular variety of cucumber pickle in the U.S. Originally made with fresh dill weed, today dill oil is added by commercial manufacturers (artisan producers will use the fresh herb and often pickling spices—mustard, pepper, garlic, etc.—as well).",
    "Literally, “pickled things,” tsukemono (soo-keh-MOE-no) is an assortment of vegetables pickled in a soy or salt brine, but can also include foods pickled in miso, rice bran, saké etc. Cabbage, carrots, cucumbers, daikon, plums, radish and turnips are among the fruits and vegetables pickled.",
    "A gherkin is a variety of cucumber:the West Indian or burr gherkin (Cucumis anguria), which produces a somewhat smaller fruit than the garden cucumber (Cucumis sativus). Gherkins are cooked, eaten raw, or used as pickles. Gherkins are usually picked when 1 to 3 in in length and pickled in jars or cans with vinegar ",
    "Made in the same way as cucumber pickles, there are more than fifteen varieties of pickle peppers available, ranging from mild to hot, hot, hot. These are some of the most popular pickled peppers:\nJalapeno - Thanks to the growing interest in Mexican and southwestern foods, this type of pickled pepper is hot - literally. Fiery jalapenos are packed in brine and come whole or in rings.\nBanana Peppers - Long, shiny, yellow peppers that come both hot and sweet , and are banana-shaped. They're available whole or in rings. Cherry Peppers - Shaped like cherries, these pickled peppers are available in red or green and both hot or sweet versions. They're most popular whole or in rings.\nPepperoncini - These pickled peppers are available whole or as green Greek or Italian. Mildly hot, these peppers are popular in antipasto or Mediterranean-style salads."
  ]
};
let container = document.getElementById('container');
let images = [];
let name = [];
let desc = [];
async function fetchImages() {
    for (const i of pickleObj.imageUrl){
        await images[i];
        images[i] = new Image();
        images[i].src = i;
        let imgEl  = document.createElement('img');
        imgEl.setAttribute('id', 'i')
        container.appendChild(images[i]);
    }
}

let addName = () =>{
    for (const i of pickleObj.name){
        let h2 = document.createElement('h2');
        let h2Content = document.createTextNode(i);
        h2.appendChild(h2Content);
        let img = document.querySelector('img');
        container.insertBefore(h2, img);
    }

}
let addDesc = () =>{
    for (const i of pickleObj.description){
        let pEl = document.createElement('p');
        let pContent = document.createTextNode(i);
        pEl.appendChild(pContent);
        let img = document.querySelector('img');
        container.insertBefore(pEl, img);

    }
}
    fetchImages();
    addName();
    addDesc();

    
    