const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require("discord-buttons");
class renk extends Command {
    constructor(client) {
        super(client, {
            name: "renk",
            aliases: ["renk"]
        });
    }

    async run(message, args, client) {

        if(!this.client.config.botOwners.includes(message.author.id)) return

        const noa = new MessageMenuOption()
        .setLabel('Kırmızı')
        .setEmoji('♥️')
        .setValue('red')
        .setDescription('Kırmızı')
  
        const noa1 = new MessageMenuOption()
        .setLabel('Sarı')
        .setEmoji('💛')
        .setValue('yellow')
        .setDescription('Sarı')

        const noa2 = new MessageMenuOption()
        .setLabel('Yeşil')
        .setEmoji('💚')
        .setValue('green')
        .setDescription('Yeşil')

        const noa3 = new MessageMenuOption()
        .setLabel('Mavi')
        .setEmoji('💙')
        .setValue('blue')
        .setDescription('Mavi')

        const noa4 = new MessageMenuOption()
        .setLabel('Turuncu')
        .setEmoji('🧡')
        .setValue('orange')
        .setDescription('Turuncu')

        const noa5 = new MessageMenuOption()
        .setLabel('Mor')
        .setEmoji('💜')
        .setValue('purple')
        .setDescription('Mor')
        
    const select = new MessageMenu()
        .setID('select1')
        .setPlaceholder('Renk rolünüzü seçin')
        .addOption(noa)
        .addOption(noa1)
        .addOption(noa2)
        .addOption(noa3)
        .addOption(noa4)
        .addOption(noa5)
  
  
     const Row1 = new MessageActionRow()
     .addComponent(select)   
    
    await message.channel.send('Aşşağıdaki menüden ""Taglı** üyelerimizin alabiliceği **Renk** rollerını seçebilirsiniz', { components: [Row1] });
}

}
module.exports = renk;
