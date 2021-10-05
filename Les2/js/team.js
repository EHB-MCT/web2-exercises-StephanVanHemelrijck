class Team {
  constructor(teamname, trainer, roster) {
    console.log("Constructed");
    this.teamname = "Whatever";
    this.trainer = "Ash";
    this.roster = [
      "Charmander",
      "Ivysaur",
      "Kakuna",
      "Blastoise",
      "Nidorina",
      "Pikachu",
    ];
  }
  describe() {
    let htmlString = `This is team "${this.teamname}" trained by ${
      this.trainer
    }. With a current roster of the following 6 pokemons: ${[...this.roster]}`;

    return htmlString;
  }
  printOnScreen() {
    console.log("Printing");
    console.log(this.describe());
    // document.getElementById("container-box").innerHTML = this.htmlString;
  }
}

let team = new Team();
team.describe();
team.printOnScreen();
