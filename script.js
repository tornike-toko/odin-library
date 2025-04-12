const myLibrary = []

function Book(id, titel, author, pages, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = id;
    this.titel = titel;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function () {
        return `The "${this.titel}" by ${this.author}, ${this.pages} pages, ${this.haveRead ? "have read" : "not have read"}`
    }
}

function addBookToLibrary(titel, author, pages, haveRead) {
    id = crypto.randomUUID()
    console.log
    myLibrary[(myLibrary.length - 1) + 1] = new Book(id, titel, author, pages, haveRead)
}


addBookToLibrary("To kill a Mockingbird", "Harper Lee", 281, false)
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 208, true)
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 320, true)
addBookToLibrary("Little Women", "Louisa May Alcott", 549, false)



function dispalyBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        let delBTN = document.createElement("button")
        delBTN.innerText = "X"

        let element_li = document.createElement("li")
        element_li.setAttribute("id",`${myLibrary[i].id}`)
        element_li.innerText = myLibrary[i].info()
        element_li.append(delBTN)

        let doc_body = document.getElementsByTagName("body")[0]
        
        doc_body.append(element_li)
    }
}

dispalyBooks()