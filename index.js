const {
    Client,
    Collection
} = require("discord.js")
const client = new Client({
    disableMentions: "everyone",
    shardCount: 2
})
const config = require("./config");

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.config = config;
const command = require("./Structures/Command");
command.run(client);

const events = require("./Structures/Event");
events.run(client)

client.login(config.login_details.token);