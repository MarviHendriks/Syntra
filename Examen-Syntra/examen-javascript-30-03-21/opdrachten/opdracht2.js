class Dier {
  // Maak van id een private property
  _id;
  /*
   * Maak van naam een private property,
   * voorzie een getter en een setter,
   * zowel de getter als de setter krijgen de naam 'naam'
   */
  _naam;
  leeftijd;
  geslacht;

  constructor(id, naam, leeftijd, geslacht) {
    this._id = id;
    this._naam = naam;
    this.leeftijd = leeftijd;
    this.geslacht = geslacht;
  }

  get naam() {
    return this._naam;
  }

  set naam(naam) {
    this._naam = naam;
  }
  voorstellen() {
    return `Hallo, ik ben ${this._naam}, van het ${this.geslacht} geslacht en ben ${this.leeftijd} jaar`;
  }
}

const hond = new Dier(101, "Somsan", 12, "mannelijk");
const kat = new Dier(101, "Bobientje", 12, "vrouwelijk");

console.log(hond.voorstellen());
hond.naam = "Samson";
console.log("Na aanpassing: ", hond.voorstellen());
console.log(kat.voorstellen());

/*
 * Let op: De code geeft al de correcte output, na het wijzigen van de code, moet het opnieuw deze output geven.
 * Om te weten of de opdracht gelukt is, kan de code uitgevoerd worden en zal dit in de console te zien zijn:
 * Hallo, ik ben Somsan, van het mannelijk geslacht en ben 12 jaar
 * Na aanpassing:  Hallo, ik ben Samson, van het mannelijk geslacht en ben 12 jaar
 * Hallo, ik ben Bobientje, van het vrouwelijk geslacht en ben 12 jaar
 */
