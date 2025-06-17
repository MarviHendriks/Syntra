const studenten = [
  "Yoeri",
  "Marvi Hendriks",
  "Simone :P",
  "Domenico",
  "Marco",
  "Michelle",
  "Romy",
  "Jorg",
  "Tony $erneel$",
  "Ian",
  "Angelique",
  "Arne",
];

function isNaamAanwezig(naam) {
  /*
   * Wijzig enkel de code in dit codeblok.
   * Maak gebruik van de ingebouwde Array-methode 'some' om de for-loop te vervangen.
   * Documentatie: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
   */
  return studenten.some((e) => e === naam);
}

function printAanwezig(naam) {
  console.log(`${naam} is ${isNaamAanwezig(naam) ? "" : "niet "}aanwezig.`);
}

printAanwezig("Ian");
printAanwezig("Romy");
printAanwezig("Bart");

/*
 * Let op: De code geeft al de correcte output, na het wijzigen van de code, moet het opnieuw deze output geven.
 * Om te weten of de opdracht gelukt is, kan de code uitgevoerd worden en zal dit in de console te zien zijn:
 * Ian is aanwezig.
 * Romy is aanwezig.
 * Bart is niet aanwezig.
 */
