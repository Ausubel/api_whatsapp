const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const openaiApiService = require("../services/openaiApiService");

async function Process(textUser, number){
    textUser= textUser.toLowerCase();
    var models = [];

    const resultChatGPT = await openaiApiService.getGptMessage(textUser);
    if(resultChatGPT != ""){
        const model = whatsappModel.MessageText(resultChatGPT, number);
        models.push(model);
    }else{
        const model = whatsappModel.MessageText("Algo salio mal", number);
        models.push(model);
    }
    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    Process
};