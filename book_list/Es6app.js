class Book{
    constructor(title,author,isbn){
        this.title=title,
        this.author=author,
        this.isbn=isbn;
    }
};
class UI {
    add_book_to_list(book){
        const list =document.getElementById("book-list");
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a hre="#" class="delete">X<a></td>    
        `;
        list.appendChild(row);
        }
    delete_book(target){
        if (target.className==="delete"){
            target.parentElement.parentElement.remove();
        }
    }
    clear_inputs(){
        document.getElementById("title").value="",
        document.getElementById("author").value="",
        document.getElementById("isbn").value="";
    }
    show_alert(alert_type,msg){
        const div=document.createElement("div");
        div.className=`alert ${alert_type}`
        const form=document.getElementById("book-form");
        const container=document.querySelector(".container")
        div.appendChild(document.createTextNode(msg))
        container.insertBefore(div ,form)
        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);
        }
}
class Store{
    static get_books(){
        let books;
        if(localStorage.getItem("books")===null){
            books=[];
        }
        else{
            books=JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }
    static display_books(){
        const books= Store.get_books();
        books.forEach(function(book){
            const ui=new UI;
            ui.add_book_to_list(book);
        });
        }

    
    static add_book(book){
        const books=Store.get_books();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static remove_book(isbn){
        const books=Store.get_books();

        books.forEach(function(book,index){
            if (book.isbn===isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
}
document.addEventListener("DOMContentLoaded",Store.display_books)
const ui = new UI;
document.getElementById("book-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const title=document.getElementById("title").value,
          author=document.getElementById("author").value,
          isbn=document.getElementById("isbn").value;
          const book =new Book(title,author,isbn)
    if (title===""|| author===""||isbn===""){   
        ui.show_alert("error","please fill in all fields")
}
else{
    ui.add_book_to_list(book);
    ui.show_alert("success","Book Added!");
    Store.add_book(book  )
}
ui.clear_inputs()
})
document.getElementById("book-list").addEventListener("click",function(e){
    e.preventDefault();
    ui.show_alert("success","Book Deleted")
    ui.delete_book(e.target);
    Store.remove_book(e.target.parentElement.previousElementSibling.textContent);
    
})