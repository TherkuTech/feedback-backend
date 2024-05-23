const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: "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"
});
async function main() {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
}
async function getGroqChatCompletion() {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: " [The teaching is good , The Teaching is bad , Need to improve] categories positive and negative feedbacks in this array of data"
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