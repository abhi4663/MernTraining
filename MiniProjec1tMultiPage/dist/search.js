import { BookManager } from "./bookManager.js";
let manager = new BookManager();
// manager.displayRecords();
const optionSelected = document.getElementById("dropdown");
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("search-button");
const button = document.querySelector("#search-button");
button.addEventListener("click", function () {
    manager.searchResult();
});

function search() {
    let placeholder, buttonText;
    if (optionSelected.value === "book_id") {
        placeholder = "Search By Id";
        buttonText = "Search Id";
    }
    else if (optionSelected.value === "book_name") {
        placeholder = "Search By Title";
        buttonText = "Search Title";
    }
    else if (optionSelected.value === "book_author") {
        placeholder = "Search By Author";
        buttonText = "Search Author";
    }
    else {
        return;
    }
    searchBar.placeholder = placeholder;
    searchButton.innerHTML = buttonText;
}
optionSelected.addEventListener("change", search);
export default optionSelected;
