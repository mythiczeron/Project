let movies = [
    {
        title: "Interstellar",
        releaseYear: 2014,
        rating: 10,
        genres: ["Sci-Fi", "Adventure"]
    },
    {
        title: "Inception",
        releaseYear: 2010,
        rating: 9,
        genres: ["Action", "Sci-Fi", "Thriller"]
    },
    {
        title: "The Mask",
        releaseYear: 1994,
        rating: 9,
        genres: ["Action", "Comedy"]
    },
    {
        title: "Avatar",
        releaseYear: 2009,
        rating: 6,
        genres: ["Sci-Fi", "Action"]
    },
    {
        title: "Home Alone",
        releaseYear: 1990,
        rating: 7,
        genres: ["Family", "Comedy"]
    },
    {
        title: "The Matrix",
        releaseYear: 1999,
        rating: 9,
        genres: ["Action", "Sci-Fi"]
    },
    {
        title: "Goodfellas",
        releaseYear: 1990,
        rating: 7,
        genres: ["Crime", "Drama"]
    }
];

movies.forEach(movie => movie.format = "film");

let movieTitles = movies.map(movie => movie.title);
let highestRated = movies.reduce((max, movie) => movie.rating > max.rating ? movie : max);
let lowestRated = movies.reduce((min, movie) => movie.rating < min.rating ? movie : min);
let highlyRated = movies.filter(movie => movie.rating >= 7);

console.log("============================================================");
console.log("Movie Database Results");
console.log("============================================================");

console.log("\n  Movie Titles:");
console.log("------------------------------------------------------------");
movieTitles.forEach(title => console.log(`   - ${title}`));

console.log("\n HIGHEST Rated Movie:");
console.log("------------------------------------------------------------");
console.log(`   Title: ${highestRated.title}`);
console.log(`   Rating: ${highestRated.rating}/10`);

console.log("\n LOWEST Rated Movie:");
console.log("------------------------------------------------------------");
console.log(`   Title: ${lowestRated.title}`);
console.log(`   Rating: ${lowestRated.rating}/10`);

console.log("\n Highly Rated Movies (7+):");
console.log("------------------------------------------------------------");
highlyRated.forEach(movie => console.log(`   - ${movie.title} - ${movie.rating}/10`));

console.log("\n============================================================");
console.log(`Total Movies: ${movies.length}`);
console.log(`Highly Rated Movies: ${highlyRated.length}`);
console.log("============================================================");