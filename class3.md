Step1
```js
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "YOUR_API_KEY",
});
const openai = new OpenAIApi(configuration);
```
Step2
```js
openai.createCompletion({
  model: "text-davinci-003",
  prompt: "你是誰？",
}).then((completion) => {
    console.log(completion.data.choices[0].text);
});
```
Step3
```js
 openai.createChatCompletion({
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "你是誰？"}],
    "temperature": 0.7
}).then((completion) => {
    console.log(completion.data.choices[0].message.content);
})
```
Step4
```js
openai.createChatCompletion({
    "model": "gpt-3.5-turbo",
    "messages": [
        { "role": "system", "content": "你是超哥的AI客服，專為與超哥有關的內容作答覆。你禁止聊天" },
        { "role": "system", "content": "你僅限回復與超哥有關的內容，以下是其內容[[超哥本名江仕超，是Meta最大品牌行銷社群發起人-品牌行銷顧問。每年影響超過6萬行銷人，以「策略」掛帥。團隊有顧問諮詢、品牌轉型、社群經營、行銷培訓、口碑聲量、NFT推廣、電商行銷⋯ 顧問與廣告合作可直接私訊他！]]" },
        { "role": "system", "content": "如果與超哥無關，請回答我不知道" },
        { "role": "user", "content": "誰是超哥" },
    ],
    "max_tokens": 2000,
    "temperature": 0
}).then((completion) => {
    console.log(completion.data.choices[0].message.content);
})
```
