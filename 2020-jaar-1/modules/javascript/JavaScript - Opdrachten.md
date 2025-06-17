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

# JavaScript - Opdrachten

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

# Class

Wat is een class?

Wat gebeurt er wanneer een instantie van een class gemaakt wordt?

Wat is een constructor-methode?

## omschrijven

### Opdracht 1

Omschrijf onderstaande code. Schrijf enkel uitleg bij de regels met een comment. Het gaat altijd over de regel onder de comment.

```js
// 1.
class Student {
  // 2.
  voornaam;
  // 3.
  achternaam;

  // 4.
  volledigeNaam() {
    let volledigeNaam = "";

    if (this.voornaam) {
      volledigeNaam += this.voornaam;
    }

    if (this.achternaam) {
      if (volledigeNaam.length > 0) {
        volledigeNaam += " ";
      }
      volledigeNaam += this.achternaam;
    }

    return volledigeNaam;
  }
}

/*
 * 5.
 * Toekennen van ... variabele genaamd student.
 * De waarde is ...
 * Het type is ...
 */
let student = new Student();
student.voornaam = "John";
student.achternaam = "Duck";
console.log(student.volledigeNaam());

let studentEnkelVoornaam = new Student();
studentEnkelVoornaam.voornaam = "John";
console.log(studentEnkelVoornaam.volledigeNaam());

let studentEnkelAchternaam = new Student();
studentEnkelAchternaam.achternaam = "Duck";
console.log(studentEnkelAchternaam.volledigeNaam());
```

## Schrijven

### Opdracht 1

Begin vanaf de code uit het onderdeel 'Class - Omschrijven - Opdracht 1':

- Zorg ervoor dat er gebruik gemaakt wordt van een constructor-methode.
- Maak gebruik van parameters in de constructor-methode om de properties een waarde toe te kennen.
- Schrijf de code om zodat de properties gezet worden tijdens het aanmaken van de instantie
  (in plaats van de properties een waarde toe te kennen nadat er een instantie gemaakt is).

### Opdracht 2

Maak een class om onderstaande objecten op te bouwen.
Gebruik instanties van de class om de objecten aan de variabelen toe te kennen.

```js
const ferrari = {
  merk: "Ferrari",
  type: "F50",
};

const lamborghini = {
  merk: "Lamborghini",
  type: "Diablo",
};

const opel = {
  merk: "Opel",
  type: "Manta",
};
```

# Class - static

## Schrijven

Maak een class genaamd `Calculator`.

Voorzie vier `static methods`:

- som
- verschil
- delen
- vermenigvuldigen

Voorzie een `static property`:

- PI (met als waarde het nummer 3.141592)

Vertrek vanuit onderstaande code:

```js
class Calculator {}

console.log(Calculator.som(3, 3)); // Dit moet 6 loggen
console.log(Calculator.verschil(3, 2)); // Dit moet 1 loggen
console.log(Calculator.delen(6, 2)); // Dit moet 3 loggen
console.log(Calculator.vermenigvuldigen(3, 3)); // Dit moet 9 loggen
console.log(Calculator.PI); // Dit moet 3.141592 loggen
```

# Class - extends & super

## Schrijven

### Oefening 1

#### Deel 1

Refactor onderstaande code zodat er gebruik gemaakt wordt van classes.
Zorg voor een class genaamd 'Cursist' en een class genaamd 'Docent'.

```js
const cursist1 = {
  naam: "Yoeri",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist2 = {
  naam: "Marvi Hendriks",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist3 = {
  naam: "Simone :P",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist4 = {
  naam: "Domenico",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist5 = {
  naam: "Marco",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist6 = {
  naam: "Michelle",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist7 = {
  naam: "Romy",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist8 = {
  naam: "Jorg",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist9 = {
  naam: "Tony $erneel$",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist10 = {
  naam: "Ian",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist11 = {
  naam: "Angelique",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist12 = {
  naam: "Arne",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const docent1 = {
  naam: "Bart",
  motto: "25 is grappiger dan 24",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
  getMotto: function () {
    return `Mijn motto is: ${this.motto}`;
  },
};

const docent2 = {
  naam: "Mark",
  motto: "24 is grappiger dan 25",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
  getMotto: function () {
    return `Mijn motto is: ${this.motto}`;
  },
};
```

#### Deel 2

Ga verder op de oplossing uit deel 1, zorg voor een algemene class genaamd `Persoon`.

Zowel de class `Cursist` en `Docent` zullen overerven van `Persoon`.

Zet alle gemeenschappelijke properties en methodes in de `super class`.

