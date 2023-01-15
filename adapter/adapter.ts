namespace AdapterPattern {

    // Client Interface
    export interface IMusicPlayer {

        play() : void;
    }

    // Adapter
    export class PlayerAdapter implements IMusicPlayer {

        private player: OldSchoolPlayer;

        constructor(oldPlayer: OldSchoolPlayer) {
            this.player = oldPlayer;
        }

        play(): void {
            this.player.playInOldStyle();    
        }
    }

    // Adaptee
    export class OldSchoolPlayer {

        playInOldStyle(): void {
            console.log("Playing the old style!")
        }
    }
}