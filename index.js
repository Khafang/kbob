const Discord = require('discord.js'); //เรียก discord.js มาใช้
const kbob = new Discord.Client(); //ประกาศ client ขึ้นมา
const img = 'https://i.ytimg.com/vi/eYEwcnocpOk/maxresdefault.jpg'
var http = require('http');
var i = 0
//event นี้ทำงานเมื่อ login สำเร็จ
kbob.on('ready', () => {
  console.log('kbob online');
})

//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
kbob.on('message', message => {
  if (message.content === 'หวัดดี ไอ้เสือ') {
    if (message.author.username === 'Switch.07') {
      message.channel.send('อานะบอส');
    } else {
      message.channel.send('เห');
    }
      i++
      if(i === 5) {
        message.reply('พิมพ์ควยไรเยอะแยะวะ');
        i = 0;
      }
  } else if (message.content === 'ใครคือโดเรม่อนวะ') {
    message.channel.sendFile(img, 'doraemon.jpg', 'นี่ไงสาส!')
  } else if (message.content.split(' ')[0].toLowerCase() === 'ow' && message.content.split(' ')[0].toLowerCase()) {
    try {
      var url = 'http://ow-api.herokuapp.com/profile/pc/us/' + message.content.split(' ')[1].split('#')[0] + '-' + message.content.split(' ')[1].split('#')[1]
      console.log(url)
      http.get(url,
       function(res) {
        console.log("Got response: " + res.statusCode);

        res.on("data", function(chunk) {
          try {
            console.log("BODY: " + chunk);
          var ow = JSON.parse(chunk)
          message.channel.send('แรงค์ของ' + ow.username + ' คือ ' + ow.competitive.rank + ' จำนวนครั้งที่เล่นใน Season นี้: ' + ow.games.competitive.played +
                               'ครั้ง จำนวนครั้งที่ชนะ: ' + ow.games.competitive.wins + ' ครั้ง');
          message.channel.sendFile(ow.portrait, 'port.jpg', '')
        } catch(e) {
          message.channel.send('หาไม่เจออะ')
        }
        });
      }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  } catch (e) {
    message.channel.send('หาไม่เจออะ')
  }
  }
   else {
    console.log(message.content);
  }
})

// kbob.on('messageDelete', message => {
//   message.channel.send('(-w-)+)');
// })

kbob.login('MzE1MTM1NjExODY0MzUwNzIw.DACa-w.ewWjutASwoU8zqxQD3bQWD2Lbmw');
