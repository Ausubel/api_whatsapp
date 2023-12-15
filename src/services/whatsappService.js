const { on } = require("events");
const https = require("https");
function SendMessageWhatsApp(data){
    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/196088416914493/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAASmLD8JMowBO5iZCRZAoEZB2XhKZCfrdSekrIgrVoAeewb6qtbPLVVZAbdjPEf4hSby0EBFatZCRKSy1JFoWoXqKPhayTkwZALRtGOe7ChsN9nUzpXT4r7oxZCA1yqa3x1wg6z5DVME0XDUZCF245ZAVNE1uZBvqZB6MmDepZBssV7N5CBrMd5uHGnWnuGZCJjqZBJtM0u"
        }
    };
    const req = https.request(options);
    onRequestError(req);
}

onRequestError = (req) => {
    req.on("error", error => {
        console.error(error);
    });
    req.write(data);
    req.end();
}
module.exports = {
    SendMessageWhatsApp
};