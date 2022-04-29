class GeneratePerson {
  static randomSymbols = "abcdefghijklmnopqrstuvwxyz";
  static userAmounts = 100;

  static generateNameLastName() {
    const nameLength = Math.ceil(Math.random() * 10);

    let personName = "";

    for (let i = 0; i < nameLength; i++) {
      personName += this.randomSymbols.charAt(
        Math.ceil(Math.random() * this.randomSymbols.length)
      );
    }

    return personName;
  }

  static generatePersons() {
    const persons = [];

    for (let i = 1; i < this.userAmounts + 1; i++) {
      persons.push({
        id: i,
        name: this.generateNameLastName(),
        lastName: this.generateNameLastName(),
      });
    }

    return persons;
  }
}

const generate = () => {
  return {
    persons: GeneratePerson.generatePersons(),
  };
};

module.exports = generate;