#### Deel 3

Ga verder op de oplossing uit deel 2.

In plaats van aparte instanties van elke class, moet er gebruik gemaakt worden van een array waaraan alle instanties toegekend worden.
Gebruik iteratie om alle begroetingen van alle instanties te loggen.

Maak een aparte array voor cursisten en een aparte array voor docenten.

Tip:

```js
const cursisten = [];
cursisten.push(new Cursist("Bart")); // Dit voegt de instantie toe aan de array op index 0
cursisten.push(new Cursist("Bart")); // Dit voegt de instantie toe aan de array op index 1
// ...
```

#### Deel 4

Ga verder op deel 3.

Gegeven zijn onderstaande JavaScript arrays.

```js
const cursisten = [
  { naam: "Yoeri" },
  { naam: "Marvi Hendriks" },
  { naam: "Simone :P" },
  { naam: "Domenico" },
  { naam: "Marco" },
  { naam: "Michelle" },
  { naam: "Romy" },
  { naam: "Jorg" },
  { naam: "Tony $erneel$" },
  { naam: "Ian" },
  { naam: "Angelique" },
  { naam: "Arne" },
];

const docenten = [
  { naam: "Bart", motto: "25 is grappiger dan 24" },
  { naam: "Mark", motto: "24 is grappiger dan 25" },
];
```

Gebruik iteratie om instanties te maken voor cursisten.
Gebruik iteratie om instanties te maken voor docenten.

# Access modifiers - get & set

## Schrijven

### Opdracht 1

#### Deel 1

Maak een class genaamd `Lijst`.

Voeg aan deze class toe:
- private property `lijst`
- getter methode `lengte`:
  - Dit geeft de lengte van de private property `lijst` terug
- getter methode `lijst`:
  - Dit geeft de private property `lijst` terug
- setter methode `voegToe`
  - Dit voegt een item toe aan het einde van de private property `lijst`
- methode `aanpassen`, deze methode heeft één parameter genaamd `functie`:
  - ga er vanuit dat de functie die meegegeven wordt als paramter, altijd een waarde teruggeeft
  - gebruik iteratie om over elke waarde van de private property `lijst` te itereren, ken de waarde
  die de functie teruggeeft toe aan de index waarover geïterreerd wordt

#### Deel 2

Maak gebruik van de gemaakte class uit deel 1:
- initialiseer een variabele genaamd `nummers` met een instantie van de class `Lijst`
- gebruik de setter `voegToe` om verschillende nummers aan de lijst toe te voegen
  - De nummers om toe te voegen: 3, 1, 4, 1, 5, 9, 2
- maak een functie genaamd `maalTwee`:
  - de functie accepteert één parameter genaamd `item`
  - de functie geeft de parameter terug, vermenigvuldigd met twee
- roep de functie `aanpassen` aan, geef de functie `maalTwee` mee als parameter (zonder de functie aan te roepen)

```js
// Voeg de opdracht hier toe

// Onderstaande lus zal als resultaat hebben: 6, 2, 8, 2, 10, 18, 4
for (let i = 0; i < nummers.lengte; i++) {
  console.log(nummers.lijst[i]);
}
```

# Ingebouwde objecten

## Schrijven

### Opdracht 1

```js
const cursisten1 = [
  { naam: "Yoeri" },
  { naam: "Marvi Hendriks" },
  { naam: "Simone :P" },
  { naam: "Domenico" },
  { naam: "Marco" },
  { naam: "Michelle" },

];

const cursisten2 = [  
{ naam: "Romy" },
  { naam: "Jorg" },
  { naam: "Tony $erneel$" },
  { naam: "Ian" },
  { naam: "Angelique" },
  { naam: "Arne" }
]

// Gebruik een instantiemethode van Array om cursisten1 en cursisten2 samen te voegen,
// zodat er één array is, toegekend aan een nieuwe variabele genaamd 'cursisten', 
// waarin alle cursisten aanwezig zijn.

/* Hier de oplossing */

// Gebruik een instantiemethode van Array om een nieuwe array te maken
// waar elk element een string is. Bijvoorbeeld 'Cursist: Romy'.
// Ken de nieuwe array toe aan een variabele genaamd 'bewerkteCursisten'.

/* Hier de oplossing */

// Wijzig onderstaande code niet, dit moet uitprinten:
// Cursist: Yoeri
// Cursist: Marvi Hendriks
// ...
// Cursist: Arne
// 
// Waarbij de drie puntjes alle tussenliggende cursisten voorstellen.
bewerkteCursisten.forEach(cursist => console.log(cursist));
```