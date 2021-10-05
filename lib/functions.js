let { WAConnection, MessageType } = require('@adiwajshing/baileys');
let arifi = new WAConnection()
let { 
    text, 
    extendedText, 
    contact,
    contactsArray,
    location, 
    liveLocation, 
    image, 
    video, 
    sticker, 
    document, 
    audio, 
    product, 
    listMessage, 
    buttonsMessage, 
    groupInviteMessage 
} = MessageType

const fetch = require('node-fetch');
const axios = require('axios');
const cfonts = require('cfonts');
const moment = require("moment-timezone");
const spin = require('spinnies');
const Crypto = require('crypto');
const figlet = require('figlet');
const fs = require("fs");
const chalk = require('chalk');

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

module.exports = {
	generateMessageID,
	getGroupAdmins
}

module.exports.h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

module.exports.getBuffer = async(url, options) => {
try {
		options ? options : {}
		let res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

module.exports.getAdmins = (participants) => {
	admins = []
	for (let i of participants) {
i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

module.exports.getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
"interval": 120,
"frames": [
    "",
    "𝗕",
    "𝗕𝗬",
    "𝗕𝗬 ",
    "𝗕𝗬 ∶",
    "𝗕𝗬 ∶ ",
    "𝗕𝗬 ∶ メ",
    "𝗕𝗬 ∶ メⲂ",
    "𝗕𝗬 ∶ メⲂⲟⲦ",
    "𝗕𝗬 ∶ メⲂⲟⲦz",
    "𝗕𝗬 ∶ メⲂⲟⲦz ",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀ",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪ",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍ",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜ",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀ",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ ",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
      "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
            "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽...",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽..",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽.",
    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵𒉽",
        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍⁴̵",
            "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅⁰͍",
                "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ⁴̅",
                    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐  ",
                        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐ ",
                            "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ࿐",
                                "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀᴜ",
                                    "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜʀ",
                                        "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍᴜ",
                                            "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪᴍ",
                                                "𝗕𝗬 ∶ メⲂⲟⲦz ʀɪ",
                                                  "𝗕𝗬 ∶ メⲂⲟⲦz ʀ",
                                                     "𝗕𝗬 ∶ メⲂⲟⲦz",
                                                        "𝗕𝗬 ∶ メⲂⲟⲦ",
                                                            "𝗕𝗬 ∶ メⲂⲟ",
                                                               "𝗕𝗬 ∶ メⲂ",
                                                                 "𝗕𝗬 ∶ メ",
                                                                    "𝗕𝗬 ∶ ",
                                                                        "𝗕𝗬 ∶",
                                                                            "𝗕𝗬 ",
                                                                                "𝗕𝗬",
                                                                                    "𝗕",
]}

let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
	spins.add(id, {text: text})
	}
module.exports.info = (id, text) => {
	spins.update(id, {text: text})
}
module.exports.success = (id, text) => {
	spins.succeed(id, {text: text})
	}
module.exports.close = (id, text) => {
	spins.fail(id, {text: text})
}

var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malam 🌃`; break;
case 1: waktoonyabro = `Selamat Malam 🌃`; break;
case 2: waktoonyabro = `Selamat Malam 🌃`; break;
case 3: waktoonyabro = `Selamat Pagi ✨`; break;
case 4: waktoonyabro = `Selamat Pagi ✨`; break; 
case 5: waktoonyabro = `Selamat Pagi ✨`; break;
case 6: waktoonyabro = `Selamat Pagi ✨`; break;
case 7: waktoonyabro = `Selamat Pagi ✨`; break;
case 8: waktoonyabro = `Selamat Pagi ✨`; break;
case 9: waktoonyabro = `Selamat Pagi ✨`; break;
case 10: waktoonyabro = `Selamat Pagi ✨`; break;
case 11: waktoonyabro = `Selamat Siang 🔥`; break; 
case 12: waktoonyabro = `Selamat Siang 🔥`; break;
case 13: waktoonyabro = `Selamat Siang 🔥`; break;
case 14: waktoonyabro = `Selamat Siang 🔥`; break;
case 15: waktoonyabro = `Selamat Sore 🌇`; break;
case 16: waktoonyabro = `Selamat Sore 🌇`; break;
case 17: waktoonyabro = `Selamat Sore 🌇`; break;
case 18: waktoonyabro = `Selamat Malam 🌃`; break; 
case 19: waktoonyabro = `Selamat Malam 🌃`; break;
case 20: waktoonyabro = `Selamat Malam 🌃`; break;
case 21: waktoonyabro = `Selamat Malam 🌃`; break;
case 22: waktoonyabro = `Selamat Malam 🌃`; break; 
case 23: waktoonyabro = `Selamat Malam 🌃`; break;
}
module.exports.ucapanWaktu = waktoonyabro;

console.log(color(figlet.textSync('RIMURU BOTZ', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
	}), 'cyan'))
console.log(bgcolor(`${waktoonyabro}\n`,'red'))
module.exports.time = moment.tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm')
module.exports.clock = moment.tz('Asia/Jakarta').format('HH:mm')
let d = new Date();
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
module.exports.weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
module.exports.week = d.toLocaleDateString(locale, { weekday: 'long' })
module.exports.calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

function countwaktu(seconds) {
if (typeof seconds !== "number") throw "Error: Unexpected Param "+ typeof seconds
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
module.exports.countwaktu = countwaktu

function pad(s) {
return (s < 10 ? '0': '') + s;
}
module.exports.pad = pad

function random(res) {
ult = res[Math.floor(Math.random() * res.length)]
return ult
}
module.exports.random = random

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9 :%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9() :%_+.~#?&/=]*)/, 'gi'))
}
module.exports.isUrl = isUrl

const math = (teks) => {
return Math.floor(teks)
}
module.exports.math = math

exports.getGroupAdmins = function(participants){
    admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

module.exports.isNumber = x => typeof x === 'number' && !isNaN(x)
exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
             console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.getBase64 = getBase64 = async (url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

function nocache(module) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        arifi.logger.info(`${module} updated`)
    })
}
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
module.exports.uncache = uncache
module.exports.nocache = nocache
const more = String.fromCharCode(8206)
module.exports.readmore = more.repeat(4001)
let sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms*1000));
}
module.exports.sleep = sleep