const config = require("../../config.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder ()
        .setName('chartype')
        .setDescription('Tells you what type of character you are')
        .addStringOption(option =>
        option.setName('input')
            .setDescription('Input your account name')
            .setRequired(true)),
    async execute(interaction) {
        await interaction.reply("test2");
    }
}
