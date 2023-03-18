namespace DecoratorPattern {
    
    // Component
    export abstract class LibraryItem {
        copies: number;

        constructor(copies: number) {
            this.copies = copies;
        }

        abstract display(): void;
    }

    // Concrete component 1
    export class Book extends LibraryItem {

        display(): void {
            console.log('Book...' + this.copies);
        }
    }

    // Concrete component 2
    export class Video extends LibraryItem {

        display(): void {
            console.log('Video...' + this.copies);
        }
    }

    // Decorator
    export abstract class Decorator extends LibraryItem {   

        protected item: LibraryItem;

        constructor(item: LibraryItem) {
            super(item.copies);
            this.item = item;
        }

        display(): void {
            this.item.display();
        }
    }

    // Concrete decorator
    export class Borrowable extends Decorator {

        borrow(): void {
            if (this.item.copies == 0) {
                throw new Error('Not enough items to borrow!')
            }

            this.item.copies--;
        }
    }
}