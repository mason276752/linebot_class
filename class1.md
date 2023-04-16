Step 1
```bash
yarn init
```
Step2
```bash
yarn add express @line/sdk openai ngrok
```
Step3
```js
constexpress = require('express');

constapp = express();

constport = 3000;

app.listen(port, () => {
    console.log('server start')
});
```
Step3
```js
constexpress = require('express');

constapp = express();

constport = 3000;

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
constexpress = require('express');

constapp = express();

constport = 3000;

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