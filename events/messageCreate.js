module.exports = {
	name: 'messageCreate',
	execute(messageCreate) {
        if (messageCreate.author.bot) return;
        if (messageCreate.content.toLowerCase().includes("gambit")) {
            messageCreate.channel.send("You're just standin' there, how 'bout some Gambit?");
        };
	},
};