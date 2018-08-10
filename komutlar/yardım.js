const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `:point_right: h!banned = Dene ve Gör! \n:point_right: h!avatarım = Avatarınınızı Gösterir. \n:point_right: h!herkesebendençay = Herkese Çay Alırsınız. \n:point_right: h!koş = Koşarsınız.\n:point_right: h!çayiç = Çay İçersiniz. \n:point_right: h!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n:point_right: h!çayaşekerat = Çaya Şeker Atarsınız. \n:point_right: h!yumruh-at = Yumruk Atarsınız. \n:point_right: h!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n:point_right: h!sunucuresmi = BOT Sunucunun Resmini Atar. \n:point_right: h!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n:point_right: h!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Moderator Komutları**", `:point_right: h!ban = İstediğiniz Kişiyi Sunucudan Banlar. \n:point_right: h!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n:point_right: h!unban = İstediğiniz Kişinin Yasağını Açar. \n:point_right: h!sustur = İstediğiniz Kişiyi Susturur. \n:point_right: h!oylama = Oylama Açar. \n:point_right: h!otorol  = OtoRol vermeye yarar. \n:point_right: h!vkanal  = Hoşgeldin-Görüşürüz için kanal adını "hosgeldin" yapman yeterli! \n:point_right: h!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", ":point_right: h!yardım = BOT Komutlarını Atar. \n:point_right: h!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n:point_right: h!ping = BOT Gecikme Süresini Söyler. \n:point_right: h!davet = BOT Davet Linkini Atar. \n:point_right: h!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcım**", " **MustafaBasKaN#3110** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
