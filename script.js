function Book(titel,author,pages,haveRead){
    if (!new.target){        
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.titel = titel;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        return `The "${this.titel}" by ${this.author}, ${this.pages} pages, ${this.haveRead ? "have read" : "not have read"}`
    }
}

let book1 = new Book("To kill a Mockingbird","Harper Lee", 281, false)

console.log(book1.info())