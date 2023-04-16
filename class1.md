Step 1
```bash
yarn init
```
Step2
```bash
yarn add express @line/bot-sdk openai ngrok
```
Step3
```js
const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('server start')
});
```
Step3
```js
const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('server start')
});
```
Step4
```bash
node index.js
```
Step5
```js
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('哈囉')
})

app.get('/webhook', (req, res) => {
    res.send('這是webhook')
})


app.listen(port, () => {
    console.log('server start')
});
```
