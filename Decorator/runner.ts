namespace DecoratorPattern {
    
    console.log('Before borrowing...');
    let video = new Video(2);
    video.display();

    console.log('Let\'s borrow it...');
    let borrowableVideo = new Borrowable(video);
    borrowableVideo.borrow();
    
    console.log('After borrowing...');
    borrowableVideo.display();
}