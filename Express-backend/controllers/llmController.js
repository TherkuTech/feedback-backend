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
                content:`[The teaching is good , The Teaching is bad , Need to improve, The Teaching is worse , The staff is booring , The lessons are not fully completed] 
                This is a list which contains the feedback of the teaching of the teachers in the school.
                i need the response in a way where map the each teedback with the category of that feedback
                in a json format

                [
                    {
                        "feedback": "The teaching is good",
                        "category": "Good",
                        "action":"",
                    },
                    {
                        "feedback": "The Teaching is bad",
                        "category": "Bad",
                        "action":""
                    },
                    {
                        "feedback": "Need to improve",
                        "category": "Improvement",
                        "action":""
                    }
                ]
                there is no need for explanation not even instructions, just give the response in the json format with key names data
                recommend the action to be taken for the feedback in the action key `
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