<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# JavaScript - Examen

## Bart Duisters

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Inleiding

Naam: **_Marvi Hendriks_**

## Indienen en maken van de test

Indienen van de test wordt gedaan via git, op GitHub.

Om te beginnen kopieer je alles (JavaScript - Examen.md én de map `opdrachten` met alle inhoud) naar jouw eigen git repository.

De theoretische vragen staan in dit document. De praktische vragen zitten verwerkt in de opdrachten, terug te vinden in de map `opdrachten`. Schrijf de code in de al reeds bestaande JavaScript-bestanden `opdracht1.js`, `opdracht2.js` ...

# Theoretische vragen

Gegeven is onderstaande code:

```js
class Cursist {
  voornaam;
  achternaam;

  constructor(voornaam, achternaam) {
    this.voornaam = voornaam;
    this.achternaam = achternaam;
  }

  begroet() {
    return `Hallo, ik ben ${this.voornaam} ${this.achternaam}!`;
  }
}

const cursist = new Cursist("John", "Duck");
console.log(cursist.begroet());
```

Wat zijn `voornaam` en `achternaam` van de class genaamd Cursist? Plaats een [x] bij het correcte antwoord.

[] methodes
[x] properties/eigenschappen
[] getters
[] setters

Wat is het type dat wordt toegekend aan de variabele genaamd `cursist`?
Antwoord:
<br/>

**_een Object_**

Wanneer wordt een constructor-methode van een class uitgevoerd?
Antwoord:
<br/>

**_Deze wordt uitgevoerd op het moment dat er een instantie van een object wordt aangemaakt._**
