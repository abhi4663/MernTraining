let booksArray = localStorage.getItem("booksArray");
if (!booksArray) {
    booksArray = [];
}
else {
    booksArray = JSON.parse(booksArray);
}
export class BookManager {
    constructor() {
        this.table = document.getElementById("book-details");
    }
    searchMatch(searchParam, booksArray, paramType) {
        // searchParam = searchParam.toLowerCase();
        console.log(booksArray[paramType]);
        if (paramType === "book_id") {
            return booksArray[paramType].indexOf(searchParam) >= 0;
        }
        return booksArray[paramType].toLowerCase().indexOf(searchParam) >= 0;
       
    }
    displayRecords(searchParams = "", paramType = "") {
        this.table.innerHTML = `<tr>
                        <th>Book Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th>Actions</th>
                </tr>`;
        for (let i = 0; i < booksArray.length; i++) {
            let row;
            let displayFlag = true;
            if (searchParams.length > 0 && paramType.length > 0) {
                if (!this.searchMatch(searchParams, booksArray[i], paramType)) {
                    displayFlag = false;
                }
            }
            if (displayFlag) {
                row = `<tr>
                    <td>${booksArray[i].book_id}</td>
                    <td>${booksArray[i].book_name}</td>
                    <td>${booksArray[i].book_author}</td>
                    <td>${booksArray[i].rating}</td>
                    <td>
                    <button class="delete" id="${i}" style="border: none; background-color: inherit;"><span class="material-icons" style="color: red;">delete</span></button>

                    </td>
                </tr>`;
                this.table.innerHTML += row;
            }
        }
    }
    searchResult() {
        const optionSelected = document.getElementById("dropdown");
        const paramType = optionSelected.value;
        const searchText = document.getElementById("searchBar");
        this.displayRecords(searchText.value, paramType);
    }
    deleteFunc(item) {
        booksArray.splice(item.id, 1);
        localStorage.setItem("booksArray", JSON.stringify(booksArray));
        this.displayRecords();
    }
    addBook() {
        let tmp = booksArray.length + 1;
        let id = tmp.toString();
        let name = document.getElementById("book_name");
        let author = document.getElementById("author");
        let rating = document.getElementById("rating");
        if (id !== "" &&
            name.value !== "" &&
            author.value !== "" &&
            rating.value !== "") {
            const item = {
                book_id: id,
                book_name: name.value.toUpperCase(),
                book_author: author.value.toUpperCase(),
                rating: rating.value,
            };
            booksArray.push(item);
            localStorage.setItem("booksArray", JSON.stringify(booksArray));
        }
        else {
            return;
        }
    }
}