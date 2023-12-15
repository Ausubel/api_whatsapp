const {OpenAI} = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI();

async function getGptMessage(){
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
}

getGptMessage();
module.exports = {
    getGptMessage
};