const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Botumuzun özelliklerini öğrenmek için h!yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  'h!uyarı komutunu kullanın.',
  '',
  `ProNaX resmi sunucusu : https://discord.gg/wnaFxt9`,
  `**ProNaX sunucusu** https://discord.gg/wnaFxt9`
]
