const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: "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"
});



async function main(data , prompt) {
    const chatCompletion = await getGroqChatCompletion(data, prompt);
    return chatCompletion.choices[0]?.message?.content || "";
}

async function getGroqChatCompletion(data,prompt) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `
                    ${data}
                    ${prompt}
                `
            }
        ],
        model: "llama3-8b-8192"
    });
}

main()

module.exports = {
    main,
    getGroqChatCompletion
};