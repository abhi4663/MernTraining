"use strict";
exports.__esModule = true;
exports.bookDetails = void 0;
var bookDetails = /** @class */ (function () {
    function bookDetails(id, title, author, rating, price) {
        // this.id = books[books.length - 1].id + 1;
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.price = price;
    }
    return bookDetails;
}());
exports.bookDetails = bookDetails;
