namespace BridgePattern {
    
    // Abstraction
    export abstract class AbstractMessage {

        protected messageSender: IMessageSender;

        constructor(messageSender: IMessageSender) {
            this.messageSender = messageSender;
        }

        abstract send(text: string): void;
    }

    // Refined abstraction 1
    export class LongMessage extends AbstractMessage {

        send(text: string): void {
            console.log("Sending a long message...");
            this.messageSender.sendMsg(text);
        }
    }

    // Refined abstraction 2
    export class ShortMessage extends AbstractMessage {

        send(text: string): void {
            console.log("Sending a short message...");
            this.messageSender.sendMsg(text);
        }
    }

    // Implementor
    export interface IMessageSender {

        sendMsg(text: string): void;
    }

    // Concrete implementor 1
    export class SmsMessageSender implements IMessageSender {

        sendMsg(text: string): void {
            console.log("via SMS: " + text)
        }
    }

    // Concrete implementor 2
    export class EmailMessageSender implements IMessageSender {

        sendMsg(text: string): void {
            console.log("via EMAIL: " + text)
        }
    }
}