const fs = require('fs')
const moment = require('moment-timezone')
const config = JSON.parse(fs.readFileSync(`./config.json`))
const speed = require('performance-now')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')        

const shape = '️꧉'			
const d = new Date
const locale = 'id'
const gmt = new Date(0).getTime() - new Date('1 January 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const hari = d.toLocaleDateString(locale, { weekday: 'long' })
const datee = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
         }) 
const ini_hari = `${hari} ${weton}, ${datee}`

exports.start = async(lol, name) => {
    text = `Date: ${ini_hari}\nTime: ${time}\n\nHello ${name}! Im a multifunction bot build with ❤️ by  [my master](${config.ownerLink})\n\n type /help to display Menu!.`
    await lol.replyWithMarkdown(text, { disable_web_page_preview: true })
}

exports.help = async(lol, name, user_id) => {
    text = `Date: ${ini_hari}\nTime: ${time}\n\nHello ${name}! Here are the available commands you can use:\n\nIf you encounter a problem with the bot, please report it to the owner of the bot by typing /report\n\n Semoga Hari Mu Menyenangkan`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Islami ', callback_data: 'islami-' + user_id },
                    { text: 'Download ', callback_data: 'downloader-' + user_id }
                ],
                [
                    { text: 'Text Pro Me ', callback_data: 'textpro-' + user_id },
                    { text: 'Photo Oxy ', callback_data: 'phoxy-' + user_id },
                    { text: 'Ephoto 360 ', callback_data: 'ephoto-' + user_id }
                ],
                [
                    { text: 'Random Image ', callback_data: 'randimage-' + user_id },
                    { text: 'Random Text ', callback_data: 'randtext-' + user_id },
                ],
                [
                    { text: 'Anime ', callback_data: 'anime-' + user_id },
                    { text: 'Movie & Story ', callback_data: 'movie-' + user_id }, 
                    { text: 'Education ', callback_data: 'education-' + user_id },
                ],
                [ 
                    { text: 'Game & Fun', callback_data: 'game-' + user_id },
                    { text: 'About User', callback_data: 'user-' + user_id },
                ], 
                [
                    { text: 'Owner Only', callback_data: 'owner-' + user_id },
                ], 
                [
                    { text: 'Information', callback_data: 'info-' + user_id }, 
                    { text: 'Group & Admin', callback_data: 'gc-' + user_id },
                ],
            ]
        }
    }
    try {
        await lol.editMessageText(text, options)
    } catch {
        await lol.reply(text, options)
    }
}

