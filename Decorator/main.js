var DecoratorPattern;
(function (DecoratorPattern) {
    class LibraryItem {
        constructor(copies) {
            this.copies = copies;
        }
    }
    DecoratorPattern.LibraryItem = LibraryItem;
    class Book extends LibraryItem {
        display() {
            console
                .log('Book...' + this.copies);
        }
    }
    DecoratorPattern.Book = Book;
    class Video extends LibraryItem {
        display() {
            console.log('Video...' + this.copies);
        }
    }
    DecoratorPattern.Video = Video;
    class Decorator extends LibraryItem {
        constructor(item) {
            super(item.copies);
            this.item = item;
        }
        display() {
            this.item.display();
        }
    }
    DecoratorPattern.Decorator = Decorator;
    class Borrowable extends Decorator {
        borrow() {
            if (this.item.copies == 0) {
                throw new Error('Not enough items to borrow!');
            }
            this.item.copies--;
        }
    }
    DecoratorPattern.Borrowable = Borrowable;
})(DecoratorPattern || (DecoratorPattern = {}));
var DecoratorPattern;
(function (DecoratorPattern) {
    console.log('Before borrowing...');
    let video = new DecoratorPattern.Video(2);
    video.display();
    console.log('Let\'s borrow it...');
    let borrowableVideo = new DecoratorPattern.Borrowable(video);
    borrowableVideo.borrow();
    console.log('After borrowing...');
    borrowableVideo.display();
})(DecoratorPattern || (DecoratorPattern = {}));
