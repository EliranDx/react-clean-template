import express from 'express';

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.send('OK'));

app.listen(2000, () => {
    console.log("listening on 2000...");
});