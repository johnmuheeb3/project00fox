const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs'); 
const devs = ["171259176029257728","343383616895713290"];
client.login(process.env.SECERT_KEY);
client.once('ready', () => {
    console.log("---------------------");
    console.log("[Abayro] READY");
    console.log("---------------------");
    client.user.setActivity('N/A yet, f!', {type: "PLAYING"})
});
client.on('error', console.error);
///////////GUILD/////////////////


///////////////////////////////

client.on('message', async message => {
let prefix = "f!";
let cmd = message.content.split(" ")[0];
cmd = cmd.slice(prefix.length);
let args = message.content.split(" ").slice(1);
///////////////////!! D E V E L O P E R S !!///////////////////////////////
// Sorry Spyro, this cause erros!

// if (message.content.startsWith(prefix + 'ply')) {
//     var argresult = message.content.split(` `).slice(1).join(' ');
//     if (!devs.includes(message.author.id)) return;
//     client.user.setGame(argresult);
//       message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
//   } else 
//   if (message.content.startsWith(prefix + 'wt')) {
//   client.user.setActivity(argresult, {type:'WATCHING'});
//       message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
//   } else 
//   if (message.content.startsWith(prefix + 'ls')) {
//   client.user.setActivity(argresult , {type:'LISTENING'});
//       message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
//   } else     
//     if (message.content.startsWith(prefix + 'setavatar')) {
//   client.user.setAvatar(argresult);
//     message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
//         } else     
//           if (message.content.startsWith(prefix + 'setname')) {
//   client.user.setUsername(argresult).then
//       message.channel.sendMessage(`**${argresult}** : Done :>`)
//   return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
// } else
//   if (message.content.startsWith(prefix + 'st')) {
//     client.user.setGame(argresult, "https://www.twitch.tv/idk");
//       message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
//   }
///////////////////!! D E V E L O P E R S !!///////////////////////////////

if(cmd === 'help') {
    message.channel.send(new Discord.RichEmbed() 
    .setTitle(`Commands List (3)`)
    .setDescription('Use ' +  `**${prefix}[command]** `+'to get help,examples about a command!\n')
    .addField(":diamond_shape_with_a_dot_inside: General", "`a!help`\n`a!fortnite`\n`a!ping`", true) // \n`a!example`
    //
    .addField(":shield: Moderation", "Waiting for commands...", true)
    .setColor("00FF00")
);
}

// if(cmd === 'profile') {
//     var Canvas = require('canvas-prebuilt');
//     var jimp = require('jimp');
//     Canvas.registerFont('./assets/OpenSans-ExtraBold.ttf', {family: 'Open Sans'})
//     let memberavatar = message.author.avatarURL
//         let Image = Canvas.Image,
//             canvas = new Canvas.createCanvas(401, 202),
//             ctx = canvas.getContext('2d');
//         ctx.patternQuality = 'good';
//         ctx.filter = 'blur(10px)';
//         ctx.antialias = 'default';
//         ctx.shadowColor = 'black';
//         ctx.shadowColor = 'black';
//         ctx.shadowOffsetY = 15;
//         ctx.shadowBlur = 40;
//         fs.readFile(`./assets/dragon-handler.png`, function (err, Background) {
//             if (err) return console.log(err);
//             let BG = Canvas.Image;
//             let ground = new Image;
//             ground.src = Background;
//             ctx.drawImage(ground, 0, 0, 401, 202);

// })

//                 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
//                 jimp.read(url, (err, ava) => {
//                     if (err) return console.log(err);
//                     ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
//                         if (err) return console.log(err);

                        
//                         //Avatar
//                         let Avatar = Canvas.Image;
//                         let ava = new Avatar;
//                         ava.src = buf;
//                         ctx.drawImage(ava, 152, 27, 95, 95);
                        
//                                                 //text
//                         ctx.font = '32px "Open Sans"';
//                         ctx.fillStyle = "#FF00FF";
//                         ctx.textAlign = "center";
//                         ctx.fillText(`${message.author.username}`, 210, 154);
                        
//                         //ur name
//                         ctx.font = '20px "Open Sans"';
//                         ctx.fillStyle = "#DA70D6";
//                         ctx.textAlign = "center";
//                         ctx.fillText("Dragon", 210, 190);
                        
// message.channel.sendFile(canvas.toBuffer())
// })
// })
// }

if (cmd === 'fortnite') {
const Fortnite = require('fortnite');
const ft = new Fortnite('1010ab16-8f67-414a-a0b5-13d9e8b93954');
let username = args[0];
let platform = args[1] || "pc";
if(!username) {
    let embed = new Discord.RichEmbed()
    .setTitle('a!fortnite') 
    .setDescription(`**Usage:** ${prefix}fortnite [user] [platform]\n**Example:** a!fortnite Ninja`)
    return message.channel.send(embed)
}
let data = ft.getInfo(username, platform).then(data => {
let stats = data.lifetimeStats;
let kills = stats.find(s => s.stat == 'kills')
let wins = stats.find(s => s.stat == 'wins')
let win = stats.find(s => s.stat == 'win')
let kd = stats.find(s => s.stat == 'kd')
let mp = stats.find(s => s.stat == 'matchesPlayed')
let tp = stats.find(s => s.stat == 'timePlayed')
let rank = stats.find(s => s.stat == 'top25s')
message.channel.send(new Discord.RichEmbed()
.setAuthor(`Fortnite Stats for ${username}`)
.addField('Kills', kills.value, true)
.addField('Platform', platform, true)
.addField('Wins', wins.value, true)
.addField('Win Rate', win.value, true)
.addField('K/D', kd.value, true)
.addField('Matches Played', mp.value, true)
.addField('Time Played', tp.value, true)
.addField('Leaderborad', rank.value, true)
.addField('More Info', `https://fortnitetracker.com/profile/${platform}/${username}`)
);
}).catch(e => {
message.channel.send(new Discord.RichEmbed()
.setAuthor('Error', "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_48-32.png")
.setDescription(`Didn't Find ${username} in ${platform} database`)
);
}); 
}

if(cmd === 'ping') {
    const pinging = await message.channel.send("**Pinging**");
    pinging.edit(`**:ping_pong: TimeTaken:** \`${pinging.createdTimestamp - message.createdTimestamp}ms\`` + `\n **:heartpulse: Discord API:** \`${Math.round(client.ping)}ms\``);
}


if (cmd ==="server") {
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    message.channel.send(new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 Server ID**", "**"+message.guild.id+"**",true)
    .addField("**👑 Server Owenr**", "**"+message.guild.owner+"**" ,true)
    .addField("**🌍 Server Region**" , "**"+message.guild.region+"**",true)
    .addField('**💬 Text Channels**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**📣 Voice Channels**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**🤔 Server Created Days**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**👔 Ranks **",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**💠 Security Level**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField("👥Members Count",`**${message.guild.memberCount}**`)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    )}

    if (cmd === 'report')
    {
        var members = []
        if (members.includes(message.author.id)) return message.reply(`Please wait for reporting another user.`)
        let mentions = message.mentions.members.first() || message.content.split(" ").slice(1).join(" ");
        let reason = message.content.split(" ").slice(2).join(" ")
        if (!mentions) return message.reply(`Please mention/type a user to report.`)
        if (mentions.user.bot) return message.reply(`Bots can't be reported.`)
        if (message.author.id === mentions.id) return message.reply(`You can't report yourself.`)
        if (!reason) return message.reply(`Please type a reason for a report.`)
        var embed = new Discord.RichEmbed()
            .setTitle(`Report`)
            .setDescription(`<@!${message.author.id}> has reported <@!${mentions.id}>`)
            .addField(`Reason : `, reason)
            .setColor(`RED`)
        client.channels.get("433258716759064577").send(
        {
            embed
        })
        members.push(message.author.id);
        message.channel.send(`${mentions.user.username} has been reported.`)
    }

    if (message.content.startsWith(prefix+ "mute")) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** you don't have manage roles permission **").catch(console.error);
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** there's no muted role please create one **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** Please mention a member**').catch(console.error);
  message.guild.member(user).addRole(muteRole).then(() => {
    return message.reply("**:white_check_mark: .. Muted**").catch(console.error);
    });
  
  const muteembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('Muted', '**[ ' + `${user.username}#${user.discriminator} (${user.id})` + ' ]**')
    .addField('By', '**[ ' + `${message.author.username}#${message.author.discriminator}` + ' ]**')
    client.channels.get('433281615276539905').send(muteembed);
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply("**this member is a 'Moderator' **").catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**Already Muted**").catch(console.error);
} else {
  message.guild.member(user).addRole(muteRole).then(() => {
    return message.reply("**:white_check_mark: .. Muted**").catch(console.error);
    });
}
  }

    ////////////////
});
