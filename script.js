function startGame() {
  const playGame = prompt("Do you want to play a game?");
  
  if (playGame.toLocaleLowerCase () === "yes") {
    var name = prompt("What is your name?");
  } else {
    console.log("bye");
  }
}

startGame();

function getDamage() {
  return Math.floor((Math.random() * 5+1));
}

function startCombat() {
  let user = {name, total:0, health:40};
  let grant = {name:"grant", total:0, health:10};

  const shouldAttack = prompt("Do you want to attack or quit?");

  if (shouldAttack.toLocaleLowerCase () === "attack") {
    while (user.total < 3) {
      while (user.health > 0 && grant.health > 0) {
        user.health -= getDamage();
        grant.health -= getDamage();

        console.log(name + " has " + user.health + " health points left.");
        console.log(grant.name + " has " + grant.health + " health points left.");
      }

      if (grant.health < user.health) {
        console.log("one win for " + name);
        user.total++;
        grant.health = 10;
      } else {
        console.log("one win for " + grant.name);
        grant.total++;
        grant.health = 10;
      }
    }

    if (user.total === 3) {
      console.log(name + " wins")
    } else if (user.health === 0) {
      console.log(grant.name + " wins")
    }
  } else {
    console.log('bye');
  }
}

startCombat();