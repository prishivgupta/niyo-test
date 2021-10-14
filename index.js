const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data.js')

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/user-name/:name', (req, res) => {
    const name = req.params.name;
    const users = data.users;
    const filteredUsers = users.filter(user => {
        return user.name.toLocaleLowerCase().includes(name)
    });
    res.send(filteredUsers);
});

app.get('/balance/:balance', (req, res) => {
    const balance = parseInt(req.params.balance);
    const users = data.users;
    const filteredUsers = users.filter(user => {
        return user.balance > balance
    });
    res.send(filteredUsers);
});

app.listen(port, () => console.log(`Listening on port ${port}!`))