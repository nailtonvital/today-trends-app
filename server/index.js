const express = require('express');
const googleTrends = require('google-trends-api');
const cors = require('cors');
const server = express();

server.use(cors());

server.use(express.json());

server.get('/relatedTopics', async (request, response) => {
    const { word } = request.query
    
    const related = await googleTrends.relatedTopics({ keyword: word })
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.rankedList
            const result = text[0].rankedKeyword.forEach(element => {
               arr.push(element.topic.title)
            });
            response.send(arr)
        })
        .catch((err) => {
            response.send(err);
        })
});

server.get('/relatedQueries', async (request, response) => {
    const { word } = request.query
    
     await googleTrends.relatedQueries({ keyword: word })
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.rankedList
            const result = text[0].rankedKeyword.forEach(element => {
               arr.push(element.query)
            });
            response.send(arr)
        })
        .catch((err) => {
            response.send(err);
        })
});

server.listen(3333, (err) => {
    if (!err) {
        console.log('Port: 3333')
    }
})
