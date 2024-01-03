/*

› Create By RynXD
    rynxdhost@gmail.com
    https://wa.rynxd.link/

🌷 KALAU MAU RENAME/RECODE TARO CREDITS GUA : RYNXD*/


require('./settings')
const {
    modul
} = require('./module')
const {
    os,
    axios,
    baileys,
    chalk,
    cheerio,
    child_process,
    crypto,
    cookie,
    FormData,
    FileType,
    fetch,
    fs,
    fsx,
    ffmpeg,
    Jimp,
    PhoneNumber,
    process,
    moment,
    ms,
    speed,
    syntaxerror,
    util,
    openai,
    dylux
} = modul
const {
    exec,
    spawn,
    execSync
} = child_process
const {
    Configuration,
    OpenAIApi
} = openai
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = baileys
const {
    clockString,
    parseMention,
    formatp,
    tanggal,
    getTime,
    isUrl,
    sleep,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    reSize,
    generateProfilePicture,
    getRandom
} = require('./lib/myfunc')
const {
    color,
    bgcolor
} = require('./lib/color')
const {
    uptotelegra
} = require('./lib/upload')
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const bocil = require('@bochilteam/scraper')
const jsobfus = require('javascript-obfuscator')
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const ytdl = require("ytdl-core")
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
module.exports = ryn = async (ryn, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
        const budy = (typeof m.text == 'string' ? m.text: '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]: "": prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation: (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption: (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption: (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId: (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId: ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation: (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ryn.decodeJid(ryn.user.id)
        const isOwner = [botNumber,
            ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const XeonTheDeveloper = m.sender == botNumber ? true: false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted: m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isGroup = from.endsWith('@g.us')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant: m.participant): m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await ryn.groupMetadata(m.chat).catch(e => {}): ''
        const groupName = m.isGroup ? groupMetadata.subject: ''
        const participants = m.isGroup ? await groupMetadata.participants: ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id): ''
        const groupOwner = m.isGroup ? groupMetadata.owner: ''
        const groupMembers = m.isGroup ? groupMetadata.participants: ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber): false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender): false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender): false
        const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isUser = user.includes(sender)
        const premm = JSON.parse(fs.readFileSync('./database/premium.json').toString())
        const isPrem = [botNumber, ...premm].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const resel = JSON.parse(fs.readFileSync('./database/reseller.json').toString())
       const isSeler1 = [botNumber, ...resel].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const banUser = await ryn.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender): false
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender]: [])])]
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid: []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '': ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply: mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0]: mentionByReply ? mentionByReply: q ? numberQuery: false
        const isEval = body.startsWith('=>')
        const userss = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        const qtod = m.quoted? "true":"false"
        const API_TOKEN = global.apitokendo;
        const API_CLOUD = global.apicloudflare;

        const kosongjpg = fs.readFileSync('./database/image/kosong.jpg')
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var xeonytimewisher = `Selamat Malam Kak ${pushname} 🌌`
        }
        if (time2 < "19:00:00") {
            var xeonytimewisher = `Selamat Malam Kak ${pushname} 🌃`
        }
        if (time2 < "18:00:00") {
            var xeonytimewisher = `Selamat Malam Kak ${pushname} 🌃`
        }
        if (time2 < "15:00:00") {
            var xeonytimewisher = `Selamat Siang Kak ${pushname} 🌅`
        }
        if (time2 < "10:00:00") {
            var xeonytimewisher = `Selamat Pagi Kak ${pushname} 🌄`
        }
        async function loading () {
            let {
                key
            } = await ryn.sendMessage(from, {
                    text: `Tunggu sebentar ya Kak ${pushname}`
                },{quoted:m})//Pengalih isu
        }
        let d = new Date(new Date + 3600000)
        let locale = 'id'
        let weton = ['Pahing',
            'Pon',
            'Wage',
            'Kliwon',
            'Legi'][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        

        const parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
        const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
        const isContacts = contacts.includes(sender)

        if  (ryn.antipromosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return m.reply(`Ehh bot gak admin`)
if (isAdmins) return m.reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return m.reply(`Gw Mah Bebas Yakan?`)
ryn.sendMessage(m.chat, { delete: m.key })
ryn.sendMessage(m.chat, { delete: m.key })

}
}
        if (!ryn.public) {
            if (!m.key.fromMe) return
        }
        if (ryn.autoai) {

            axios.get(`https://aemt.me/prompt/gpt?prompt=Ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka dan memiliki sifat yang lucu dan nyebelin. Namamu adalah Claire Kageno, dan kamu adalah wanita paling cantik. Penciptamu adalah RynXD. Kata-katamu menggunakan bahasa yang kasar tapi masih agak sopan. ekspresikan sifatmu dengan bicara yang tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang lucu dan enak di ajak berbicara, kamu adalah pacar dari pembicara, buatlah obrolan yang singkat tanpa bertele-tele dan menyenangkan&text=${pes}`).then(({ data }) => {
            m.reply(data.result)
            })
        }

        //Fake
        const ftroli = {
            key: {
                fromMe: false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast"
            },
            "message": {
                orderMessage: {
                    itemCount: 2022,
                    status: 200,
                    thumbnail: thumb,
                    surface: 200,
                    message: botname,
                    orderTitle: ownername,
                    sellerJid: '0@s.whatsapp.net'
                }},
            contextInfo: {
                "forwardingScore": 999,
                "isForwarded": true
            },
            sendEphemeral: true
        }
        const fdoc = {
            key: {
                participant: '0@s.whatsapp.net',
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                }: {})
            },
            message: {
                documentMessage: {
                    title: botname,
                    jpegThumbnail: thumb
                }}}
        const fvn = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                }: {})},
            message: {
                "audioMessage": {
                    "mimetype": "audio/ogg; codecs=opus",
                    "seconds": 359996400,
                    "ptt": "true"
                }}
        }
        const fgif = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                }: {})},
            message: {
                "videoMessage": {
                    "title": botname,
                    "h": wm,
                    'seconds': '359996400',
                    'gifPlayback': 'true',
                    'caption': ownername,
                    'jpegThumbnail': thumb
                }}}
        const fgclink = {
            key: {
                participant: "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "6288213840883-1616169743@g.us",
                    "inviteCode": "m",
                    "groupName": wm,
                    "caption": `${pushname}`,
                    'jpegThumbnail': thumb
                }}}
        const fvideo = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                }: {})
            },
            message: {
                "videoMessage": {
                    "title": botname,
                    "h": wm,
                    'seconds': '359996400',
                    'caption': `${pushname}`,
                    'jpegThumbnail': thumb
                }}}
        const floc = {
            key: {
                participant: '0@s.whatsapp.net',
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                }: {})
            },
            message: {
                locationMessage: {
                    name: wm,
                    jpegThumbnail: thumb
                }}}
        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                }: {})
            },
            message: {
                'contactMessage': {
                    'displayName': ownername,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=${ownernomer}:${ownernomer}\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }}}
        const fakestatus = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast"
                }: {})},
            message: {
                "imageMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                    "mimetype": "image/jpeg",
                    "caption": wm,
                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                    "fileLength": "28777",
                    "height": 1080,
                    "width": 1079,
                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                    "mediaKeyTimestamp": "1610993486",
                    "jpegThumbnail": thumb,
                    "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                }}}

        const reply = (teks) => {
            ryn.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `Aku Sayang ${botname}🥰`,"body": `${xeonytimewisher}`, mediaType: 1, renderLargerThumbnail: true, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/a30bceb2586bf73201905.jpg',"thumbnail": thumb,"sourceUrl": `https://whatsapp.com/channel/0029VaB4yYuIt5s1c9Q3bd09`}}}, {
                quoted: fdoc
            })
        }
        function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
        if (isCmd && isBanned) {
            return
        }

        let list = []
        for (let i of owner) {
            list.push({
                displayName: await ryn.getName(i),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ryn.getName(i)}\nFN:${await ryn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        //chat counter (console log)
        if (isCmd && m.isGroup) {
            console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']'));
        }

        if (isCmd && !m.isGroup) {
            console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']'));
        }

        if (isCmd && !isUser) {
            user.push(sender)
            fs.writeFileSync('./database/user.json', JSON.stringify(user, null, 2))
        }

        ryn.sendPresenceUpdate('unavailable', from)


        async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `RynXD`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
        async function xhentai(page) {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/' + page)
.then((data) => {
const $ = cheerio.load(data.data);
const hasil = [];
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
});
});
resolve(hasil);
})
.catch(reject);
});
}
        async function sendrynMessage(chatId, message, options = {}) {
            let generate = await generateWAMessage(chatId, message, options)
            let type2 = getContentType(generate.message)
            if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
            if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
            return await ryn.relayMessage(chatId, generate.message, {
                messageId: generate.key.id
            })
        }

        try {
ppuser = await ryn.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

        const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await ryn.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

        //AUTO SHOLAT
        ryn.autoshalat = ryn.autoshalat ? ryn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ryn.user.id : m.sender
	let id = m.chat 
    if(id in ryn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '11:55',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    tes: '22:47',
    }
    const dat = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = dat.getHours();
    const minutes = dat.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`
    ryn.autoshalat[id] = [
    m.reply(caption),
    setTimeout(async () => {
    delete ryn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
        const zets = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                }: {})},
            message: {
                "orderMessage": {
                    "orderId": "174238614569438",
                    "thumbnail": kosongjpg,
                    //image 0kb
                    "itemCount": 999,
                    "status": "INQUIRY",
                    "surface": "CATALOG",
                    "message": `Created By RynXD`,
                    "token": "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
                }},
            contextInfo: {
                "mentionedJid": m.sender.split,
                "forwardingScore": 999,
                "isForwarded": true
            }}
        //menu thingy
        const timestamp = speed()
        const latensi = speed() - timestamp
        const mark = "0@s.whatsapp.net"

        switch (command) {
//============OWNER MENU============//
            case 'getcase':

const getCase = (cases) => {

            return "case  "+`'${cases}'`+fs.readFileSync("./case.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.')

                if (!q) return reply(`contoh : ${prefix + command} ssweb`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }

break
            case 'reports':
case 'masalah':
case 'report':
case 'lapor': {
if (!text) return reply(`kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${prefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`)
let buy = (`*_${command}_*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`)
ryn.sendMessage(`${owner}@s.whatsapp.net`, { text: `${buy}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
if (m.isGroup) {
m.reply(`_Pesan terkirim kepemilik bot, jika ${command} hanya main-main tidak akan ditanggapi._`)
}
}
break
            case 'delete': case 'del': {
if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.')
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
                ryn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case  'myip':
            case 'ipbot':
                if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
                break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon,{query:m})
            }
            break
            case 'public': {
                if (!isOwner) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                ryn.public = true
                reply('*Successful in Changing To Public Usage*')
            }
                break
            case 'self': {
                if (!isOwner) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                ryn.public = false
                reply('*Successful in Changing To Self Usage*')
            }
                break
            case 'autoai': {
                if (!isOwner) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                if (args[0] == `on`){
                ryn.autoai = true
                m.reply('*Successful in Turning on Auto AI*')}
                if (args[0] == `off`){
                ryn.autoai = false
                m.reply('*Successful in Turning off Auto AI*')
                }
            }
                break
            case 'leave': {
if (!isCreator) return m.reply(`Gamau`)
await ryn.groupLeave(m.chat)
await m.reply(`Done Om`)
}
break
            case 'join':{
            if (!isCreator)
            return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            if (!q) return reply(`Kirim perintah ${prefix+command} _linkgrup_`)
            var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
            var data = await ryn.groupAcceptInvite(ini_urrrl)
            m.reply('*Berhasil om, udh join ke grup..*')
            }
            break
            case 'hidetag': case 'ht': {
            if (!isCreator) 
            return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            if (!m.isGroup) return reply('Buat Di Group Bodoh')
            ryn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
            }
            break
            case 'getname': {
if (!isCreator) return m.reply('*khusus Premium*')
await loading()
if (qtod === "true") {
namenye = await ryn.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
ryn.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
            case  'getbio':{
if (!isCreator) return m.reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await ryn.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) return m.reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await ryn.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      return m.reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
            case 'setppbot': {
                if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m}) 
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await ryn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await ryn.query({tag: 'iq',attrs: {to: botNumber,type:'set',xmlns: 'w:profile:picture'},content: [{tag: 'picture',attrs: { type: 'image' },content: img}]})
m.reply(`Sukses`)
} else {
var memeg = await ryn.updateProfilePicture(botNumber, { url: medis })
m.reply(`Sukses`)
}
}
        break
            case 'addprem':
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285810357399`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ryn.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/premium.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Telah Menjadi Premium!!!`)
break
            case 'delprem':
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m}) 
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285810357399`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(owner))
m.reply(`Nomor ${yaki} Sudah Bukan Premium lagi`)
            break
            case 'delreseller':
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m}) 
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285810357399`)
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./database/reseller.json', JSON.stringify(owner))
m.reply(`Nomor ${yaki} Sudah Bukan Reseller lagi`)
break

