namespace BridgePattern {

    let smsSender = new SmsMessageSender();
    let shortMessage = new ShortMessage(smsSender);
    shortMessage.send("Hello short world!");

    let emailSender = new EmailMessageSender();
    let longMessage = new LongMessage(emailSender);
    longMessage.send("Hello long world1")
}