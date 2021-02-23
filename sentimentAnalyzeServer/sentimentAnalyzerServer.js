const express = require('express');
const app = new express();
const getNLUInstance = require('./getNLUInstance');
const NLUInstance = getNLUInstance();

app.use(express.static('client'))

const cors_app = require('cors');

app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
});

app.get("/url/emotion", (req,res) => {
    const analyzeParams = {
        'url': req.query.url,
        'features': {
            'emotion': {
                'document':true
            }
        }
    };
    NLUInstance.analyze(analyzeParams)
        .then(analysisResults => 
            res.send(analysisResults.result.emotion.document.emotion)
        )
        .catch(err => res.send({error: true, message: err.message}))
});

app.get("/url/sentiment", (req,res) => {
    const analyzeParams = {
        'url': req.query.url,
        'features': {
            'sentiment': {
                'document':true
            }
        }
    };
    NLUInstance.analyze(analyzeParams)
        .then(analysisResults => 
            res.send(analysisResults.result.sentiment.document.label)
        )
        .catch(err => res.send({error: true, message: err.message}))
});

app.get("/text/emotion", (req,res) => {
    const analyzeParams = {
        'text': req.query.text,
        'features': {
            'emotion': {
                'document':true
            }
        }
    };
    NLUInstance.analyze(analyzeParams)
        .then(analysisResults => 
            res.send(analysisResults.result.emotion.document.emotion)
        )
        .catch(err => res.send({error: true, message: err.message}))
});

app.get("/text/sentiment", (req,res) => {
    const analyzeParams = {
        'text': req.query.text,
        'features': {
            'sentiment': {
                'document':true
            }
        }
    };
    NLUInstance.analyze(analyzeParams)
        .then(analysisResults => 
            res.send(analysisResults.result.sentiment.document.label)
        )
        .catch(err => res.send({error: true, message: err.message}))
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

