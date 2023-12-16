// Write your code here

class Books {
  constructor(title, author, isbn, numCopies) {
    this.title = title,
    this.author = author,
    this.isbn = isbn,
    this.numCopies = numCopies
  }

  get availability() {
    return this.getAvailability();
  }
  
  getAvailability() {
    return this.numCopies === 0 ? "out of stock" : this.numCopies < 10 ? "low stock" : "in stock";
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numToRestock = 5) {
    this.numCopies += numToRestock;
  }
}

 let Titanic = new Books('Titanic', 'Harry Potter', 5012345, 7);
 console.log(Titanic.author);
 console.log(Titanic.availability);
 console.log(Titanic.numCopies);
 Titanic.sell(3);
 console.log(Titanic.numCopies);
 Titanic.restock();
 console.log(Titanic.numCopies);
