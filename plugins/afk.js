let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
}
handler.command = /^(afk|off|offline|of)$/i
module.exports = handler
