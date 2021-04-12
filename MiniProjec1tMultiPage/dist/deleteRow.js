let table = document.getElementById("book-details");

import { BookManager } from "./bookManager.js";
let manager = new BookManager();
let deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
        if (item === event.target) {
            manager.deleteFunc(event.target);
        }
        else {
            manager.deleteFunc(event.target.parentElement);
        }
    });
});