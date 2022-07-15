const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*───•「 ${setting.botName} - MD 」•───*
	
 _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

 ❑ *INFO SERVER*
 ‣ _Library : Baileys-MD._
 ‣ _Prefix : Multi Prefix_
 ‣ _Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
 ‣ _Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_
 
 ❑ *INFO USERS*
 ‣ _Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}_
 ‣ _Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}_
 ‣ _Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}_
 ‣ _Saldo : Rp.${toCommas(getBalance(sender, balance))}_
 
 ⌂ *THANKS TO*
 ➢ irfann
 ➢ Ra-api
 ➢ Dt4-api
 ➢ Hxz-api
 ➢ Xfarr-api
 ➢ Lexxy Official
 ➢ Penyedia Modules
`
}

exports.menuall = (sender, prefix, pushname) => {
	return `
_*•──•──•──•──•──•──•──•*_
   *NEOBOT WHATSAPP*
  *BAILEYS MULTI DEVICE*
_*•──•──•──•──•──•──•──•*_

 ♤ *MAIN MENU* ♤
 ➳ ${prefix}rules
 ➳ ${prefix}script
 ➳ ${prefix}menu
 ➳ ${prefix}owner
 ➳ ${prefix}donasi
 ➳ ${prefix}speed
 ➳ ${prefix}runtime
 ➳ ${prefix}sewabot
 ➳ ${prefix}cekprem
 ➳ ${prefix}listprem

 ♤ *CONVERTER/TOOLS* ♤
 ➳ ${prefix}attp
 ➳ ${prefix}toimg
 ➳ ${prefix}tovid
 ➳ ${prefix}cuttly
 ➳ ${prefix}tinyurl
 ➳ ${prefix}sticker
 
 ♤ *NULIS MENU* ♤
 ➳ ${prefix}nulis
 ➳ ${prefix}nuliskiri
 ➳ ${prefix}nuliskanan
 ➳ ${prefix}foliokiri
 ➳ ${prefix}foliokanan

 ♤ *DOWNLOADER* ♤
 ➳ ${prefix}play
 ➳ ${prefix}tiktok
 ➳ ${prefix}ytmp4
 ➳ ${prefix}ytmp3
 ➳ ${prefix}facebook
 ➳ ${prefix}instagram
 ➳ ${prefix}tiktokaudio
 ➳ ${prefix}tiktoknowm
 
 ♤ *RANDOM MENU* ♤
 ➳ ${prefix}quote
 ➳ ${prefix}cecan
 ➳ ${prefix}cogan
 ➳ ${prefix}anime
 ➳ ${prefix}husbu
 ➳ ${prefix}neko1
 ➳ ${prefix}neko2
 ➳ ${prefix}waifu1
 ➳ ${prefix}waifu2
 ➳ ${prefix}kitsune
  
 ♤ *SEARCH MENU* ♤
 ➳ ${prefix}jam
 ➳ ${prefix}lirik
 ➳ ${prefix}meme
 ➳ ${prefix}couple
 ➳ ${prefix}quotes
 ➳ ${prefix}spekhp
 ➳ ${prefix}grupwa
 ➳ ${prefix}ytsearch
 ➳ ${prefix}darkjoke
 ➳ ${prefix}ppcouple
 ➳ ${prefix}kisahnabi
 ➳ ${prefix}memeindo
 ➳ ${prefix}infogempa
  
 ♤ *GAMES MENU* ♤
 ➳ ${prefix}delttc
 ➳ ${prefix}tictactoe
 ➳ ${prefix}tebakgambar
  
 ♤ *PAYMENT/BANK* ♤
 ➳ ${prefix}limit
 ➳ ${prefix}saldo
 ➳ ${prefix}transfer
 ➳ ${prefix}buylimit
 ➳ ${prefix}buyglimit
 ➳ ${prefix}topbalance
 
 ♤ *AIUEO MENU* ♤
 ➳ ${prefix}hilih <text>
 ➳ ${prefix}halah <text>
 ➳ ${prefix}huluh <text>
 ➳ ${prefix}heleh <text>
 ➳ ${prefix}holoh <text>

 ♤ *GROUP MENU* ♤
 ➳ ${prefix}group
 ➳ ${prefix}revoke
 ➳ ${prefix}hidetag
 ➳ ${prefix}setdesc
 ➳ ${prefix}linkgrup
 ➳ ${prefix}setppgrup
 ➳ ${prefix}setnamegc
  
 ♤ *OWNER MENU* ♤
 ➳ ${prefix}bc
 ➳ ${prefix}join
 ➳ ${prefix}exif
 ➳ ${prefix}leave
 ➳ ${prefix}setting
 ➳ ${prefix}delprem
 ➳ ${prefix}addprem
 ➳ ${prefix}setppbot
 ➳ ${prefix}broadcast
 
 ♤ *TEXTPRO MENU* ♤
 ➳ ${prefix}maker1 <text>
 ➳ ${prefix}maker2 <text>
 ➳ ${prefix}maker3 <text>
 ➳ ${prefix}maker4 <text>
 ➳ ${prefix}maker5 <text>
 ➳ ${prefix}maker6 <text>
 ➳ ${prefix}maker7 <text>
 ➳ ${prefix}maker8 <text>
 ➳ ${prefix}maker9 <text>
 ➳ ${prefix}maker10 <text>
 ➳ ${prefix}maker11 <text>
 ➳ ${prefix}maker12 <text>
 ➳ ${prefix}maker13 <text>
 ➳ ${prefix}maker14 <text>
 ➳ ${prefix}maker15 <text>
 ➳ ${prefix}maker16 <text>
 ➳ ${prefix}maker17 <text>
 ➳ ${prefix}maker18 <text>
 ➳ ${prefix}maker19 <text>
 ➳ ${prefix}maker20 <text>
 
`+'\`\`\`® Simple Bot Whatsapp\`\`\`'
}

exports.rulesnya = (sender, prefix) => {
   return `
   ≻ *RULES BOT*
   
1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini di jual oleh Lexxy Official Jika Minat Chat Wa.me/6283834558105

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add group.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Neobot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Neobot
😖🙏`
}

exports.sewabot = (sender, prefix) => {
   return `
☞ *LIST HARGA SEWABOT*
 ➢ _2 Hari : Rp3.000_
 ➢ _5 Hari : Rp5.000_
 ➢ _1 Minggu : Rp7.000_
 ➢ _2 Minggu : Rp12.000_
 ➢ _1 Bulan : Rp15.000_
 ➢ _2 Bulan : Rp25.000_
 ➢ _3 Bulan : Rp45.000_

_Hai Kak Mau Sewa Bot ??_
_Untuk Fiturnya Bisa Di Cek #allmenu_
_Jika Minat Chat Owner Ketik #owner_

*───•「 ${setting.botName} - MD 」•───*
`
}

exports.donasibot = (sender, prefix) => {
   return `
  ‣ *DONASI BOT*
 ➢ DANA = 08xxxxxxx
 ➢ OVO = 08xxxxxxx
 ➢ PULSA = 08xxxxxxx
 ➢ GOPAY = 08xxxxxxx
 
Hallo Kak ${ucapanWaktu}
Beneran Mau Donasi Bot ??
Silahkan Pilih Payment Di Atas

Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini
`
}