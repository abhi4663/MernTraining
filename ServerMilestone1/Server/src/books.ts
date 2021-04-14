export class bookDetails {
    id: string;
    title: string;
    author: string;
    rating: string;
    price: string;

    constructor(id: string, title: string, author: string, rating: string, price: string) {
        // this.id = books[books.length - 1].id + 1;
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.price = price;
    }

}