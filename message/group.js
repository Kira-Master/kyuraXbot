let {
	MessageType
} = require("@adiwajshing/baileys");
let fs = require("fs-extra")
let moment = require("moment-timezone");

let { getBuffer, getGroupAdmins} = require("./lib/functions");
let { color } = require("./lib/color");

module.exports = welcome = async (rimuru, anu) => {
    try {
      groupMet = await rimuru.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await rimuru.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await rimuru.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(rimuru.user.jid)) {
        rimuru.sendMessage(anu.jid, "Silahkan Menggunakan Bot, asal jan spam!", "conversation");
      }
      if (anu.action == "add" && !mem.includes(rimuru.user.jid)) {
        mdata = await rimuru.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = rimuru.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `Halo ${anu_user} \n\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa isi\nAnd Following Rules Group`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `#ytes#`, buttonText: { displayText: "VERIFIKASI" }, type: 1 },
        ];
        imageMsg = (
          await rimuru.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Semoga betah ☕",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await rimuru.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        rimuru.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(rimuru.user.jid)) {
        mdata = await rimuru.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = rimuru.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `Kenapa tuh? kok bisa keluar? \nSayonara ${anu_user} we will miss you`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `#ytes#`, buttonText: { displayText: "VERIFIKASI" }, type: 1 },
        ];
        imageMsg = (
          await rimuru.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Nitip gorengan ya",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await rimuru.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        rimuru.relayWAMessage(prep);
      }
      if (anu.action == "promote") {
        const mdata = await rimuru.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = rimuru.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await rimuru.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buffer = await getBuffer(
          `https://janbot-api.herokuapp.com/api/promote?name=${anu_user}&mem=${groupAdmins.length}&msg=Selamat%20Menjadi%20Admin&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} Telah dipromote`;
        rimuru.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }

      if (anu.action == "demote") {
        const mdata = await rimuru.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = rimuru.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await rimuru.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/demote?name=${anu_user}&msg=yahahaha didemote&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} Telah didemote`;
        rimuru.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  }