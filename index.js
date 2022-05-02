const { Client, Intents, Collection } = require('discord.js');
const config = require("./config.json");
const fs = require('fs');

const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
});

//////////EVENT FILE HANDLING//////////////

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
}

////////////COMMAND FILE HANDLING//////////////

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const commandName = file.split(".")[0];
    const command = require(`./commands/${file}`);

    console.log (`Attempt to load command ${commandName}`);
    client.commands.set(commandName, command);
}

////////////////////////////////////////////////////

client.login(config.token);