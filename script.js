const myLibrary = []
const myelements = []

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

function addElement(){
    const BtnRemove = document.createElement("button")
    BtnRemove.innerText = "x"

    i = (myelements.length -1) + 1
    myelements[i] = document.createElement("li")
    myelements[i].setAttribute("id", `${myLibrary[i].id}`)
    myelements[i].innerText = myLibrary[i].info()
    myelements[i].append(BtnRemove)
}

function addBookToLibrary(titel, author, pages, haveRead) {
    id = crypto.randomUUID()
    myLibrary[(myLibrary.length - 1) + 1] = new Book(id, titel, author, pages, haveRead)
    addElement()
}


addBookToLibrary("To kill a Mockingbird", "Harper Lee", 281, false)
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 208, true)
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 320, true)
addBookToLibrary("Little Women", "Louisa May Alcott", 549, false)



function dispalyBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        let doc_body = document.getElementsByTagName("body")[0]
        
        doc_body.append(myelements[i])
    }
}

dispalyBooks()