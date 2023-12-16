const { OpenAI } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI();

async function getGptMessage(textUser) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: textUser }],
        model: "gpt-3.5-turbo",
        max_tokens: 150,
    });
    return completion.choices[0].message.content;
}

module.exports = {
    getGptMessage
};
