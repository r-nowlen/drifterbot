module.exports = (client, message) => {
    console.log("messagecreate");
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes("gambit")) {
        const command = "gambit";
        const cmd = client.commands.get(command);
        if (!cmd) return;
        cmd.run(client, message);
        };
};