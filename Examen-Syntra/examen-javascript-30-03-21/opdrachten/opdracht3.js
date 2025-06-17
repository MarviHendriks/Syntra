/*
 * Maak gebruik van een class genaamd Dier om de gemeenschappelijke properties en methodes te definiëren.
 * Gebruik 'extends' en 'super' om door middel van inheritance/overerving de code zo optimaal mogelijk te maken.
 */
class Dier {
  naam;
  leeftijd;
  geluid;

  constructor(naam, leeftijd, geluid) {
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.geluid = geluid;
  }

  getLeeftijd() {
    return `${this.naam} is ${this.leeftijd} jaar`;
  }
}
class Hond extends Dier {
  constructor(naam, leeftijd, geluid) {
    super(naam, leeftijd, geluid);
  }
  blaf() {
    return `${this.naam} zegt ${this.geluid}`;
  }
}

class Kat extends Dier {
  aantalLevens;

  constructor(naam, leeftijd, geluid, aantalLevens) {
    super(naam, leeftijd, geluid);
    this.aantalLevens = aantalLevens;
  }

  miauw() {
    return `${this.naam} zegt ${this.geluid}`;
  }

  getAantalLevens() {
    return `${this.naam} heeft nog ${this.aantalLevens} levens`;
  }
}

const hond = new Hond("Samson", 13, "Woef Woef");
const kat = new Kat("Meowth", 52, "Miaaauw", 9);

console.log(hond.blaf());
console.log(hond.getLeeftijd());
console.log(kat.miauw());
console.log(kat.getLeeftijd());
console.log(kat.getAantalLevens());

/*
 * Let op: De code geeft al de correcte output, na het wijzigen van de code, moet het opnieuw deze output geven.
 * Om te weten of de opdracht gelukt is, kan de code uitgevoerd worden en zal dit in de console te zien zijn:
 * Samson zegt Woef Woef
 * Samson is 13 jaar
 * Meowth zegt Miaaauw
 * Meowth is 52 jaar
 * Meowth heeft nog 9 levens
 */
