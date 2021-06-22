// Main dingen
const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const client = new discord.Client();
client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Mensen die commando's uitvoeren", { type: "WATCHING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    // Hallo command
 
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
    
    }
     // ping-pong command
    if (command === `${prefix}ping`) {
 
        return message.channel.send("Pong!!");
    
    }

    // serverinfo command

    if (command === `${prefix}serverinfo`) {

        var botEmbed = new discord.MessageEmbed()
        .setTitle("Breda RP")
        .setDescription("Breda is een RP game")
        .setColor("#3e81ed")
        .addFields(
            {name: "Maker van de bot", value: "Mootje"},
            {name: "Naam server", value: "Breda"},
            {name: "Totaal Members", value: message.guild.memberCount}
        )
        .addField("Bot naam", client.user.username)
        .setThumbnail("https://www.lavueltaholanda.com/uploads/_1040x585_crop_center-center_75_none/01-overzicht-Breda-met-Grote-Kerk-centraal-copyright-www.visitbreda.nl.jpg");


        return message.channel.send(botEmbed);
    }

});

   // Rank Burger als iemand joint

   client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('844948731626258432');

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('856510455652679710');

    if(!channel) return;

    channel.send(`Welkom in de server ${member}`);

   })
