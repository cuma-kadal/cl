const { modul } = require('./module'),
  moment = require('moment-timezone'),
  {
    baileys,
    boom,
    chalk,
    fs,
    figlet,
    FileType,
    path,
    pino,
    process,
    PhoneNumber,
    axios,
    yargs,
    _,
  } = modul,
  { Boom } = boom,
  {
    default: makeWASocket,
    BufferJSON,
    initInMemoryKeyStore,
    DisconnectReason,
    AnyMessageContent,
    makeInMemoryStore,
    useMultiFileAuthState,
    delay,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    getAggregateVotesInPollMessage,
    proto,
  } = require('@whiskeysockets/baileys'),
  readline = require('readline'),
  { color, bgcolor } = require('./lib/color'),
  colors = require('colors'),
  { start } = require('./lib/spinner'),
  { uncache, nocache } = require('./lib/loader'),
  {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
  } = require('./lib/exif'),
  {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep,
    reSize,
  } = require('./lib/myfunc'),
  prefix = '',
  question = (_0x153923) => {
    const _0x1040e9 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    return new Promise((_0x46a88b) => {
      _0x1040e9.question(_0x153923, _0x46a88b)
    })
  },
  store = makeInMemoryStore({
    logger: pino().child({
      level: 'silent',
      stream: 'store',
    }),
  }),
  pairingCode = true
