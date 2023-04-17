const express = require('express');
const botsdk = require('@line/bot-sdk')

const app = express();

const port = 3000;

const  config = {
    channelAccessToken: "YOUR_ACCESS_TOKEN",
    channelSecret: "YOUR_SECRET_KEY"
}
const  client = new botsdk.Client(config)

app.get('/', (req, res) => {
    res.send('哈囉')
})


app.post('/webhook', botsdk.middleware(config), (req, res) => {
    req.body.events.map((event) => {
        console.log(JSON.stringify(event, null, 2))
        if (event.message.type == 'text') {
            client.replyMessage(event.replyToken, { type: 'text', text: event.message.text })
        }
    })
    res.end()
})

app.listen(port, () => {
    console.log('server start')
});