// Write your code here

// CLASS SYNTAX

// class Movie {
//   constructor (title, director, genre, releaseYear, rating) {
//     this.title = title,
//     this.director = director,
//     this.genre = genre,
//     this.releaseYear = releaseYear,
//     this.rating = rating
//   }

//   getOverview() {
//     console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`)
//   }
// }

// FUNCTION SYNTAX

//capital M indicates that the function must be called with the 'new' keyword
function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
  this.getOverview = function () {
    console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`)
  }
}

//to add a function to the PROTOTYPE, use the constructor function name, followed by the 'prototype' keyword, then the function name you want to add. This would be optimal. Declare the function on the prototype so that each new instance of the function/movie object does NOT recreate this function. Comment out function in the above constructor function, then uncomment the function below, save it, and run.

// Movie.prototype.getOverview = function() {
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
// }



const Scarface = new Movie("Scarface", "Scorcese", "Crime Drama", "1989", "4.8/5");
console.log(Scarface.getOverview());