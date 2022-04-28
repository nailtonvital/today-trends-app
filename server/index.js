const express = require('express');
const googleTrends = require('google-trends-api');
const server = express();

server.use(express.json());

server.get('/keyword/:word', async (request, response) => {
    const { word } = request.params
    response.send(word)
    /*
    const related = await googleTrends.relatedTopics({ keyword: 'venom' })
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.rankedList
            const result = text[0].rankedKeyword.forEach(element => {
                console.log(element.topic.title)
            });

        })
        .catch((err) => {
            response.send(err);
        })
*/
});

server.listen(3333, (err) => {
    if (!err) {
        console.log('Port: 3333')
    }
})
