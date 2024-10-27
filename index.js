const myLibrary = [{title:"The Name of The Wind", author: "Patrick Rothfuss", page:800 , read:"have not read"},
  {title:"11/22/63", author: "Stephen King", page:682 , read:"have not read"},
  {title:"Do Androids Dream Of Electric Sheep", author: "Phillip K. Dick", page:225 , read:"read"}];

  let bookForm = document.querySelector("#book_form");
  bookForm.style.display = "none";

  document.querySelector("#submit_book").addEventListener("click",(e)=>
  {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    addBookToLibrary(title,author,pages,read);
  });

function Book(title,author,pages,read)
{
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function()
  {
    return "The book's title is " + this.title + " the author is " +
      this.author + " and it contains " + this.pages + " pages, " + this.read + ".";
  };
}

function addBookToLibrary(user_title,user_author,user_pages,user_read)
{
  let table = document.querySelector(".library_table");

  let tableRow = document.createElement("tr");  
  table.appendChild(tableRow);

  myLibrary.push({title:user_title,author:user_author,page:user_pages,read:user_read});

  let c = myLibrary.length - 1;

  for(let j = 0; j < Object.keys(myLibrary[c]).length; j++)
    {

      let tableData = document.createElement("td");

      tableRow.appendChild(tableData);

      switch(j)
      {
        case 0:
          tableData.textContent = myLibrary[c].title;
          break;
        case 1:
          tableData.textContent = myLibrary[c].author;
          break;
        case 2:
          tableData.textContent = myLibrary[c].page;
          break;
        case 3:
          tableData.textContent = myLibrary[c].read;
          break; 
      }
    }
}

document.querySelector("#new_book").addEventListener("click", ()=>
{
  if(bookForm.style.display == "none")
  {
    bookForm.style.display = "block";
  }
  else
  {
    bookForm.style.display = "none";
  }
});

(function loopThroughBooks()
{

  let table = document.querySelector(".library_table");

  for(let i = 0; i < myLibrary.length; i++)
  {  
    let tableRow = document.createElement("tr");
    
    table.appendChild(tableRow);

    for(let j = 0; j < Object.keys(myLibrary[i]).length; j++)
      {

        let tableData = document.createElement("td");

        tableRow.appendChild(tableData);

        switch(j)
        {
          case 0:
            tableData.textContent = myLibrary[i].title;
            break;
          case 1:
            tableData.textContent = myLibrary[i].author;
            break;
          case 2:
            tableData.textContent = myLibrary[i].page;
            break;
          case 3:
            tableData.textContent = myLibrary[i].read;
            break; 
        }
      }
  }
})();