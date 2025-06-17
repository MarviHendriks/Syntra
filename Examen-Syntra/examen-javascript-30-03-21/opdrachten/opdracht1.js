class Eend {
  /*
   * Voeg enkel in het codeblok van deze class code toe.
   * Zorg ervoor dat het mogelijk is om een instantie te maken van eend (zie regel 27).
   */
  naam;
  leeftijd;

  constructor(naam, leeftijd) {
    this.naam = naam;
    this.leeftijd = leeftijd;
  }
}

const eend1 = {
  naam: "Kwik",
  leeftijd: 13,
};

const eend2 = {
  naam: "Kwek",
  leeftijd: 13,
};

const eend3 = {
  naam: "Kwak",
  leeftijd: 13,
};

const eenden = [];
eenden.push(eend1);
eenden.push(eend2);
eenden.push(eend3);
eenden.push(new Eend("Kwok", 13));

eenden.forEach((eend) =>
  console.log(`Naam: ${eend.naam}, leeftijd: ${eend.leeftijd}`)
);
/*
 * Om te weten of de opdracht gelukt is, kan de code uitgevoerd worden en zal dit in de console te zien zijn:
 * Naam: Kwik, leeftijd: 13
 * Naam: Kwek, leeftijd: 13
 * Naam: Kwak, leeftijd: 13
 * Naam: Kwok, leeftijd: 13
 */
