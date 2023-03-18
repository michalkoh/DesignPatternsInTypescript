namespace MementoPattern {

    let careTaker = new CareTaker();

    console.log("Original:");
    let book = new Book("Jon Skeet", "C# In Depth v1.", "434312314");
    console.log(book.info());
    
    careTaker.backup(book);

    console.log("After change:")
    book.title = "C# In Depth v2.";
    console.log(book.info());

    console.log("Restored:");
    careTaker.restore(book);
    console.log(book.info());
}