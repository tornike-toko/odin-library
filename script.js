let myLibrary = []
let myelements = []

const el_List = document.createElement("ul")

let doc_body = document.querySelector("body")
doc_body.append(el_List)


const addBtn = document.querySelector("#new-book")
addBtn.addEventListener("click", () => {
    const form_wrapper = document.querySelector(".form-wrapper")
    form_wrapper.classList.remove("d-none")
})
const close_form = document.querySelector("#close-form")
close_form.addEventListener("click", () => {
    const form_wrapper = document.querySelector(".form-wrapper")
    form_wrapper.classList.add("d-none")
})

const BtnSub = document.querySelector("#sub-btn")


BtnSub.addEventListener("click", subFun, false);

function subFun(event) {
    event.preventDefault();
    let titel = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let haveRead = document.querySelector("#haveRead").checked

    addBookToLibrary(titel, author, pages, haveRead)

    const form_wrapper = document.querySelector(".form-wrapper")
    form_wrapper.classList.add("d-none")
}

function removeFun(e) {
    for(let i=0;i<myLibrary.length; i++){
        if(myLibrary[i].id===e.target.id){
            myLibrary.splice(i,1)
            myelements.splice(i,1)
        }
    }

    dispalyBooks()
}

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

function addElement() {
    i = (myelements.length - 1) + 1

    const BtnRemove = document.createElement("button")
    BtnRemove.setAttribute("id", `${myLibrary[i].id}`)
    BtnRemove.innerText = "x"
    BtnRemove.addEventListener("click", removeFun)

    myelements[i] = document.createElement("li")
    myelements[i].innerText = myLibrary[i].info()
    myelements[i].append(BtnRemove)
}

function addBookToLibrary(titel, author, pages, haveRead) {
    id = crypto.randomUUID()
    myLibrary[(myLibrary.length - 1) + 1] = new Book(id, titel, author, pages, haveRead)
    addElement()
    dispalyBooks()
}


addBookToLibrary("To kill a Mockingbird", "Harper Lee", 281, false)
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 208, true)
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 320, true)
addBookToLibrary("Little Women", "Louisa May Alcott", 549, false)




function dispalyBooks() {
    el_List.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        el_List.append(myelements[i])
    }
    // console.log(myLibrary)
}

dispalyBooks()