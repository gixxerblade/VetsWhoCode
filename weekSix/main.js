var branch = document.getElementById("branch");
var message = document.getElementById("message");
branch.addEventListener("change", choices);

function choices() {
  let branchChoice = branch.value;
  if (branchChoice === "army") {
    document.getElementById("meme").src = "https://i.ibb.co/Zdp582K/army.jpg";
    message.textContent =
      '"There are only two kinds of people that understand Marines: Marines and the enemy. Everyone else has a second-hand opinion.—Gen. William Thornson, U.S. Army"';
  } else if (branchChoice === "af") {
    document.getElementById("meme").src = "https://i.ibb.co/r6WN40M/af.jpg";
    message.textContent = '"The Chair Force"';
  } else if (branchChoice === "navy") {
    document.getElementById("meme").src = "https://i.ibb.co/0sXtKYK/navy.jpg";
    message.textContent =
      '"A Marine walks into the head on a naval base. There\'s a sailor at the urinal. Marine walks up and starts taking a piss as the sailor finished up and goes to wash his hands. The Marine finishes and starts to walk out. The sailor barks at him "in the Navy, they taught us to wash our hands after we piss". The Marine just answers back "in the Marine Corps they taught us not to piss on our hands".';
  } else if (branchChoice === "cg") {
    document.getElementById("meme").src = "https://i.ibb.co/8d4xfbp/coast.jpg";
    message.textContent = '"Not real military."';
  } else {
    document.getElementById("meme").src = "https://i.ibb.co/7gq5yh0/marines.png";
    message.textContent =
      '"Be polite, be professional, but have a plan to kill everybody you meet."';
  }
}
/* https://i.ibb.co/r6WN40M/af.jpg
https://i.ibb.co/Zdp582K/army.jpg
https://i.ibb.co/8d4xfbp/coast.jpg
https://i.ibb.co/7gq5yh0/marines.png
https://i.ibb.co/0sXtKYK/navy.jpg */