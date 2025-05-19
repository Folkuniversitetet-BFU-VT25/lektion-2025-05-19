/**
 * Prompt for user choice of weapon
 * SET variable to userChoice
 * Random computers weapon
 * Set variable to computerChoice
 * Determine winner by if-statements
 * Show winner
 */

const userChoice = prompt("Välj vapen: sten, sax eller påse"); // Möjliga värden: "sten", "sax" eller "påse"
//console.log(userChoice);

function selectComputerWeapon() {
  const randomNumber = Math.floor(Math.random() * 3); // Slumpa ett tal mellan 0 - 2 och avrunda neråt. Möjliga värden: 0, 1, 2
  const computerWeapons = ["sten", "sax", "påse"];

  const selectedComputerWeapon = computerWeapons[randomNumber];

  return selectedComputerWeapon;
}

function determineWinner() {
  if (userChoice === "sten") {
    if (computerChoice === "sten") {
      console.log("Oavgjort");
    } else if (computerChoice === "sax") {
      console.log("Jag vann!");
    } else if (computerChoice === "påse") {
      console.log("Datorn vann!");
    }
  } else if (userChoice === "sax") {
    if (computerChoice === "sax") {
      console.log("Oavgjort");
    } else if (computerChoice === "påse") {
      console.log("Jag vann!");
    } else if (computerChoice === "sten") {
      console.log("Datorn vann!");
    }
  } else if (userChoice === "påse") {
    if (computerChoice === "påse") {
      console.log("Oavgjort");
    } else if (computerChoice === "sten") {
      console.log("Jag vann!");
    } else if (computerChoice === "sax") {
      console.log("Datorn vann!");
    }
  }
}

let computerChoice = selectComputerWeapon();

console.log("Användarens val: ", userChoice);
console.log("Datorns val: ", computerChoice);

determineWinner();
