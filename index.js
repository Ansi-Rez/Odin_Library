//Premade book objects
const book1 = new Book("The Name Of The Wind", "Patrick Rothfuss", 662, "HaveNotRead");
const book2 = new Book("007:Carte Blanche", "Jeffery Deaver", 404, "HaveNotRead");
const book3 = new Book("Frankenstein", "Mary Shelly", 215, "HaveNotRead");

//initial library array, holds all the books and will be added to by the user.
const myLibrary = [book1,book2,book3];
let table = document.querySelector(".book_table > tbody");


//Book constructor that has a prototype function that prints the specific book's information.
function Book(title,author,page,read)
{
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

Book.prototype.info = function()
{
  return "The book's title is " + this.title + " the author is " +
  this.author + " and it contains " + this.pages + " pages, " + this.read + ".";
}



//Retrieves information from the form and sends it to the array.
document.querySelector("#submit_book").addEventListener("click",(e)=>
{
  e.preventDefault();

  addBookToLibrary();

  //clears form after data is sent to the array.
  document.querySelector("#title").value = ""; 
  document.querySelector("#author").value = "";
  document.querySelector("#page").value = "";
  document.querySelector("input[name='readstatus']:checked").checked = false;
});

//adds book to library
function addBookToLibrary()
{
  const bookEntry = new Book(document.querySelector("#title").value, document.querySelector("#author").value, Number(document.querySelector("#page").value), document.querySelector("input[name='readstatus']:checked").value);
  myLibrary.push(bookEntry);
  refreshTable();
}

//Loops through array and displays the book objects
(function displayBooks()
{
  for(let i=0; i < myLibrary.length; i++)
    {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      for(let j=0; j < Object.keys(myLibrary[i]).length; j++)
        {
          let td = document.createElement("td");
          tr.appendChild(td);
          switch(j)
          {
            case 0:
              td.textContent = myLibrary[i].title;
              break;
            case 1:
              td.textContent = myLibrary[i].author;
              break;
            case 2:
              td.textContent = myLibrary[i].page;
              break;
            case 3:
              td.textContent = myLibrary[i].read;
              break;
          }
        }

        let td = document.createElement("td");
        tr.appendChild(td);

        td.innerHTML = "<button type='button' class='remove' data-button-number='"+ i +"'>Remove</button>";
    }
})();

//Dialog

document.querySelector("#new_book").addEventListener("click",()=>
{
  let dialog = document.querySelector("#form_dialog");

  dialog.show();
});

document.querySelector("#close_dialog").addEventListener("click",()=>
{
  let dialog = document.querySelector("#form_dialog");

  dialog.close();
});

//Recreates table with the new book added to it

function refreshTable()
{
  table.innerHTML = "";


    for(let i=0; i < myLibrary.length; i++)
    {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      for(let j=0; j < Object.keys(myLibrary[i]).length; j++)
        {
          let td = document.createElement("td");
          tr.appendChild(td);
          switch(j)
          {
            case 0:
              td.textContent = myLibrary[i].title;
              break;
            case 1:
              td.textContent = myLibrary[i].author;
              break;
            case 2:
              td.textContent = myLibrary[i].page;
              break;
            case 3:
              td.textContent = myLibrary[i].read;
              break;
          }
        }

        let td = document.createElement("td");
        tr.appendChild(td);

        td.innerHTML = "<button type='button' class='remove' data-button-number='"+ i +"'>Remove</button>";
    }
        let book_info = document.querySelectorAll(".remove");

        for(let c=0; c < book_info.length; c++)
        {
        book_info[c].addEventListener("click",(e)=>
        {
          let array_index = e.target.getAttribute("data-button-number");
          myLibrary.splice(array_index,1);
          refreshTable();
        }
        );
        }
}

//Removes book from library array

let book_info = document.querySelectorAll(".remove");

for(let i=0; i < book_info.length; i++)
{
book_info[i].addEventListener("click",(e)=>
{
  let array_index = e.target.getAttribute("data-button-number");

  myLibrary.splice(array_index,1);
  refreshTable();
}
);
}