require('./case.js')
nocache('../case.js', (_0x1f4e98) =>
  console.log(
    color('[ CHANGE ]', 'green'),
    color("'" + _0x1f4e98 + "'", 'green'),
    'Updated'
  )
)
require('./index.js')
nocache('../index.js', (_0x57f4f2) =>
  console.log(
    color('[ CHANGE ]', 'green'),
    color("'" + _0x57f4f2 + "'", 'green'),
    'Updated'
  )
)
async function NawBotz() {
  const { state: _0x1901d0, saveCreds: _0x1fd55e } =
      await useMultiFileAuthState(global.sessionName),
    ryn = makeWASocket({
      logger: pino({ level: 'silent' }),
      printQRInTerminal: !pairingCode,
      auth: _0x1901d0,
      browser: ['Chrome (Linux)', '', ''],
    })
  if (pairingCode && !ryn.authState.creds.registered) {
    const _0x55539d = await question(
        color(
          '\n\n\nSilahkan masukin nomor Whatsapp Awali dengan 62:\n',
          'magenta'
        )
      ),
      _0x390fc4 = await ryn.requestPairingCode(_0x55539d.trim())
    console.log(
      color('\u26A0ï¸Ž Kode Pairing Bot Whatsapp kamu :', 'gold'),
      color('' + _0x390fc4, 'white')
    )
  }
  store.bind(ryn.ev)
  ryn.ev.on('connection.update', async (_0x1922d1) => {
    const { connection: _0x573d10, lastDisconnect: _0x2a1519 } = _0x1922d1
    try {
      if (_0x573d10 === 'close') {
        let _0x1e6372 = new Boom(_0x2a1519?.error)?.output.statusCode
        if (_0x1e6372 === DisconnectReason.badSession) {
          console.log('Bad Session File, Please Delete Session and Scan Again')
          NawBotz()
        } else {
          if (_0x1e6372 === DisconnectReason.connectionClosed) {
            console.log('Connection closed, reconnecting....')
            NawBotz()
          } else {
            if (_0x1e6372 === DisconnectReason.connectionLost) {
              console.log('Connection Lost from Server, reconnecting...')
              NawBotz()
            } else {
              if (_0x1e6372 === DisconnectReason.connectionReplaced) {
                console.log(
                  'Connection Replaced, Another New Session Opened, Please Close Current Session First'
                )
                NawBotz()
              } else {
                if (_0x1e6372 === DisconnectReason.loggedOut) {
                  console.log('Device Logged Out, Please Scan Again And Run.')
                  NawBotz()
                } else {
                  if (_0x1e6372 === DisconnectReason.restartRequired) {
                    console.log('Restart Required, Restarting...')
                    NawBotz()
                  } else {
                    if (_0x1e6372 === DisconnectReason.timedOut) {
                      console.log('Connection TimedOut, Reconnecting...')
                      NawBotz()
                    } else {
                      ryn.end(
                        'Unknown DisconnectReason: ' +
                          _0x1e6372 +
                          '|' +
                          _0x573d10
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
      ;(_0x1922d1.connection == 'connecting' ||
        _0x1922d1.receivedPendingNotifications == 'false') &&
        console.log(color('\n\uD83C\uDF3FConnecting...', 'yellow'))
      ;(_0x1922d1.connection == 'open' ||
        _0x1922d1.receivedPendingNotifications == 'true') &&
        (console.log(color(' ', 'magenta')),
        console.log(
          color(
            '\uD83C\uDF3FConnected to => ' +
              JSON.stringify(ryn.user, null, 2),
            'yellow'
          )
        ),
        await delay(1999),
        console.log(
          chalk.yellow(
            '\n\n               ' + chalk.bold.blue('[ RynXD ]') + '\n\n'
          )
        ),
        console.log(
          color(
            '< ================================================== >',
            'cyan'
          )
        ),
        console.log(
          color('\n' + themeemoji + ' YT CHANNEL: @RynXDHost', 'magenta')
        ),
        console.log(color(themeemoji + ' GITHUB: RynXD-Host ', 'magenta')),
        console.log(color(themeemoji + ' WA NUMBER: 6285810357399', 'magenta')),
        console.log(color(themeemoji + ' \xA92023  RynXD\n', 'magenta')))
    } catch (_0x13d3a1) {
      console.log('Error in Connection.update ' + _0x13d3a1)
      NawBotz()
    }
  })
  await delay(5555)
  start('2', colors.bold.white('\n\nWaiting for New Messages..'))
  ryn.ev.on('creds.update', await _0x1fd55e)
  ryn.ev.on('messages.upsert', async (_0x164f0e) => {
    try {
      const _0xc851c9 = _0x164f0e.messages[0]
      if (!_0xc851c9.message) {
        return
      }
      _0xc851c9.message =
        Object.keys(_0xc851c9.message)[0] === 'ephemeralMessage'
          ? _0xc851c9.message.ephemeralMessage.message
          : _0xc851c9.message
      _0xc851c9.key &&
        _0xc851c9.key.remoteJid === 'status@broadcast' &&
        (await ryn.readMessages([_0xc851c9.key]))
      if (
        !ryn.public &&
        !_0xc851c9.key.fromMe &&
        _0x164f0e.type === 'notify'
      ) {
        return
      }
      if (
        _0xc851c9.key.id.startsWith('BAE5') &&
        _0xc851c9.key.id.length === 16
      ) {
        return
      }
      const _0x548f65 = smsg(ryn, _0xc851c9, store)
      require('./case')(ryn, _0x548f65, _0x164f0e, store)
    } catch (_0xbaa926) {
      console.log(_0xbaa926)
    }
  })
  async function _0x184233(_0x2c0b47) {
    if (store) {
      const _0xffa4c8 = await store.loadMessage(
        _0x2c0b47.remoteJid,
        _0x2c0b47.id
      )
      return _0xffa4c8?.message
    }
    return { conversation: 'Claire Kageno Bot Here' }
  }
  return (
    ryn.ev.on('messages.update', async (_0x7fc39) => {
      for (const { key: _0x401e6, update: _0x5daf90 } of _0x7fc39) {
        if (_0x5daf90.pollUpdates && _0x401e6.fromMe) {
          const _0x79b44e = await _0x184233(_0x401e6)
          if (_0x79b44e) {
            const _0x5a7f2f = await getAggregateVotesInPollMessage({
              message: _0x79b44e,
              pollUpdates: _0x5daf90.pollUpdates,
            })
            var _0x46af5e = _0x5a7f2f.filter(
              (_0x35fb75) => _0x35fb75.voters.length !== 0
            )[0]?.name
            if (_0x46af5e == undefined) {
              return
            }
            var _0x2b3cb2 = prefix + _0x46af5e
            ryn.appenTextMessage(_0x2b3cb2, _0x7fc39)
          }
        }
      }
    }),
    (ryn.sendTextWithMentions = async (
      _0x4d1a69,
      _0x23a0ba,
      _0x144835,
      _0x56ae3c = {}
    ) =>
      ryn.sendMessage(
        _0x4d1a69,
        {
          text: _0x23a0ba,
          contextInfo: {
            mentionedJid: [..._0x23a0ba.matchAll(/@(\d{0,16})/g)].map(
              (_0x326b8e) => _0x326b8e[1] + '@s.whatsapp.net'
            ),
          },
          ..._0x56ae3c,
        },
        { quoted: _0x144835 }
      )),
    (ryn.decodeJid = (_0x24d5b6) => {
      if (!_0x24d5b6) {
        return _0x24d5b6
      }
      if (/:\d+@/gi.test(_0x24d5b6)) {
        let _0x5d3169 = jidDecode(_0x24d5b6) || {}
        return (
          (_0x5d3169.user &&
            _0x5d3169.server &&
            _0x5d3169.user + '@' + _0x5d3169.server) ||
          _0x24d5b6
        )
      } else {
        return _0x24d5b6
      }
    }),
    ryn.ev.on('contacts.update', (_0x56463d) => {
      for (let _0x2f7613 of _0x56463d) {
        let _0x48f88d = ryn.decodeJid(_0x2f7613.id)
        if (store && store.contacts) {
          store.contacts[_0x48f88d] = {
            id: _0x48f88d,
            name: _0x2f7613.notify,
          }
        }
      }
    }),
    (ryn.getName = (_0x1b50bd, _0x26072b = false) => {
      id = ryn.decodeJid(_0x1b50bd)
      _0x26072b = ryn.withoutContact || _0x26072b
      let _0x2c35b4
      if (id.endsWith('@g.us')) {
        return new Promise(async (_0x584a21) => {
          _0x2c35b4 = store.contacts[id] || {}
          if (!(_0x2c35b4.name || _0x2c35b4.subject)) {
            _0x2c35b4 = ryn.groupMetadata(id) || {}
          }
          _0x584a21(
            _0x2c35b4.name ||
              _0x2c35b4.subject ||
              PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber(
                'international'
              )
          )
        })
      } else {
        _0x2c35b4 =
          id === '0@s.whatsapp.net'
            ? {
                id: id,
                name: 'WhatsApp',
              }
            : id === ryn.decodeJid(ryn.user.id)
            ? ryn.user
            : store.contacts[id] || {}
      }
      return (
        (_0x26072b ? '' : _0x2c35b4.name) ||
        _0x2c35b4.subject ||
        _0x2c35b4.verifiedName ||
        PhoneNumber('+' + _0x1b50bd.replace('@s.whatsapp.net', '')).getNumber(
          'international'
        )
      )
    }),
    (ryn.parseMention = (_0x2c55da = '') => {
      return [..._0x2c55da.matchAll(/@([0-9]{5,16}|0)/g)].map(
        (_0x18fb99) => _0x18fb99[1] + '@s.whatsapp.net'
      )
    }),
    (ryn.sendContact = async (
      _0x3979f9,
      _0x5699a2,
      _0x4a6dc4 = '',
      _0x18d124 = {}
    ) => {
      let _0x2193ed = []
      for (let _0x326516 of _0x5699a2) {
        _0x2193ed.push({
          displayName: await ryn.getName(_0x326516),
          vcard:
            'BEGIN:VCARD\nVERSION:3.0\nN:' +
            (await ryn.getName(_0x326516)) +
            '\nFN:' +
            (await ryn.getName(_0x326516)) +
            '\nitem1.TEL;waid=' +
            _0x326516 +
            ':' +
            _0x326516 +
            '\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:' +
            yt +
            '\nitem2.X-ABLabel:YouTube\nitem3.URL:' +
            socialm +
            '\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;' +
            location +
            ';;;;\nitem4.X-ABLabel:Region\nEND:VCARD',
        })
      }
      ryn.sendMessage(
        _0x3979f9,
        {
          contacts: {
            displayName: _0x2193ed.length + ' Contact',
            contacts: _0x2193ed,
          },
          ..._0x18d124,
        },
        { quoted: _0x4a6dc4 }
      )
    }),
    (ryn.setStatus = (_0x5bcd5a) => {
      return (
        ryn.query({
          tag: 'iq',
          attrs: {
            to: '@s.whatsapp.net',
            type: 'set',
            xmlns: 'status',
          },
          content: [
            {
              tag: 'status',
              attrs: {},
              content: Buffer.from(_0x5bcd5a, 'utf-8'),
            },
          ],
        }),
        _0x5bcd5a
      )
    }),
    (ryn.autoai= false),
    (ryn.public = true),
    (ryn.sendImage = async (
      _0x415085,
      _0x43eea3,
      _0x523ffc = '',
      _0x4115eb = '',
      _0x308744
    ) => {
      let _0x3ee3a8 = Buffer.isBuffer(_0x43eea3)
        ? _0x43eea3
        : /^data:.*?\/.*?;base64,/i.test(_0x43eea3)
        ? Buffer.from(_0x43eea3.split`,`[1], 'base64')
        : /^https?:\/\//.test(_0x43eea3)
        ? await await getBuffer(_0x43eea3)
        : fs.existsSync(_0x43eea3)
        ? fs.readFileSync(_0x43eea3)
        : Buffer.alloc(0)
      return await ryn.sendMessage(
        _0x415085,
        {
          image: _0x3ee3a8,
          caption: _0x523ffc,
          ..._0x308744,
        },
        { quoted: _0x4115eb }
      )
    }),
    (ryn.sendImageAsSticker = async (
      _0x54a70b,
      _0x5d065d,
      _0x1f7457,
      _0x329e24 = {}
    ) => {
      let _0x271960 = Buffer.isBuffer(_0x5d065d)
          ? _0x5d065d
          : /^data:.*?\/.*?;base64,/i.test(_0x5d065d)
          ? Buffer.from(_0x5d065d.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x5d065d)
          ? await await getBuffer(_0x5d065d)
          : fs.existsSync(_0x5d065d)
          ? fs.readFileSync(_0x5d065d)
          : Buffer.alloc(0),
        _0x1aa4a
      _0x329e24 && (_0x329e24.packname || _0x329e24.author)
        ? (_0x1aa4a = await writeExifImg(_0x271960, _0x329e24))
        : (_0x1aa4a = await imageToWebp(_0x271960))
      await ryn
        .sendMessage(
          _0x54a70b,
          {
            sticker: { url: _0x1aa4a },
            ..._0x329e24,
          },
          { quoted: _0x1f7457 }
        )
        .then((_0x102ac4) => {
          return fs.unlinkSync(_0x1aa4a), _0x102ac4
        })
    }),
    (ryn.sendVideoAsSticker = async (
      _0x8647fe,
      _0x250716,
      _0x3576ae,
      _0x2ff02b = {}
    ) => {
      let _0x217ce4 = Buffer.isBuffer(_0x250716)
          ? _0x250716
          : /^data:.*?\/.*?;base64,/i.test(_0x250716)
          ? Buffer.from(_0x250716.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x250716)
          ? await await getBuffer(_0x250716)
          : fs.existsSync(_0x250716)
          ? fs.readFileSync(_0x250716)
          : Buffer.alloc(0),
        _0xa9c4da
      return (
        _0x2ff02b && (_0x2ff02b.packname || _0x2ff02b.author)
          ? (_0xa9c4da = await writeExifVid(_0x217ce4, _0x2ff02b))
          : (_0xa9c4da = await videoToWebp(_0x217ce4)),
        await ryn.sendMessage(
          _0x8647fe,
          {
            sticker: { url: _0xa9c4da },
            ..._0x2ff02b,
          },
          { quoted: _0x3576ae }
        ),
        _0xa9c4da
      )
    }),
    (ryn.copyNForward = async (
      _0x2f800d,
      _0x16d793,
      _0x92427d = false,
      _0x3e2eb4 = {}
    ) => {
      let _0xe3a363
      _0x3e2eb4.readViewOnce &&
        ((_0x16d793.message =
          _0x16d793.message &&
          _0x16d793.message.ephemeralMessage &&
          _0x16d793.message.ephemeralMessage.message
            ? _0x16d793.message.ephemeralMessage.message
            : _0x16d793.message || undefined),
        (_0xe3a363 = Object.keys(_0x16d793.message.viewOnceMessage.message)[0]),
        delete (_0x16d793.message && _0x16d793.message.ignore
          ? _0x16d793.message.ignore
          : _0x16d793.message || undefined),
        delete _0x16d793.message.viewOnceMessage.message[_0xe3a363].viewOnce,
        (_0x16d793.message = { ..._0x16d793.message.viewOnceMessage.message }))
      let _0xe9b6c6 = Object.keys(_0x16d793.message)[0],
        _0xb2c1e7 = await generateForwardMessageContent(_0x16d793, _0x92427d),
        _0x37c636 = Object.keys(_0xb2c1e7)[0],
        _0x317367 = {}
      if (_0xe9b6c6 != 'conversation') {
        _0x317367 = _0x16d793.message[_0xe9b6c6].contextInfo
      }
      _0xb2c1e7[_0x37c636].contextInfo = {
        ..._0x317367,
        ..._0xb2c1e7[_0x37c636].contextInfo,
      }
      const _0x4c9920 = await generateWAMessageFromContent(
        _0x2f800d,
        _0xb2c1e7,
        _0x3e2eb4
          ? {
              ..._0xb2c1e7[_0x37c636],
              ..._0x3e2eb4,
              ...(_0x3e2eb4.contextInfo
                ? {
                    contextInfo: {
                      ..._0xb2c1e7[_0x37c636].contextInfo,
                      ..._0x3e2eb4.contextInfo,
                    },
                  }
                : {}),
            }
          : {}
      )
      return (
        await ryn.relayMessage(_0x2f800d, _0x4c9920.message, {
          messageId: _0x4c9920.key.id,
        }),
        _0x4c9920
      )
    }),
    (ryn.downloadAndSaveMediaMessage = async (
      _0x236044,
      _0x7d1dfe,
      _0x1d4582 = true
    ) => {
      let _0x532fff = _0x236044.msg ? _0x236044.msg : _0x236044,
        _0x3b66cf = (_0x236044.msg || _0x236044).mimetype || '',
        _0x50e9a1 = _0x236044.mtype
          ? _0x236044.mtype.replace(/Message/gi, '')
          : _0x3b66cf.split('/')[0]
      const _0xf6296a = await downloadContentFromMessage(_0x532fff, _0x50e9a1)
      let _0x55bfad = Buffer.from([])
      for await (const _0x44eb5a of _0xf6296a) {
        _0x55bfad = Buffer.concat([_0x55bfad, _0x44eb5a])
      }
      let _0x3b5cf7 = await FileType.fromBuffer(_0x55bfad)
      return (
        (trueFileName = _0x1d4582
          ? _0x7d1dfe + '.' + _0x3b5cf7.ext
          : _0x7d1dfe),
        await fs.writeFileSync(trueFileName, _0x55bfad),
        trueFileName
      )
    }),
    (ryn.downloadMediaMessage = async (_0x35a316) => {
      let _0x3eba99 = (_0x35a316.msg || _0x35a316).mimetype || '',
        _0x29335e = _0x35a316.mtype
          ? _0x35a316.mtype.replace(/Message/gi, '')
          : _0x3eba99.split('/')[0]
      const _0x556953 = await downloadContentFromMessage(_0x35a316, _0x29335e)
      let _0x1205c3 = Buffer.from([])
      for await (const _0x1e22d4 of _0x556953) {
        _0x1205c3 = Buffer.concat([_0x1205c3, _0x1e22d4])
      }
      return _0x1205c3
    }),
    (ryn.getFile = async (_0x47b73a, _0x229323) => {
      let _0x475257,
        _0x12aef1 = Buffer.isBuffer(_0x47b73a)
          ? _0x47b73a
          : /^data:.*?\/.*?;base64,/i.test(_0x47b73a)
          ? Buffer.from(_0x47b73a.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x47b73a)
          ? await (_0x475257 = await getBuffer(_0x47b73a))
          : fs.existsSync(_0x47b73a)
          ? ((filename = _0x47b73a), fs.readFileSync(_0x47b73a))
          : typeof _0x47b73a === 'string'
          ? _0x47b73a
          : Buffer.alloc(0),
        _0x54937d = (await FileType.fromBuffer(_0x12aef1)) || {
          mime: 'application/octet-stream',
          ext: '.bin',
        }
      filename = path.join(
        __filename,
        './lib' + new Date() * 1 + '.' + _0x54937d.ext
      )
      if (_0x12aef1 && _0x229323) {
        fs.promises.writeFile(filename, _0x12aef1)
      }
      return {
        res: _0x475257,
        filename: filename,
        size: await getSizeMedia(_0x12aef1),
        ..._0x54937d,
        data: _0x12aef1,
      }
    }),
    (ryn.sendMedia = async (
      _0x55e7f1,
      _0x57d3e7,
      _0x4a8ff4 = '',
      _0x49fcd1 = '',
      _0x30f97f = '',
      _0x3bc399 = {}
    ) => {
      let _0x55ff5f = await ryn.getFile(_0x57d3e7, true),
        {
          mime: _0x3612dd,
          ext: _0x6eee1d,
          res: _0x517e96,
          data: _0x36c073,
          filename: _0x5c2545,
        } = _0x55ff5f
      if ((_0x517e96 && _0x517e96.status !== 200) || file.length <= 65536) {
        try {
          throw { json: JSON.parse(file.toString()) }
        } catch (_0x2027e1) {
          if (_0x2027e1.json) {
            throw _0x2027e1.json
          }
        }
      }
      let _0x367c33 = '',
        _0x3f067e = _0x3612dd,
        _0x5df0c9 = _0x5c2545
      if (_0x3bc399.asDocument) {
        _0x367c33 = 'document'
      }
      if (_0x3bc399.asSticker || /webp/.test(_0x3612dd)) {
        let { writeExif: _0x7f2b1d } = require('./lib/exif'),
          _0x1238df = {
            mimetype: _0x3612dd,
            data: _0x36c073,
          }
        _0x5df0c9 = await _0x7f2b1d(_0x1238df, {
          packname: _0x3bc399.packname ? _0x3bc399.packname : global.packname,
          author: _0x3bc399.author ? _0x3bc399.author : global.author,
          categories: _0x3bc399.categories ? _0x3bc399.categories : [],
        })
        await fs.promises.unlink(_0x5c2545)
        _0x367c33 = 'sticker'
        _0x3f067e = 'image/webp'
      } else {
        if (/image/.test(_0x3612dd)) {
          _0x367c33 = 'image'
        } else {
          if (/video/.test(_0x3612dd)) {
            _0x367c33 = 'video'
          } else {
            if (/audio/.test(_0x3612dd)) {
              _0x367c33 = 'audio'
            } else {
              _0x367c33 = 'document'
            }
          }
        }
      }
      return (
        await ryn.sendMessage(
          _0x55e7f1,
          {
            [_0x367c33]: { url: _0x5df0c9 },
            caption: _0x49fcd1,
            mimetype: _0x3f067e,
            fileName: _0x4a8ff4,
            ..._0x3bc399,
          },
          {
            quoted: _0x30f97f,
            ..._0x3bc399,
          }
        ),
        fs.promises.unlink(_0x5df0c9)
      )
    }),
    (ryn.sendText = (_0x2e27c0, _0x2ccd97, _0x3b4158 = '', _0x27cf76) =>
      ryn.sendMessage(
        _0x2e27c0,
        {
          text: _0x2ccd97,
          ..._0x27cf76,
        },
        { quoted: _0x3b4158 }
      )),
    (ryn.serializeM = (_0x45a4ce) => smsg(ryn, _0x45a4ce, store)),
    (ryn.sendButtonText = (
      _0x275a6c,
      _0xff958a = [],
      _0x34c1d2,
      _0x43db5c,
      _0x1f24e1 = '',
      _0xb11ad8 = {}
    ) => {
      let _0x36b229 = {
        text: _0x34c1d2,
        footer: _0x43db5c,
        buttons: _0xff958a,
        headerType: 2,
        ..._0xb11ad8,
      }
      ryn.sendMessage(_0x275a6c, _0x36b229, {
        quoted: _0x1f24e1,
        ..._0xb11ad8,
      })
    }),
    (ryn.sendKatalog = async (
      _0x5b1f2d,
      _0x3f8dd5 = '',
      _0x13360b = '',
      _0x23e8fa,
      _0x1bd5fc = {}
    ) => {
      let _0x48e50e = await prepareWAMessageMedia(
        { image: _0x23e8fa },
        { upload: ryn.waUploadToServer }
      )
      const _0x65a551 = generateWAMessageFromContent(
        _0x5b1f2d,
        {
          productMessage: {
            product: {
              productImage: _0x48e50e.imageMessage,
              productId: '9999',
              title: _0x3f8dd5,
              description: _0x13360b,
              currencyCode: 'INR',
              priceAmount1000: '100000',
              url: '' + websitex,
              productImageCount: 1,
              salePriceAmount1000: '0',
            },
            businessOwnerJid: ownernumber + '@s.whatsapp.net',
          },
        },
        _0x1bd5fc
      )
      return ryn.relayMessage(_0x5b1f2d, _0x65a551.message, {
        messageId: _0x65a551.key.id,
      })
    }),
    (ryn.send5ButLoc = async (
      _0x4d3c9a,
      _0x556489 = '',
      _0xa8df10 = '',
      _0x3efa28,
      _0x3112de = [],
      _0x1cd00c = {}
    ) => {
      var _0x2b097d = generateWAMessageFromContent(
        _0x4d3c9a,
        proto.Message.fromObject({
          templateMessage: {
            hydratedTemplate: {
              hydratedContentText: _0x556489,
              locationMessage: { jpegThumbnail: _0x3efa28 },
              hydratedFooterText: _0xa8df10,
              hydratedButtons: _0x3112de,
            },
          },
        }),
        _0x1cd00c
      )
      ryn.relayMessage(_0x4d3c9a, _0x2b097d.message, {
        messageId: _0x2b097d.key.id,
      })
    }),
    (ryn.sendButImg = async (
      _0xff5a69,
      _0x3a02ec,
      _0x390c6e,
      _0x25c791,
      _0xe0f1c8
    ) => {
      let _0x5cc6ed = Buffer.isBuffer(_0x3a02ec)
          ? _0x3a02ec
          : /^data:.*?\/.*?;base64,/i.test(_0x3a02ec)
          ? Buffer.from(_0x3a02ec.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x3a02ec)
          ? await await getBuffer(_0x3a02ec)
          : fs.existsSync(_0x3a02ec)
          ? fs.readFileSync(_0x3a02ec)
          : Buffer.alloc(0),
        _0x5a081a = {
          image: _0x5cc6ed,
          jpegThumbnail: _0x5cc6ed,
          caption: _0x390c6e,
          fileLength: '1',
          footer: _0x25c791,
          buttons: _0xe0f1c8,
          headerType: 4,
        }
      ryn.sendMessage(_0xff5a69, _0x5a081a, { quoted: m })
    }),
    (ryn.sendFile = async (
      _0x5eccea,
      _0xf02349,
      _0x4e7566 = '',
      _0x4fa271 = '',
      _0x1f53df,
      _0xbab122 = false,
      _0x554db6 = {}
    ) => {
      let _0x2c7b69 = await ryn.getFile(_0xf02349, true),
        { res: _0x43baac, data: _0x25a22c, filename: _0x393746 } = _0x2c7b69
      if (
        (_0x43baac && _0x43baac.status !== 200) ||
        _0x25a22c.length <= 65536
      ) {
        try {
          throw { json: JSON.parse(_0x25a22c.toString()) }
        } catch (_0x51eb82) {
          if (_0x51eb82.json) {
            throw _0x51eb82.json
          }
        }
      }
      const _0x2fc159 = fs.statSync(_0x393746).size / 1024 / 1024
      if (_0x2fc159 >= 1800) {
        throw new Error(' The file size is too large\n\n')
      }
      let _0x9f963b = { quoted: _0x1f53df }
      if (_0x1f53df) {
      }
      if (!_0x2c7b69) {
        _0x554db6.asDocument = true
      }
      let _0x170f3a = '',
        _0x2fdd86 = _0x554db6.mimetype || _0x2c7b69.mime,
        _0x49091c
      if (
        /webp/.test(_0x2c7b69.mime) ||
        (/image/.test(_0x2c7b69.mime) && _0x554db6.asSticker)
      ) {
        _0x170f3a = 'sticker'
      } else {
        if (
          /image/.test(_0x2c7b69.mime) ||
          (/webp/.test(_0x2c7b69.mime) && _0x554db6.asImage)
        ) {
          _0x170f3a = 'image'
        } else {
          if (/video/.test(_0x2c7b69.mime)) {
            _0x170f3a = 'video'
          } else {
            if (/audio/.test(_0x2c7b69.mime)) {
              _0x49091c = await toAudio(_0x25a22c, _0x2c7b69.ext)
              _0x25a22c = _0x49091c.data
              _0x393746 = _0x49091c.filename
              _0x170f3a = 'audio'
              _0x2fdd86 = _0x554db6.mimetype || 'audio/ogg; codecs=opus'
            } else {
              _0x170f3a = 'document'
            }
          }
        }
      }
      if (_0x554db6.asDocument) {
        _0x170f3a = 'document'
      }
      delete _0x554db6.asSticker
      delete _0x554db6.asLocation
      delete _0x554db6.asVideo
      delete _0x554db6.asDocument
      delete _0x554db6.asImage
      let _0xc0c30b = {
          ..._0x554db6,
          caption: _0x4fa271,
          ptt: _0xbab122,
          [_0x170f3a]: { url: _0x393746 },
          mimetype: _0x2fdd86,
          fileName: _0x4e7566 || _0x393746.split('/').pop(),
        },
        _0x148b79
      try {
        _0x148b79 = await ryn.sendMessage(_0x5eccea, _0xc0c30b, {
          ..._0x9f963b,
          ..._0x554db6,
        })
      } catch (_0x3e5506) {
        console.error(_0x3e5506)
        _0x148b79 = null
      } finally {
        if (!_0x148b79) {
          _0x148b79 = await ryn.sendMessage(
            _0x5eccea,
            {
              ..._0xc0c30b,
              [_0x170f3a]: _0x25a22c,
            },
            {
              ..._0x9f963b,
              ..._0x554db6,
            }
          )
        }
        return (_0x25a22c = null), _0x148b79
      }
    }),
    (ryn.sendFileUrl = async (
      _0x377d50,
      _0x591d26,
      _0x25cab5,
      _0x5bfa2e,
      _0x2e6e10 = {}
    ) => {
      let _0x5280bf = '',
        _0xda5dab = await axios.head(_0x591d26)
      _0x5280bf = _0xda5dab.headers['content-type']
      if (_0x5280bf.split('/')[1] === 'gif') {
        return ryn.sendMessage(
          _0x377d50,
          {
            video: await getBuffer(_0x591d26),
            caption: _0x25cab5,
            gifPlayback: true,
            ..._0x2e6e10,
          },
          {
            quoted: _0x5bfa2e,
            ..._0x2e6e10,
          }
        )
      }
      let _0x34606e = _0x5280bf.split('/')[0] + 'Message'
      if (_0x5280bf === 'application/pdf') {
        return ryn.sendMessage(
          _0x377d50,
          {
            document: await getBuffer(_0x591d26),
            mimetype: 'application/pdf',
            caption: _0x25cab5,
            ..._0x2e6e10,
          },
          {
            quoted: _0x5bfa2e,
            ..._0x2e6e10,
          }
        )
      }
      if (_0x5280bf.split('/')[0] === 'image') {
        return ryn.sendMessage(
          _0x377d50,
          {
            image: await getBuffer(_0x591d26),
            caption: _0x25cab5,
            ..._0x2e6e10,
          },
          {
            quoted: _0x5bfa2e,
            ..._0x2e6e10,
          }
        )
      }
      if (_0x5280bf.split('/')[0] === 'video') {
        return ryn.sendMessage(
          _0x377d50,
          {
            video: await getBuffer(_0x591d26),
            caption: _0x25cab5,
            mimetype: 'video/mp4',
            ..._0x2e6e10,
          },
          {
            quoted: _0x5bfa2e,
            ..._0x2e6e10,
          }
        )
      }
      if (_0x5280bf.split('/')[0] === 'audio') {
        return ryn.sendMessage(
          _0x377d50,
          {
            audio: await getBuffer(_0x591d26),
            caption: _0x25cab5,
            mimetype: 'audio/mpeg',
            ..._0x2e6e10,
          },
          {
            quoted: _0x5bfa2e,
            ..._0x2e6e10,
          }
        )
      }
    }),
    (ryn.sendPoll = (
      _0x244640,
      _0x557005 = '',
      _0x3cfda8 = [],
      _0x2d3fdf = 1
    ) => {
      return ryn.sendMessage(_0x244640, {
        poll: {
          name: _0x557005,
          values: _0x3cfda8,
          selectableCount: _0x2d3fdf,
        },
      })
    }),
    ryn
  )
}
NawBotz()
process.on('uncaughtException', function (_0x2b846a) {
  console.log('Caught exception: ', _0x2b846a)
})