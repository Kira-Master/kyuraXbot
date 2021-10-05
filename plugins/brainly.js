const brainly  = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) return m.reply('Soalnya mana?')
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
  m.reply(answer)
}
handler.command = /^(brainly|brain)$/i
module.exports = handler