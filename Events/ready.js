module.exports = client => {
    console.log(`Ready as ${client.user.tag} | [${client.commands.size}] Commands | [${client.aliases.size}] Aliases of Commands | [${client.events.size}] Events Loaded`)
    client.user.setStatus("idle")
    var act = [`skhelp`, `[${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}] Users`, `[${client.guilds.cache.size}] Servers!`]
    let ict = act[Math.floor(Math.random() * act.length)];
    setInterval(() => {
        client.user.setActivity(ict, {
            type: "LISTENING"
        })
    }, 20e3)
}