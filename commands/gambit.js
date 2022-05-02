exports.run = (client, message, args) => {
    message.channel.send("You're just standin' there, how 'bout some Gambit?").catch(console.error);
}

exports.name = "gambit";