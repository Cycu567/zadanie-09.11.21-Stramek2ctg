1.
z let:
let obj = {};

z const:
const obj: Obj | {};

2.
boolean-mozna okreslic wartosc true oraz false
null-pusta wartosc
undefined-nieokreslona wartosc 
string-dowolny ciag znakow

3.

isAuthorized = Boolean(false)
isClicked = Boolean(true)
if(isAuthorized && isClicked ==(true)) {
    console.log('Operacja udana!');
} else {
    console.log('Operacja nieudana');
}

4. 

isAuthorized = Boolean(true)
isClicked = Boolean(true)
if(isAuthorized ^ isClicked ==(true)) {
    console.log('Operacja udana!');
} else {
    console.log('Operacja nieudana');
}

5.
const x = 'To jest test'
console.log(x.charAt(4));

6.
a)
var s1="Cześć, ";
var s2="co u Ciebie ";
var s3="slychac.";
var text=s1.concat(s2,s3);
console.log(text)

b)
var s1="co tam ";
var s2="slychac.";
    console.log(s1+s2);

7.
var myarr = 'to, jest, test'.split(", ");
let res = myarr.filter(t => ! t.startsWith('t'));
console.log(res);

8.

9 Klasy w Javascript zostały wprowadzone w ECMAScript 2015 jako lukier składniowy (ang. syntactic sugar) dla istniejącego, opartego na prototypach modelu dziedziczenia. ... Klasy wprowadzają znacznie prostszą i bardziej czytelną składnię do tworzenia obiektów i dziedziczenia.

Classes UserPersonalInfo {

Constructor (name) {

                This.name = name;

}

Introduce() {

  Console.log(‘Mam na imię ${This.name}’);

}

}

Const Kordian = new Person (‘Kordian’);

Kuba.introduce();

10 Konstruktor jest specjalną metodą tworzenia i inicjowania obiektu utworzonego w klasie.

Konstruktor umożliwia zdefiniowanie inicjalizacji obiektu, która musi się wykonać, zanim będzie można wywołać metody obiektu.

Jeśli niestandardowy konstruktor nie został podany, to domyślny konstruktor będzie użyty. Dla klas bazowych konstruktor domyślny jest pusty:

constructor() {}

11 Metoda statyczna albo metoda klasowa – metoda klasy, która nie jest wywoływana w kontekście żadnego konkretnego obiektu tej klasy. Metody statyczne z reguły służą do obsługi składowych statycznych klas.

12 Protokół HTTP określa nam dokładnie format komunikacji między serwerem a klientem. Komunikacja ta opiera się na wyżej opisanych żądaniach i odpowiedziach. Protokół HTTP określa po prostu format tychże wiadomości.

Protokół HTTP jest bezstanowy, co oznacza, iż każde spośród zapytań może.zostac zinterpretowane w oderwaniu od reszty.

Poza serwerami i klientami w komunikacji muszą występować dodatkowe węzły. Mogą to być przykładowo serwery, które zachowają kopię odpowiedzi, przyspieszając tym samym komunikację. Mogą to być również elementy sieciowe, które umożliwiają sprawne docieranie żądań do serwera.

W trakcie wpisywania adresu do przeglądarki korzystamy z metody URL

http://Kordian:Stramek@www.strona.pl:80/nie/ma/tej?strony=2#identyfikator

Część adresu

Przykładowa wartość

scheme

http

user

Kordian

password

Stramek

host

www.strona.pl

port

80

/path

/nie/ma/tej

?query

?strony=2

#fragment

#identyfikator

 

 

Metoda PATCH służy do aktualizowania wartości właściwości zasobu.

Metoda DELETE służy do usuwania zasobu określonego przez jego identyfikator URI.

Post służy do wysyłania danych na serwer, takich jak przesyłanie pliku lub przesyłanie niektórych danych lub dodawanie nowego wiersza do tabeli zaplecza do dowolnego formularza internetowego. W prostym zdaniu możemy powiedzieć, że metoda post służy do wstawiania nowych elementów na serwerze zaplecza. W operacji REST CRUD wykonuje operację tworzenia.

 