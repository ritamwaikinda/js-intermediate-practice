// Write your code here

class Movie {
  constructor (title, director, genre, releaseYear, rating) {
    this.title = title,
    this.director = director,
    this.genre = genre,
    this.releaseYear = releaseYear,
    this.rating = rating
  }

  getOverview() {
    console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was releasedin ${this.releaseYear}. It received a rating of ${this.rating}.`)
  }
}

const Scarface = new Movie("Scarface", "Scorcese", "Crime Drama", "1989", "4.8/5");
console.log(Scarface.getOverview());