exports.islami = async(lol, user_id) => {
    prefix = config.prefix
    text = `Islami Menu :

${shape} /listsurah
${shape} /alquran no_surah
${shape} /alquran no_surah/no_ayat
${shape} /alquran no_surah/no_ayat1-no_ayat2
${shape} /alquranaudio no_surah
${shape} /alquranaudio no_surah/no_ayat
${shape} /asmaulhusna
${shape} /kisahnabi
${shape} /jadwalsholat daerah
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.downloader = async(lol, user_id) => {
    prefix = config.prefix
    text = `Downloader Menu :

${shape} /xnxxdl link
${shape} /ytplay query
${shape} /ytsearch query
${shape} /ytmp3 link
${shape} /ytmp4 link
${shape} /tiktoknowm link
${shape} /tiktokmusic link
${shape} /tiktokmusic link
${shape} /twitterimage link
${shape} /spotify link
${shape} /spotifysearch query
${shape} /jooxplay query
${shape} /zippyshare link
${shape} /pinterest query
${shape} /pinterestdl link
${shape} /pixiv query
${shape} /pixivdl pixiv_id
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.movie = async(lol, user_id) => {
    prefix = config.prefix
    text = `Movie & Story Menu :

${shape} /drakorongoing
${shape} /lk21 query
${shape} /wattpad url_wattpad
${shape} /wattpadsearch query
${shape} /cerpen
${shape} /ceritahoror
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}


exports.anime = async(lol, user_id) => {
    prefix = config.prefix
    text = `Anime Menu :

${shape} /wait
${shape} /manga query
${shape} /anime query
${shape} /character query
${shape} /kusonime url_kusonime
${shape} /kusonimesearch query
${shape} /otakudesu url_otakudesu
${shape} /otakudesusearch query
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.randtext = async(lol, user_id) => {
    prefix = config.prefix
    text = `Random Text Menu :

${shape} /quotes
${shape} /quotesdilan
${shape} /quotesanime
${shape} /quotesimage
${shape} /faktaunik
${shape} /katabijak
${shape} /pantun
${shape} /bucin
${shape} /randomnama
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.randimage = async(lol, user_id) => {
    prefix = config.prefix
    text = `Radom Image Menu :

${shape} /art
${shape} /bts
${shape} /exo
${shape} /elf
${shape} /loli
${shape} /neko
${shape} /waifu
${shape} /shota
${shape} /husbu
${shape} /sagiri
${shape} /shinobu
${shape} /megumin
${shape} /wallnime
${shape} /chiisaihentai
${shape} /trap
${shape} /blowjob
${shape} /yaoi
${shape} /ecchi
${shape} /hentai
${shape} /ahegao
${shape} /hololewd
${shape} /sideoppai
${shape} /animefeets
${shape} /animebooty
${shape} /animethighss
${shape} /hentaiparadise
${shape} /animearmpits
${shape} /hentaifemdom
${shape} /lewdanimegirls
${shape} /biganimetiddies
${shape} /animebellybutton
${shape} /hentai4everyone
${shape} /bj
${shape} /ero
${shape} /cum
${shape} /feet
${shape} /yuri
${shape} /trap
${shape} /lewd
${shape} /feed
${shape} /eron
${shape} /solo
${shape} /gasm
${shape} /poke
${shape} /anal
${shape} /holo
${shape} /tits
${shape} /kuni
${shape} /kiss
${shape} /erok
${shape} /smug
${shape} /baka
${shape} /solog
${shape} /feetg
${shape} /lewdk
${shape} /waifu
${shape} /pussy
${shape} /femdom
${shape} /cuddle
${shape} /hentai
${shape} /eroyuri
${shape} /cum_jpg
${shape} /blowjob
${shape} /erofeet
${shape} /holoero
${shape} /classic
${shape} /erokemo
${shape} /fox_girl
${shape} /futanari
${shape} /lewdkemo
${shape} /wallpaper
${shape} /pussy_jpg
${shape} /kemonomimi
${shape} /nsfw_avatar
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.textpro = async(lol, user_id) => {
    prefix = config.prefix
    text = `Text Pro Me Menu :

${shape} /blackpink text
${shape} /neon text
${shape} /greenneon text
${shape} /advanceglow text
${shape} /futureneon text
${shape} /sandwriting text
${shape} /sandsummer text
${shape} /sandengraved text
${shape} /metaldark text
${shape} /neonlight text
${shape} /holographic text
${shape} /text1917 text
${shape} /minion text
${shape} /deluxesilver text
${shape} /newyearcard text
${shape} /bloodfrosted text
${shape} /halloween text
${shape} /jokerlogo text
${shape} /fireworksparkle text
${shape} /natureleaves text
${shape} /bokeh text
${shape} /toxic text
${shape} /strawberry text
${shape} /box3d text
${shape} /roadwarning text
${shape} /breakwall text
${shape} /icecold text
${shape} /luxury text
${shape} /cloud text
${shape} /summersand text
${shape} /horrorblood text
${shape} /thunder text
${shape} /pornhub text1 text2
${shape} /glitch text1 text2
${shape} /avenger text1 text2
${shape} /space text1 text2
${shape} /ninjalogo text1 text2
${shape} /marvelstudio text1 text2
${shape} /lionlogo text1 text2
${shape} /wolflogo text1 text2
${shape} /steel3d text1 text2
${shape} /wallgravity text1 text2
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}


exports.phoxy = async(lol, user_id) => {
    prefix = config.prefix
    text = `Photo Oxy Menu :

${shape} /shadow text
${shape} /cup text
${shape} /cup1 text
${shape} /romance text
${shape} /smoke text
${shape} /burnpaper text
${shape} /lovemessage text
${shape} /undergrass text
${shape} /love text
${shape} /coffe text
${shape} /woodheart text
${shape} /woodenboard text
${shape} /summer3d text
${shape} /wolfmetal text
${shape} /nature3d text
${shape} /underwater text
${shape} /golderrose text
${shape} /summernature text
${shape} /letterleaves text
${shape} /glowingneon text
${shape} /fallleaves text
${shape} /flamming text
${shape} /harrypotter text
${shape} /carvedwood text
${shape} /tiktok text1 text2
${shape} /arcade8bit text1 text2
${shape} /battlefield4 text1 text2
${shape} /pubg text1 text2
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.education = async(lol, user_id) => {
          prefix = config.prefix
          text = `Education To Help You Go To Schooln

${shape} /translate
${shape} /brainly
${shape} /kbbi
${shape} /wiki 
${shape} /nulis
${shape} /nulis1
${shape} /nulis2
${shape} /nulis3
${shape} /nulis4
${shape} /nulis5
${shape} /nulis6
`
   await lol.editMessageText(text, {
     reply_markup: {
       inline_keyboard: [
             [
                { text: 'Back', callback_data: 'help-' + user_id } 
              ]
           ]
        }
    })
} 

exports.game = async(lol, user_id) => {
	prefix = config.prefix
	text = `A Very Fun Game To Entertain You!

${shape} /caklontong
${shape} /tebakgambar
${shape} /tebakbendera
${shape} /tebakangka
${shape} /siapaaku
${shape} /asahotak
${shape} /family100
${shape} /tebakkata
${shape} /susunkata 
${shape} /meme
`         
   await lol.editMessageText(text, {
     reply_markup: {
       inline_keyboard: [
             [
                { text: 'Back', callback_data: 'help-' + user_id } 
              ]
           ]
        }
    })
} 

exports.user = async(lol, user_id) => { 
    prefix = config.prefix
    text = `validate about your information!

${shape} /status    
${shape} /daftar
${shape} /unreg
${shape} /getid

`
await lol.editMessageText(text, {
     reply_markup: {
       inline_keyboard: [
             [
                { text: 'Back', callback_data: 'help-' + user_id } 
              ]
           ]
        }
    })
} 

exports.info = async(lol, user_id) => {
    prefix = config.prefix 
    text = `look for the latest information so you dont miss the information! 

${shape} /igstalk
${shape} /tiktokstalk
${shape} /twitstalk
${shape} /kodepos
${shape} /covid
${shape} /infogempa
${shape} /infotsunami
${shape} /infocuacabandara
${shape} /infocuacadunia
`

await lol.editMessageText(text, {
     reply_markup: {
       inline_keyboard: [
             [
                { text: 'Back', callback_data: 'help-' + user_id } 
              ]
           ]
        }
    })
}
exports.gc = async(lol, user_id) => { 
    prefix = config.prefix
    text = `Command Only For Group!
    
${shape} /gcdesk
${shape} /gctitle 
${shape} /gcpict  
${shape} /leave
${shape} /delpict
${shape} /infochat
${shape} /chatscount
`  
await lol.editMessageText(text, {
     reply_markup: {
       inline_keyboard: [
             [
                { text: 'Back', callback_data: 'help-' + user_id } 
              ]
           ]
        }
    })
}
exports.owner = async(lol, user_id) => {
    prefix = config.prefix
    text = `Owner's Special Features So You Can't Use It

${shape} /ban 
${shape} /unban
${shape} /adduser
${shape} /resetban
${shape} /resetuser
${shape} /shutdown
`
await lol.editMessageText(text, {
     reply_markup: {
       inline_keyboard: [
             [
                { text: 'Back', callback_data: 'help-' + user_id } 
              ]
           ]
        }
    })
} 
exports.ephoto = async(lol, user_id) => {
    prefix = config.prefix
    text = `Ephoto 360 Menu :

${shape} /wetglass text
${shape} /multicolor3d text
${shape} /watercolor text
${shape} /luxurygold text
${shape} /galaxywallpaper text
${shape} /lighttext text
${shape} /beautifulflower text
${shape} /puppycute text
${shape} /royaltext text
${shape} /heartshaped text
${shape} /birthdaycake text
${shape} /galaxystyle text
${shape} /hologram3d text
${shape} /greenneon text
${shape} /glossychrome text
${shape} /greenbush text
${shape} /metallogo text
${shape} /noeltext text
${shape} /glittergold text
${shape} /textcake text
${shape} /starsnight text
${shape} /wooden3d text
${shape} /textbyname text
${shape} /writegalacy text
${shape} /galaxybat text
${shape} /snow3d text
${shape} /birthdayday text
${shape} /goldplaybutton text
${shape} /silverplaybutton text
${shape} /freefire text
${shape} /cartoongravity text
${shape} /anonymhacker text
${shape} /anonymhacker text
${shape} /mlwall text
${shape} /pubgmaskot text
${shape} /aovwall text
${shape} /logogaming text
${shape} /fpslogo text
${shape} /avatarlolnew text
${shape} /lolbanner text
${shape} /avatardota text
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.messageError = async(lol) => {
    await lol.reply(`Error! Please report to the [${config.owner}](${config.ownerLink}) about this`, { parse_mode: "Markdown", disable_web_page_preview: true })
}
