const {main} = require('../utils/llm');



const categoriesFeedback =  async (req,res) =>{
    var data = req.body.data;
    var prompt = `This is a list which contains the feedback of the teaching of the teachers in the school.
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
                    recommend the action to be taken for the feedback in the action key
                    don't use \n or any other special character i need that data for data analysis so don't format it for printing in console purpose
                    i said i just need the data in json format don't format it for printing in console purpose`
    try{
        const chatCompletion = await main(data , prompt);
        const cleanedString = chatCompletion.replace(/\n/g, '');
        if(chatCompletion === "") return res.status(400).json({status:"failed", message:"No data found"});
        data = JSON.parse(cleanedString);
        return res.status(200).json({status:"success", data });   
    } catch(err){
        return res.status(500).json({status:"failed", message:err.message});
    }
}

module.exports = {categoriesFeedback}