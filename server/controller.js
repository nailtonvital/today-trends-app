const googleTrends = require('google-trends-api');

const related = googleTrends.relatedQueries({ keyword: "anime"})
.then((res)=>{
    console.log(res)
})
.catch((err) => {
    console.log(err);
})