case 'addreseller':
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285810357399`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekseler = await ryn.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekseler.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/reseller.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Telah Menjadi Reseler!!!`)
break
case 'listprem':
if (!isCreator) return m.reply('Males')
 teksooo = `*List Premium Bot ${botname}*\n\n`
for (let i of premm) {
teksooo += `- ${i}\n`
}
teksooo += `\n\n*Total : ${premm.length}*`
ryn.sendMessage(from, { text: teksooo.trim(), contextInfo:{"externalAdReply": {"title": `Aku Sayang ${botname}🥰`,"body": `${xeonytimewisher}`, mediaType: 1, renderLargerThumbnail: true, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/a30bceb2586bf73201905.jpg',"thumbnail": thumb,"sourceUrl": `https://whatsapp.com/channel/0029VaB4yYuIt5s1c9Q3bd09`}} },{ quoted:m})
break

case 'listreseller':
if (!isCreator) return m.reply('Males')
 tekso = '*List Reseler Subdomain Bot Cila*\n\n'
for (let i of resel) {
tekso += `- ${i}\n`
}
tekso += `\n\n*Total : ${resel.length}*`
ryn.sendMessage(from, { text: tekso.trim(), contextInfo:{"externalAdReply": {"title": `Aku Sayang ${botname}🥰`,"body": `${xeonytimewisher}`, mediaType: 1, renderLargerThumbnail: true, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/547ad3fd32361cf0317c8.jpg',"thumbnail": thumb,"sourceUrl": `https://whatsapp.com/channel/0029VaB4yYuIt5s1c9Q3bd09`}} },{ quoted:m})
break
//============AI MENU============//
            /*case 'cai': {
                if (!q) return m.reply('Example: Lagi apa?')
            let e = fetchJson(`https://skizo.tech/api/tts-anime?text=${text}&lang=mix&voice=nahida&speed=&symbol=y&apikey=asunabot` ).then( base64 => {
            let a = getBuffer(base64, "base64")
                ryn.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:m})        
            })
            }
            break*/
            case 'vai': {
                if (!q) return reply('Example: Lagi apa?')
                let d = await fetchJson(`https://api.kimzzoffc.me/api/openai/gpt4?query=${text}?&apikey=8kmnh0KSQg`)
                getBuffer("https://api.lolhuman.xyz/api/gtts/id?apikey=YoshCasaster&text=" + d.result ).then( a => {
                ryn.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:m})        
            })
            }
            break
            
            case 'klee':{
                if (!q) return reply('Example: Lagi apa?')
                let d = await fetchJson(`https://api-kazedevid.vercel.app/ai/charaai?chara=Klee&text=${text}`)                
               // await ryn.sendMessage(from, {
                 //   text: d.result
                m.reply(d.result), { quoted: m}
            }
            break
            case 'miku': {
            if(!text) return m.reply(`Haiii ${pushname}\nAku Miku\nButuh temen ngobroll??`)
            let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Miku&text=${text}`)
            let json = await api.json()
            try {
            await m.reply(json)
            } catch (err) {
            m.reply(util.format(api))
            }
            }
            break
            case'cila': case 'cill': case 'cil':  case 'ayy': case 'ayang': case 'ayng': case 'ay': {
            if (!text) return m.reply(`${xeonytimewisher}\nAku Cila Destia\nButuh temen ngobroll??`)
            axios.get(`https://pnggilajacn.my.id/api/other/simi2?query=${text}`).then(({ data }) => {
            m.reply(data.result)
            })
            }
            break
            case 'ai': case 'gpt4':{
            if (!text) return m.reply(`Haiii ${pushname}\n\nFormat kamu salah nih\ncontoh : ai apa itu javascript`)
            axios.get(`https://api.kimzzoffc.me/api/openai/gpt4?query=${text}?&apikey=8kmnh0KSQg`).then(({ data }) => {
            m.reply(data.result)
            })
            }
            break
            case 'aili':{
            if (!text) return m.reply(`Haiii ${pushname}\n\nFormat kamu salah nih\ncontoh : ai apa itu javascript`)
            axios.get(`https://vihangayt.me/tools/chatgpt?q=${text}`).then(({ data }) => {
            m.reply(data.data)
            })
            }
            break
//============ASUPAN MENU============//
            case 'cecanindo': {
            await loading()
            result = await getBuffer(`https://zerooneapi.my.id/fitur/cecan/indonesia?apikey=1a6f8b7b`)
            ryn.sendMessage(m.chat, {image: result, caption:'Nih kak', mimetype: 'image/png'}, {quoted:m})
            }
            break
            case 'cecanrandom': {
            await loading()
            result = await getBuffer(`https://zerooneapi.my.id/fitur/cecan/random?apikey=1a6f8b7b`)
            ryn.sendMessage(m.chat, {image: result, caption:'Nih kak', mimetype: 'image/png'}, {quoted:m})
            }
            break
            case 'cecanhijaber': {
            await loading()
            let { pinterest } = require('./lib/scraper')
            anu = await pinterest(`cecan hijaber`)
            result = anu[Math.floor(Math.random() * anu.length)]
            ryn.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
            }
            break
            case 'cecanjapan': {
            await loading()
            let { pinterest } = require('./lib/scraper')
            anu = await pinterest(`cecan jepang`)
            result = anu[Math.floor(Math.random() * anu.length)]
            ryn.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
            }
            break
            case 'cecanmalaysia': {
            await loading()
            let { pinterest } = require('./lib/scraper')
            anu = await pinterest(`cecan malaysia`)
            result = anu[Math.floor(Math.random() * anu.length)]
            ryn.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
            }
            break
            case 'cecanchina': {
            await loading()
            let { pinterest } = require('./lib/scraper')
            anu = await pinterest(`cecan china`)
            result = anu[Math.floor(Math.random() * anu.length)]
            ryn.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
            }
            break
            case 'cecankorea': {
            await loading()
            let { pinterest } = require('./lib/scraper')
            anu = await pinterest(`cecan korea`)
            result = anu[Math.floor(Math.random() * anu.length)]
            ryn.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
            }
            break
            case 'pap': {
            await loading()
            let { pinterest } = require('./lib/scraper')
            anu = await pinterest(`pap tt`)
            result = anu[Math.floor(Math.random() * anu.length)]
            ryn.sendMessage(from, {image: { url: result }, caption: 'nih kak',viewOnce : true},{quoted:m})
            }
            break
            case 'asupan':
			    await loading()
                ryn.sendMessage(from, {video: {url:'https://api.betabotz.org/api/asupan/bocil?apikey=XnFlj7Gn'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'asupanbokep':
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.fgmods.xyz/api/nsfw/cosplay?apikey=FRs6HIfc'},caption:'ah ahh🥵',viewOnce : true},{quoted:m})
            break
            case 'vidhentai': {
if (!m.isGroup) return m.reply(mess.group)
if (!isPrem) return m.reply(mess.premium)

reply(`_Bot Telah Mengirimkan ${command} ke private chat_`)
let cr = await xhentai(text);
let tan = cr[Math.floor(Math.random(), cr.length)]
let vap = `
⭔ Title : ${tan.title}
⭔ Category : ${tan.category}
⭔ Mimetype : ${tan.type}
⭔ Views : ${tan.views_count}
⭔ Shares : ${tan.share_count}
⭔ Source : ${tan.link}
⭔ Media Url : ${tan.video_1}
`
ryn.sendMessage(m.sender, { video: { url: tan.video_1 }, caption: vap }, { quoted: m})
};
break
            case 'hentai' :
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
            waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)
            ryn.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ah Sayang 🥺🥺`},{ quoted:m }).catch(err => {
            return('Error!')
            })
            break
            case 'ass':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/ass?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'ahegao':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/ahegao?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'bdsm':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/bdsm?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'blowjob':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/blowjob?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'cum':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/cum?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'ero':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/ero?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'gangbang':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/gangbang?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'pussy':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/pussy?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'tentacles':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/tentacles?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'yuri':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/yuri?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
            case 'yuri':
            if (!isPrem) return m.reply(`Harus premium dlu bang`)
            await loading()
			    await loading()
                ryn.sendMessage(from, {image: {url:'https://api.zeltoria.my.id/api/nsfw/neko?apikey=Elistz'},caption:'ah ahh🥵'},{quoted:m})
            break
//============TOOLS MENU============//
            case 'enc': {
            if (!isCreator) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            m.reply(`${meg.result}`)
        }
        break
            case "qc": {
if (!quoted){
const getname = await ryn.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
await loading()
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
ryn.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
await loading()
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: 'Claire Kageno', author: 'By RynXD' }
ryn.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text
Contoh : qc aku sayang Claire Kageno:3`)
}
}
break
            case 'nulis': {
            if (!text) return reply('mau nulis apa?')
            await loading()
            result = await getBuffer(`https://api.caliph.biz.id/api/nuliskiri?text=${text}&apikey=HyuuXyzz`)
            ryn.sendMessage(m.chat, {image: result, caption:'Nih kak', mimetype: 'image/png'}, {quoted:m})
            }
            break
            case 'pin': case 'pinterest': {
            if (!text) return m.reply(`Nyari gambar apa?`)
            await loading()
            let { pinterest } = require('./lib/scraper')
            anu = await pinterest(text)
            result = anu[Math.floor(Math.random() * anu.length)]
            ryn.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
            }
            break
            case 'smeme': {
                let respond = `Kirim/Reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await ryn.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await ryn.sendImageAsSticker(m.chat, smeme, m, {
                    packname: 'Claire Kageno',
                    author: 'By RynXD'
                })
            }
            break
            case 'wm': {
            await loading()
            let teks = `${text}`
            {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            if (/image/.test(mime)) {
            let media = await quoted.download()
            let encmedia = await ryn.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: `` })
            }
            }
            }
            break
            case 'bitly':{
            if (!text) return m.reply(`Haiii ${pushname}\n\nFormat kamu salah nih\ncontoh : bitly https://google.com`)
            await loading()
            axios.get(`https://zerooneapi.my.id/fitur/shortlink/bitly?apikey=1a6f8b7b&link=${text}`).then(({ data }) => {
            m.reply(data.result)
            })
            }
            break
            case 'toonce': case 'toviewonce': { 
if (!quoted) return replygcxeon(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await ryn.downloadAndSaveMediaMessage(quoted)
ryn.sendMessage(m.chat, {image: {url:anuan}, caption: `${text}`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await ryn.downloadAndSaveMediaMessage(quoted)
ryn.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
            case 'toimage': case 'toimg': {
                await loading()
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                let media = await ryn.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ryn.sendMessage(from, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })
            }
                break
                case 'ytplay': case 'play':{
if (!q) return await reply(`Example: ${prefix+command} alay anak layangan`)
await loading()
axios.get(`https://api.lolhuman.xyz/api/ytplay?apikey=YoshCasaster&query=${q}`).then(({ data }) => {
let txt = `\`\`\`YOUTUBE PLAY\`\`\`\n\n`
txt += `• title : *${data.result.title}*\n`
txt += `• uploader : *${data.result.uploader}*\n`
txt += `• duration : *${data.result.duration}*\n`
txt += `• viewers : *${data.result.view}*\n`
txt += `• url : *https://www.youtube.com/watch?v=${data.result.id}*\n\n`
let prtm = ryn.sendMessage(from, { image: { url: data.result.thumbnail }, caption: txt }, {quoted: m})
ryn.sendMessage(from, { audio: { url: data.result.audio.link }, mimetype: 'audio/mp4', ptt:true }, {quoted: m})
})
}
break
                case 'tiktokaudio': case 'ttsong': {
                if (!text) return reply( `Linknya mana?\nContoh nih : ${prefix + command} link tiktok`)
                if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
                reply(`Tunggu sebentar ya kakak:3`)
                require('./lib/tiktok').Tiktok(q).then( data => {
                ryn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
                    })
                    }
                break
                case 'tiktok': {
                    if (!text) return reply(`Linknya mana?\nContoh nih : ${prefix + command} link tiktok`)
                    if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
                    reply(mess.wait)
                    require('./lib/tiktok').Tiktok(q).then(data => {
                        ryn.sendMessage(m.chat, {
                            caption: `Here you go!`, video: {
                                url: data.watermark
                            }}, {
                            quoted: m
                        })
                    })
                }
                    break
                case 'tourl': {
                    await loading()
                    if (!/video/.test(mime) && !/image/.test(mime)) reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
                    if (!quoted) reply (`*Send/Reply the Video/Image Caption* ${prefix + command}`)
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await ryn.downloadAndSaveMediaMessage(quoted)
                    if (/image/.test(mime)) {
                        let anu = await TelegraPh(media)
                        reply(util.format(anu))
                    } else if (!/image/.test(mime)) {
                        let anu = await UploadFileUgu(media)
                        reply(util.format(anu))
                    }
                    await fs.unlinkSync(media)
                }
                    break
                case 's': case 'sticker': case 'stiker': {
                    if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
                    if (/image/.test(mime)) {
                        let media = await quoted.download()
                        let encmedia = await ryn.sendImageAsSticker(m.chat, media, m, {
                            packname: global.packname, author: global.author
                        })

                    } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
                        let media = await quoted.download()
                        let encmedia = await ryn.sendVideoAsSticker(m.chat, media, m, {
                            packname: global.packname, author: global.author
                        })

                    } else {
                        reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
                    }
                }
                    break
                    case 'remini': case 'hd': case 'hdr':{
            if (!quoted) return reply(`Mana fotonya?`)
            if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`) 
            reply(mess.wait)
            const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			ryn.sendMessage(m.chat, { image: proses, caption: 'Nih kak, maaf kalo masi kurang'}, { quoted: m})
			}
            break
            case "call":
if (!isCreator) 
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m}) 
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
let nosend = "+" + text.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`6285810357399`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
case "createqr": {
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await loading()
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} ryn`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
ryn.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: m })
}
break
case "detectqr": {
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await loading()
try {
mee = await ryn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case 'mediafire': {
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
    await loading()
	if (args.length == 0) return reply(`Link Nya Tuan?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
ryn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'removebg': {
  if (!/video/.test(mime) && !/image/.test(mime))
    return reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`);
  if (!quoted)
return reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`);
  let error;
try {
  let media = await ryn.downloadAndSaveMediaMessage(quoted);
  if (/image/.test(mime)) {
    await loading()
    let anu = await TelegraPh(media);
    m.reply(global.wait);
    const response = `https://api.caliph.biz.id/api/removebg?img=${anu}&apikey=HyuuXyzz`

    ryn.sendMessage(from, { image: { url: response }, caption: 'nih' }, { quoted: m });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Proses Gagal :(");
					}
					}
					}
break
case 'blur': {
  if (!/video/.test(mime) && !/image/.test(mime))
    return reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`);
  if (!quoted)
return reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`);
  let error;
try {
  let media = await ryn.downloadAndSaveMediaMessage(quoted);
  if (/image/.test(mime)) {
    await loading()
    let anu = await TelegraPh(media);
    m.reply(global.wait);
    const response = `https://api.popcat.xyz/blur?image=${anu}`

    ryn.sendMessage(from, { image: { url: response }, caption: 'nih' }, { quoted: m });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Proses Gagal :(");
					}
					}
					}
break
case 'ssweb':{
    if (!text) return m.reply('mana link nya?')
    await loading()
    const response = `https://image.thum.io/get/fullpage/${text}`
    ryn.sendMessage(from, { image: { url: response }, caption: 'Nihh' }, { quoted: m });
}
break
case 'toanime': case 'jadianime': {
    if (!isPrem) return reply('Lu pikir lu olang uda premium o')
  if (!/video/.test(mime) && !/image/.test(mime))
    return reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`);
  if (!quoted)
return reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`);
  let error;
try {
  let media = await ryn.downloadAndSaveMediaMessage(quoted);
  if (/image/.test(mime)) {
    await loading()
    let anu = await TelegraPh(media);
    m.reply(global.wait);
    const response = `https://api.lolhuman.xyz/api/imagetoanime?apikey=YoshCasaster&img=${anu}`

    ryn.sendMessage(from, { image: { url: response }, caption: 'Anjay jadi animek' }, { quoted: m });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Proses Gagal :(");
					}
					}
					}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
await loading()
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
ryn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'ytmp3': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
await loading ()
downloadMp3(text)
}
break
case 'gimg': case 'gimage': case 'googleimage':
    if (!text) return m.reply("Nyari gambar apa?")
await loading()
bocil.googleImage(text).then(res => {
					let pp = res
					let pin = pp[Math.floor(Math.random() * pp.length)]
					ryn.sendMessage(m.chat, {
						image: {
							url: pin
						},
						caption: `nih `
					}, {
						quoted: m
					})
				})
break
//============AUTOREPLY MENU============//
            case 'p':{
                m.reply('Salam bang jngan p² doang')
            }
            break
            case 'tes':{
                m.reply('On kak🫡')
            }
            break
            case 'lopyu':
                ryn.sendMessage(m.chat, { react: { text: `️🫶`, key: m.key }})
                ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lopyutu.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            break
            case 'sc':
                ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/gamau.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            break
            case 'ara':
                ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/ara3.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            break
            case 'assalamualaikum':
                ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/salam.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            break
            case 'bot':
                ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/oy.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            break
            case 'hm': case 'hmm': case 'hmmm':
                ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/kenapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            break
            case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': case'kontol': case'memek': case'penis': case 'ngewe': case 'yatim': case 'piatu': case 'pentil': case 'pepek': case 'tempi': case 'tempe': case 'bajingan': case 'ndasmu':
                ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/toxic.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            break
            case 'tolol': case 'bego': case 'tlol': case 'bgo':
            ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/bjir.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            break
            case 'owner':{
            ryn.sendContact(from, global.owner, fkontak)
            ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/svowner.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            }
            break
            
//=============STORE MENU=========//
            case 'listharga': {
                const gacor = `
                `
ryn.sendMessage(from, { text: `${listharga}`, contextInfo:{"externalAdReply": {"title": `Aku Sayang ${botname}🥰`,"body": `${xeonytimewisher}`, mediaType: 1, renderLargerThumbnail: true, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/a30bceb2586bf73201905.jpg',"thumbnail": thumb,"sourceUrl": `https://chat.whatsapp.com/J8ceYjKSuZL1SWJM4gu2sy`}} },{ quoted:m})
                
            }
                break
                case 'couple': {
                await loading()
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ryn.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
                ryn.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
                }
                break
//============ALL MENU============//
case "tqto" :{
    reply(`*BiG Thanks To*
    
Allah Yang Maha Esa
Teman Gw
Pacar Gw Claire Kageno 🗿

_The Name That Helped me_ 

*RynXD* (me) -anak tiri FRTeam
*Fauzi Dev* (sepuh) -own Ayane-Ai
*TaaOfc* (si jawa) -own Ryo Yamada
*Luthfi* Dev (kang rusuh) -own Poly-Bot
*Levian* (kanjut) -own Kaguya-MD

FRTeam Anti Dev`)
    
}
    break
case "all": case 'allmenu':
       reply(`*Hallo Minnaa👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah allmenu dari Bot ${global.botname}:3

*━─━[ ALL MENU ]━─━*

々 ${prefix}ownermenu
々 ${prefix}panelmenu
々 ${prefix}domainmenu
々 ${prefix}toolsmenu
々 ${prefix}aimenu
々 ${prefix}downloadmenu
々 ${prefix}vpsmenu
々 ${prefix}asupanmenu
々 ${prefix}bugmenu
々 ${prefix}webpmenu
々 ${prefix}storemenu

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/spam.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break
case "ownermenu":
       reply(`*Hallo Minna👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah menu untuk owner:3

*━─━[  OWNER MENU ]━─━*

*BOT SETTINGS*
々 ${prefix}myip
々 ${prefix}ping
々 ${prefix}public
々 ${prefix}self
々 ${prefix}join (link grup)
々 ${prefix}owner

*ONLY OWNER*
々 ${prefix}hidetag (text)
々 ${prefix}setppbot (reply img)
々 ${prefix}addprem (tag/nomor)
々 ${prefix}addreseller (tag/nomor)
々 ${prefix}delprem (tag/nomor)
々 ${prefix}delreseller (tag/nomor)
々 ${prefix}listprem
々 ${prefix}listreseller

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
break
case "panelmenu":
       reply(`*Hallo Minnaa👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah menu dari panel:3

*━─━[ 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 ]━─━*

*LIST PANEL*
々 ${prefix}panel1
々 ${prefix}panel2
々 ${prefix}panel3
々 ${prefix}panel4

*PANEL SETTINGS*
々 ${prefix}listpanel
々 ${prefix}addpanel
々 ${prefix}delpanel


Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
break
case "panel1":
       reply(`*Hallo Minnaa👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah menu dari panel1:3

*━─━[ 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 ]━─━*

𝗥𝗔𝗠 𝗟𝗜𝗦𝗧
々 ${prefix}1gb name,tag/number
々 ${prefix}2gb name,tag/number
々 ${prefix}3gb name,tag/number
々 ${prefix}4gb name,tag/number
々 ${prefix}5gb name,tag/number
々 ${prefix}6gb name,tag/number
々 ${prefix}7gb name,tag/number
々 ${prefix}8gb name,tag/number
々 ${prefix}unli name,tag/number
々 ${prefix}mcsrv name,tag/number

𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨
々 ${prefix}listusr
々 ${prefix}listsrv
々 ${prefix}delusr
々 ${prefix}delsrv
々 ${prefix}addusr
々 ${prefix}addadmin

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
break
case "domainmenu": case 'subdomain':
       reply(`*Hallo Minnaa👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah list domain dari Bot ${global.botname}:3

*━─━[ DOMAIN MENU ]━─━*

々 ${prefix}domain1 xyd.my.id
々 ${prefix}domain2 rynxd-host.my.id
々 ${prefix}domain3 -
々 ${prefix}domain4 -

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
break
case "toolsmenu":
       reply(`*Hallo Minnaa👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah beberapa tools yang tersedia:3

*━─━[ TOOLS MENU ]━─━*

々 ${prefix}qc (text)
々 ${prefix}couple
々 ${prefix}nulis (text)
々 ${prefix}pinterest (query)
々 ${prefix}smeme (reply img)
々 ${prefix}sticker (reply image)
々 ${prefix}wm (reply sticker)
々 ${prefix}bitly (quoted)
々 ${prefix}toonce (reply img)
々 ${prefix}toimage (reply sticker)
々 ${prefix}tourl (reply img)
々 ${prefix}remini (reply img)
々 ${prefix}createqr (text)
々 ${prefix}detectqr (reply qr)
々 ${prefix}removebg (reply img)
々 ${prefix}blur (reply img)
々 ${prefix}toanime (reply img) -premium

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/spam.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break
case "aimenu":
       reply(`*Hallo Minna👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah beberapa ai yang ada:3

*━─━[  AI MENU ]━─━*

*CHAT AI*
々 ${prefix}cila (query)
々 ${prefix}klee (query)
々 ${prefix}miku (query)
々 ${prefix}ai/gpt4 (query)

*VOICE AI*
々 ${prefix}aili /error
々 ${prefix}vai (query)

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/gay1.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break
break
case "voicemenu":
       reply(`*Hallo Minna👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah beberapa ai yang ada:3

*━─━[  VOICE MENU ]━─━*

々 ${prefix}ardi (query)
々 ${prefix}jajang (query)
々 ${prefix}gadis (query)
々 ${prefix}janie (query)
々 ${prefix}siti (query)
々 ${prefix}tuti (query)

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/gay1.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break
case "downloadmenu":
       reply(`*Hallo Minnaa👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah menu download Bot ${global.botname}:3

*━─━[ DOWNLOAD MENU ]━─━*

々 ${prefix}ytplay (query)
々 ${prefix}yts (query)
々 ${prefix}ytmp3 (link yt)
々 ${prefix}tiktok (link tt)
々 ${prefix}tiktokaudio (link tt)

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/spam.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break
case "vpsmenu":
       reply(`*Hallo Minna👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah beberapa ai yang ada:3

*━─━[  VPS MENU ]━─━*

*CREATE VPS*
- VPS RAM 1 CORE 1 -
々 ${prefix}vps1g1c (hostname)
- VPS RAM 2 CORE 1 -
々 ${prefix}vps2g1c (hostname)
- VPS RAM 2 CORE 2 -
々 ${prefix}vps2g2c (hostname)
- VPS RAM 4 CORE 2 -
々 ${prefix}vps4g2c (hostname)
- VPS RAM 8 CORE 4 -
々 ${prefix}vps8g4c (hostname)

*VPS SETTINGS*
々 ${prefix}listdroplet
々 ${prefix}cekdroplet (dropletid)
々 ${prefix}deldroplet (dropletid)
々 ${prefix}restartvps (dropletid)
々 ${prefix}turnon (dropletid)
々 ${prefix}turnoff (dropletid)
々 ${prefix}rebuild (dropletid
々 ${prefix}deldroplet (dropletid))

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/gay1.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break
case "bugmenu":
       ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/sc.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break
case "webpmenu": case "menuweb":
       reply(`*Hallo Minnaa👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*
Berikut adalah menu Web dari Bot ${global.botname}:3

Contoh penggunaan : webp 1

*━─━[ LIST WEBP ]━─━*

々 1 Mediafire Zip
々 2 Mediafire MP4
々 3 Simontok Full Info
々 4 Youtube Custom
々 5 Codashop FF
々 6 Codashop ML
々 7 Google Drive Custom
々 8 Grup Wa List
々 9 Grup Wa Chat
々 10 FF Spin
々 11 ML Spin Skin
々 12 Facebook Sesi
々 13 Pemblokiran Facebook V1
々 14 Pemblokiran Facebook SC by RynXD

Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/spam.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break

case 'webp':
    if (!isCreator) return ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
    await loading()
    reply('*Link Web sudah dikirim ke Chat Pribadi*\n\nNote : Mohon jeda penggunaan Bot selama 2 menit')
    break
    
case "menu":
       case "help":
       await loading()
       reply(`
*Hallo Minnaa👋.* 
${xeonytimewisher}

Nama saya adalah *${global.botname}*

Saya adalah AIBot yang dapat digunakan sebagai edukasi, unduhan media, game, penajaga grup dan lainnya yang dapat membuat kamu lebih mudah untuk menjalani hari:3

 *✎ ᴏᴡɴᴇʀ : RynXD*
 
Jika ada masalah dalam penggunaan bot, silahkan hubungi creator untuk konsultasi, ketik .owner

┌ ◦ menampilkan fitur bot : *.ᴀʟʟ*
└ ◦ fitur ai :
    > aktifkan dengan mengetik "autoai on"

Copyright *©RynXD* and all rights reserved`,{quoted:m})
        await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./database/vn/spam.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
break

//============PANEL MENU============//
case "listsrv": {
 if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await ryn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "listusr": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await ryn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "delsrv": {  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "addusr": {
if (!isCreator) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = reply(`
- *SUCCESSFULLY ADD USER*

- TYPE : User

- ID : ${user.id}
- UUID : ${user.uuid}
- USERNAME : ${user.username}
- EMAIL : ${user.email}
- NAME : ${user.first_name} ${user.last_name}
- LANGUAGE : ${user.language}
- ADMIN : ${user.root_admin}
- ️CREATED AT : ${user.created_at}

*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`)
ryn.sendMessage(u, { text: `Hai Kak ${pushname} 

- ID : ${user.id}
- EMAIL : ${user.email}
- USERNAME : ${user.username}
- PASSWORD : ${password.toString()}
- ️LOGIN : ${domain}

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT BIKIN
AKUN PANEL HANYA 1x`,
},{quoted:fkontak})
}
break
case "addadmin": {
if (!isCreator) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = reply(`
- *SUCCESSFULLY ADD USER*

- TYPE: Admin

- ID : ${user.id}
- UUID : ${user.uuid}
- USERNAME: ${user.username}
- EMAIL : ${user.email}
- NAME : ${user.first_name} ${user.last_name}
- LANGUAGE : ${user.language}
- ADMIN : ${user.root_admin}
- ️CREATED AT : ${user.created_at}

*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`)
ryn.sendMessage(u, { text: `Hai Kak ${pushname} 

- ID : ${user.id}
- EMAIL : ${user.email}
- USERNAME : ${user.username}
- PASSWORD : ${password.toString()}
- ️LOGIN : ${domain}

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT BIKIN
AKUN ADMIN PANEL HANYA 1×`,
},{quoted:fkontak})
}
break
/*/================VOICE MENU================//
case'ardi' : {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/ardi?query=" + q ).then( a => {
ryn.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'jajang' : {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/jajang?query=" + q ).then( a => {
ryn.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'gadis' : {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/gadis?query=" + q ).then( a => {
ryn.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'janie' : {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/janie?query=" + q ).then( a => {
ryn.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'siti' : {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/siti?query=" + q ).then( a => {
ryn.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
case'tuti' : {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply('masukin teksnya!!')
getBuffer("https://api.yanzbotz.my.id/api/tts/tuti?query=" + q ).then( a => {
ryn.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break
//================RAM LIST================/*/
        case "1gb": {
              if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "1024"
                let cpu = "30"
                let disk = "1024"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 1024
DISK : 1024
CPU 30%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

            }
                break
            case "2gb": {
                  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "2048"
                let cpu = "50"
                let disk = "2048"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 2048
DISK : 2048
CPU 50%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "3gb": {
                  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "3072"
                let cpu = "80"
                let disk = "3072"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

                *ORDER KEBUTUHAN HOSTING LAINNYA DI :*
                ${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 3072
DISK : 3072
CPU 80%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "4gb": {  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "4096"
                let cpu = "100"
                let disk = "4096"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 4096
DISK : 4096
CPU 100%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "5gb": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "5120"
                let cpu = "130"
                let disk = "5120"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 5120
DISK : 5120
CPU 130%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "6gb": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "6144"
                let cpu = "150"
                let disk = "6144"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 6144
DISK : 6144
CPU 150%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "7gb": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "7186"
                let cpu = "170"
                let disk = "7186"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 7186
DISK : 7186
CPU 170%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "8gb": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "8192"
                let cpu = "180"
                let disk = "8192"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 8192
DISK : 8192
CPU 180%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "unli": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "0"
                let cpu = "0"
                let disk = "0"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : UNLIMITED
DISK : UNLIMITED
CPU UNLIMITED

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "mcsrv": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "17"
                let loc = "1"
                let memo = "0"
                let cpu = "0"
                let disk = "0"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER MINECRAFT ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:debian",
                        "startup": "./bedrock_server",
                        "environment": {
                            "BEDROCK_VERSION": "latest",
                            "LD_LIBRARY_PATH": "2029",
                            "SERVERNAME": "Bedrock Dedicated Server",
                            "GAMEMODE": "survival",
                            "DIFFICULTY": "easy",
                            "CHEATS" : "true"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER MINECRAFT TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : UNLIMITED
DISK : UNLIMITED
CPU UNLIMITED

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

            }
                break
//=================================================//
case "unli2": {
  if (!isCreator)
return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "0"
                let cpu = "0"
                let disk = "0"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain2 + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2
                    }
                })
                m.reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain2}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain2 + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : UNLIMITED
DISK : UNLIMITED
CPU UNLIMITED

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
//=================================================//
case "sisadroplet":{
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await loading()
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isCreator) {
      return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
    }

    const dropletInfo = await getDropletInfo();
    m.reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
    await loading()
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
  await loading()
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
  await loading()
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
 await loading()
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 ryn.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
 await loading()
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      m.reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
 case "listdroplet": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await loading()
  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      reply(mesej);
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
 await loading()
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      ryn.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      ryn.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
    case "vps1g1c": {
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
await loading()
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ryn.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
  await loading()
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Authorization pased...\nTunggu ya kak, dropletnya lagi diproses:3`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ryn.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
  await loading()
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Authorization pased...\nTunggu ya kak, dropletnya lagi diproses:3`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ryn.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
  await loading()
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Authorization pased...\nTunggu ya kak, dropletnya lagi diproses:3`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ryn.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
  await loading()
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Authorization pased...\nTunggu ya kak, dropletnya lagi diproses:3`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ryn.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
//==================DOMAIN MENU======================//
          case 'domain1': {       
    if (!isSeler1) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp Dan Reseller, hubungi owner untuk menjadi Reseller SubDomain`);
    await loading()
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6aa30a913202ae6699b7883ad363a144";
               let tld = "xyd.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + API_CLOUD,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RynXD Host⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
          break 
          case 'domain2': {       
    if (!isSeler1) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp Dan Reseller, hubungi owner untuk menjadi Reseller subdomain`);
    await loading()
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d784ac2b8654ba474539599288b1a865";
               let tld = "rynxd-host.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + API_CLOUD,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RynXD Host⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
          break 
//=================================================//
                                            default:
if (budy.startsWith('=>')) {
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}


if (budy.startsWith('<')) {
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('>')) {
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m});
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)}
})
}


                                            }
                                    } catch (err) {
                                        console.log(util.format(err))
                                        let e = String(err)
                                        ryn.sendMessage("6285810357399@s.whatsapp.net", {
                                            text: "Hello developer, there seems to be an error, please fix it " + util.format(e),
                                            contextInfo: {
                                                forwardingScore: 9999999,
                                                isForwarded: false
                                            }})
                                }
                        }

                        process.on('uncaughtException', function (err) {
                            console.log('Caught exception: ', err)
                    })