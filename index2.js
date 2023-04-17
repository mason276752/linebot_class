const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "YOUR_API_KEY",
});
const openai = new OpenAIApi(configuration);


openai.createChatCompletion({
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "你是誰?"}],
    "temperature": 0.7
}).then((completion) => {
    console.log(completion.data.choices[0].message.content);
})