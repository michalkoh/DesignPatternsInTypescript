namespace MementoPattern {

    export class Book {

        author: string;
        title: string;
        isbn: string;
        edited: Date;

        constructor(author: string, title: string, isbn: string) {
            
            this.author = author;
            this.title = title;
            this.isbn = isbn;
        }

        createMemento(): Memento {

            var memento = new Memento();
            memento.author = this.author;
            memento.title = this.title;
            memento.isbn = this.isbn;

            return memento;
        }

        restoreMemento(memento: Memento): void {

            this.author = memento.author;
            this.title = memento.title;
            this.isbn = memento.isbn;
            this.edited = new Date();
        }

        info(): string {
            return "Author: " + this.author + ", Title: " + this.title + ", ISBN: " + this.isbn + " (Last edit: " + this.edited + ")";
        }
    }

    export class Memento {

        author: string;
        title: string;
        isbn: string;
    }

    export class CareTaker {

        memento: Memento;

        backup(book: Book): void {

            this.memento = book.createMemento();

        }

        restore(book: Book): Book {

            book.restoreMemento(this.memento);

            return book;
        }
    }
}