let table: HTMLTableElement = document.getElementById(
	"book-details"
)! as HTMLTableElement;

// function deleteFunc(index:any){
//     let i = index.parentNode.parentNode.rowIndex;
//     table.deleteRow(i);
// }

import { BookManager } from "./bookManager.js";

let manager: BookManager = new BookManager();

let deleteButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
	".delete"
)! as NodeListOf<HTMLButtonElement>;
deleteButtons.forEach((item) => {
	item.addEventListener("click", (event: any) => {
		if (item === event.target) {
			manager.deleteFunc(event.target);
		} else {
			manager.deleteFunc(event.target.parentElement);
		}
	});
});
