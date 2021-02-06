const {
    MessageEmbed
} = require("discord.js")

module.exports.run = async (client, message, args) => {
    message.channel.send(`🏓 Ping Pong! **API Latency** is ${client.ws.ping}ms`)
}

module.exports.help = {
    name: "help",
    aliases: ["halp", "h", "commands", "cmds", "cmd"]
}