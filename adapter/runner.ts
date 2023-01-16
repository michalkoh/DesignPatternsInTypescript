namespace AdapterPattern {

    let player: IMusicPlayer;

    player = new PlayerAdapter(new OldSchoolPlayer());

    player.play();
}