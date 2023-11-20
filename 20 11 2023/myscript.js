const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

/*Stwórz kompozycję która na tablicy „books” zlicza ilość liter w tytule (title) nie licząc spacji, gdzie
strony (pages) są parzyste oraz genre kończy się na literkę „y”.  */
const genre = (book) => book.filter((book) => book.genre.endsWith("y"));
const strony = (book) => book.filter((book) => book.pages % 2 == 0);
const ilosc = (book) => book.map((book) => book.title.replace(/\s/g,'').length);
const sumuj = (book) => book.reduce((a,b) => a + b,0);

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
const result = compose(genre,strony,ilosc,sumuj);

console.log("ZADANIE 6:  " + result(books));

/*Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę. */


const gdzieoceny = (book) => book.filter((book) => book.rating > 5);
const gdziestrony = (book) => book.filter((book) => book.pages % 2 != 0);
const gdzietytul = (book) => book.filter((book) => /\d/.test(book.title));
const sum = (book) => book.reduce((sumapozocen, book) => sumapozocen + 1,0);

const compose2 = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
const result2 = compose2(gdzieoceny, gdziestrony, gdzietytul,sum);
console.log("ZADANIE 7:  "+ result2(books));
