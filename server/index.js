const express = require('express');
const googleTrends = require('google-trends-api');
const server = express();

server.use(express.json());

server.get('/d', async (request, response) => {
          const related = await googleTrends.relatedTopics({ keyword: 'venom' })
         .then((res) => {
            let result = []
             let text = JSON.parse(res).default.rankedList

             console.log(text)
         })
         .catch((err) => {
             response.send(err);
         })
        
});

server.listen(3333, (err)=>{
    if(!err){
        console.log('Port: 3333')
    }
})
