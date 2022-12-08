const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
    {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '윤상복',
    'birthday': '930515',
    'gender': '남자',
    'job': '세무사'
    },
    {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김남자',
    'birthday': '900515',
    'gender': '남자',
    'job': '여대생'
    },
    {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '윤여자',
    'birthday': '910515',
    'gender': '여자',
    'job': '남대생'
    }]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));